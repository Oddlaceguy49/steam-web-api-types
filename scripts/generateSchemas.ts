import fs from "node:fs/promises";
import path from "node:path";
import * as Codegen from "@sinclair/typebox-codegen";
import { glob } from "glob";
import { type InterfaceDeclaration, Node, Project } from "ts-morph";

const generators = {
	typebox: Codegen.TypeScriptToTypeBox,
	zod: Codegen.ModelToZod,
	valibot: Codegen.ModelToValibot,
	yup: Codegen.ModelToYup,
	arktype: Codegen.ModelToArkType,
	effect: Codegen.ModelToEffect,
	jsonschema: Codegen.ModelToJsonSchema,
	types: "types",
};

async function generateBarrelFile(
	baseOutputDir: string,
	generatedFiles: string[],
	fileName: string,
	exportRegex: RegExp
) {
	let fileContent = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.\n\n`;
	for (const file of generatedFiles) {
		const sourceFileContent = await fs.readFile(file, "utf-8");
		const allMatches = [...sourceFileContent.matchAll(exportRegex)];
		const exportedNames = [...new Set(allMatches.map((match) => match[1]))];

		if (exportedNames.length > 0) {
			const relativePath = path
				.relative(baseOutputDir, file)
				.replace(/\\/g, "/")
				.replace(/\.ts$/, "");
			fileContent += `export {\n\t${exportedNames.join(
				",\n\t"
			)},\n} from \"./${relativePath}\";\n\n`;
		}
	}
	const filePath = path.join(baseOutputDir, fileName);
	await fs.writeFile(filePath, fileContent);
	console.log(`   -> ✅ ${fileName} generated at ${filePath}`);
}

async function generateFiles(baseOutputDir: string, schemaOutputDir: string) {
	console.log(`\n📦 Generating barrel files for ${schemaOutputDir}...`);
	const globPath = `${schemaOutputDir.replace(/\\/g, "/")}/**/*.ts`;
	const generatedFiles = await glob(globPath);

	if (generatedFiles.length === 0) {
		console.log(`   -> No files found in ${globPath} to index. Skipping.`);
		return;
	}

	const indexExportRegex =
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+?)(?<!_properties_[A-Za-z0-9_]+)\s*(?:=|{)/g;
	const detailsExportRegex =
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+_properties_[A-Za-z0-9_]+)\s*(?:=|{)/g;

	await generateBarrelFile(
		baseOutputDir,
		generatedFiles,
		"index.ts",
		indexExportRegex
	);
	await generateBarrelFile(
		baseOutputDir,
		generatedFiles,
		"details.ts",
		detailsExportRegex
	);
}

async function main() {
	const targetPackage = process.argv[2];
	if (!targetPackage || !generators[targetPackage.toLowerCase()]) {
		console.error("❌ Error: You must specify a valid target package.");
		console.error(`Usage: node generate.mjs <package-name>`);
		console.error(`Available packages: ${Object.keys(generators).join(", ")}`);
		process.exit(1);
	}
	console.log(`🚀 Starting schema generation for: ${targetPackage}`);

	const inputDir = "src/types";
	const baseOutputDir = path.join("src/generated", targetPackage.toLowerCase());
	const schemaOutputDir = path.join(baseOutputDir, "types");

	console.log(`\n🧹 Cleaning up previous output in ${baseOutputDir}...`);
	await fs.rm(baseOutputDir, { recursive: true, force: true });
	console.log("   -> Cleanup complete.");

	const inputFiles = await glob(`${inputDir}/**/*.ts`);
	if (inputFiles.length === 0) {
		console.warn(`No TypeScript files found in ${inputDir}. Exiting.`);
		return;
	}

	await fs.mkdir(schemaOutputDir, { recursive: true });
	console.log(`\nFound ${inputFiles.length} files to process...`);

	for (const inputFile of inputFiles) {
		const relativePath = path.relative(inputDir, inputFile);
		const outputFile = path.join(schemaOutputDir, relativePath);
		console.log(`- Processing ${inputFile} -> ${outputFile}`);
		await fs.mkdir(path.dirname(outputFile), { recursive: true });

		const sourceText = await fs.readFile(inputFile, "utf-8");
		let generatedCode: string = "";

		const selectedGenerator = generators[targetPackage.toLowerCase()];
		if (targetPackage.toLowerCase() === "typebox") {
			generatedCode = Codegen.TypeScriptToTypeBox.Generate(sourceText);
		} else if (targetPackage.toLowerCase() === "types") {
			const project = new Project();

			// 1. FIX: Add the source file to the project from the text you already read.
			// This returns a reference to the sourceFile object you can now manipulate.
			const sourceFile = project.createSourceFile(
				inputFile, // Provide a path for context
				sourceText, // Provide the file content
				{ overwrite: true } // Good practice
			);

			// 1. THE RECURSIVE STRATEGY: Create a "work queue".
			// Initialize it with all the interfaces that exist in the file at the start.
			const interfacesToProcess: InterfaceDeclaration[] =
				sourceFile.getInterfaces();

			// 2. Loop as long as there are interfaces in our queue to check.
			// This loop will process the original interfaces AND any new ones we create.
			while (interfacesToProcess.length > 0) {
				// Get the next interface to work on. .shift() treats the array like a queue (FIFO).
				const currentInterface = interfacesToProcess.shift();

				// Safety check in case of an empty element
				if (!currentInterface) continue;

				const parentInterfaceName = currentInterface.getName();

				// Iterate over every property within the CURRENT interface.
				for (const prop of currentInterface.getProperties()) {
					const propName = prop.getName();
					const typeNode = prop.getTypeNode();

					// Check if this property's type is an inline object literal (`{ ... }`).
					if (typeNode && Node.isTypeLiteral(typeNode)) {
						const newInterfaceName = `${parentInterfaceName}_properties_${propName}`;

						// Create the new interface and add it to the source file.
						const newInterface = sourceFile.addInterface({
							name: newInterfaceName,
							isExported: true,
							properties: typeNode
								.getMembers()
								// Ensure we only process property signatures, not method signatures etc.
								.filter(Node.isPropertySignature)
								.map((member) => member.getStructure()),
						});

						// 3. THE CRITICAL STEP: Add the newly created interface to our work queue.
						// The loop will now process this new interface on a future iteration to see
						// if IT also has any inline objects that need extracting.
						interfacesToProcess.push(newInterface);

						// Update the original property to reference the new interface by name.
						prop.setType(newInterfaceName);
					}
				}
			}

			// 4. Get the final, fully-transformed text from the modified AST.
			generatedCode = sourceFile.getFullText();
		} else {
			const model = Codegen.TypeScriptToModel.Generate(sourceText);
			generatedCode = selectedGenerator.Generate(model);

			if (targetPackage.toLowerCase() === "yup") {
				console.log("\n🔧 Fixing up generated Yup code...");
				generatedCode = generatedCode.replace(
					"import y from 'yup'",
					"import * as y from 'yup'"
				);
			}

			if (targetPackage.toLowerCase() === "arktype") {
				console.log("\n🔧 Fixing up generated ArkType code...");

				// Add // @ts-expect-error above every 'SomeType[]' property value
				generatedCode = generatedCode.replace(
					/^(\s*\w+\s*:\s*)('(?:\w+)'|\w+)\[\](,?)/gm,
					"// @ts-expect-error\n$1'$2[]'$3"
				);
				// Also handle cases like games: 'RecentlyPlayedGame[]'
				generatedCode = generatedCode.replace(
					/^(\s*\w+\s*:\s*)'(\w+\[\])'(,?)/gm,
					"// @ts-expect-error\n$1'$2'$3"
				);
			}
		}

		const combinedOutput = `// THIS FILE IS AUTO-GENERATED FOR ${targetPackage.toUpperCase()}. DO NOT EDIT.\n\n${generatedCode}`;
		await fs.writeFile(outputFile, combinedOutput);
	}
	console.log(`\n✅ Schema file generation for ${targetPackage} complete!`);
	console.log(`   Output directory: ${schemaOutputDir}`);
	await generateFiles(baseOutputDir, schemaOutputDir);
}

main().catch((error) => {
	console.error("❌ Error during schema generation:", error);
	process.exit(1);
});
