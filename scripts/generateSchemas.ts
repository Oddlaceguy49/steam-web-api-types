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
	// arktype: Codegen.ModelToArkType,
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

async function transformSourceText(
	sourceText: string,
	inputFile: string
): Promise<string> {
	const project = new Project();

	const sourceFile = project.createSourceFile(
		inputFile, // Provide a path for context
		sourceText, // Provide the file content
		{ overwrite: true } // Good practice
	);

	const interfacesToProcess: InterfaceDeclaration[] =
		sourceFile.getInterfaces();

	while (interfacesToProcess.length > 0) {
		const currentInterface = interfacesToProcess.shift();

		if (!currentInterface) continue;

		const parentInterfaceName = currentInterface.getName();

		for (const prop of currentInterface.getProperties()) {
			const propName = prop.getName();
			const typeNode = prop.getTypeNode();

			if (typeNode && Node.isTypeLiteral(typeNode)) {
				const newInterfaceName = `${parentInterfaceName}_properties_${propName}`;

				const newInterface = sourceFile.insertInterface(
					currentInterface.getChildIndex(),
					{
						name: newInterfaceName,
						isExported: true,
						properties: typeNode
							.getMembers()
							.filter(Node.isPropertySignature)
							.map((member) => member.getStructure()),
					}
				);

				interfacesToProcess.push(newInterface);

				prop.setType(newInterfaceName);
			}
		}
	}

	return sourceFile.getFullText();
}

async function generateFiles(
	baseOutputDir: string,
	schemaOutputDir: string,
	inputFiles: string[]
) {
	console.log(`
📦 Generating barrel files...`);

	const indexExportRegex =
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+?)(?<!_properties_[A-Za-z0-9_]+)\s*(?:=|{)/g;
	const detailsExportRegex =
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+_properties_[A-Za-z0-9_]+)\s*(?:=|{)/g;

	for (const inputFile of inputFiles) {
		const interfaceName = path.basename(inputFile, ".ts");
		const interfaceOutputDir = path.join(baseOutputDir, interfaceName);
		const generatedFilePath = path.join(schemaOutputDir, `${interfaceName}.ts`);

		if (!(await fileExists(generatedFilePath))) {
			console.log(
				`   -> Generated file not found for ${interfaceName}. Skipping barrel file generation.`
			);
			continue;
		}

		await fs.mkdir(interfaceOutputDir, { recursive: true });

		console.log(`   -> Generating barrel files for ${interfaceName}...`);
		await generateBarrelFile(
			interfaceOutputDir,
			[generatedFilePath],
			"index.ts",
			indexExportRegex
		);
		await generateBarrelFile(
			interfaceOutputDir,
			[generatedFilePath],
			"details.ts",
			detailsExportRegex
		);
	}
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
		const transformedSourceText = await transformSourceText(
			sourceText,
			inputFile
		);

		if (targetPackage.toLowerCase() === "typebox") {
			generatedCode = Codegen.TypeScriptToTypeBox.Generate(
				transformedSourceText
			);
		} else if (targetPackage.toLowerCase() === "types") {
			// "types" is just the flattened version anyway
			generatedCode = transformedSourceText;
		} else {
			const model = Codegen.TypeScriptToModel.Generate(transformedSourceText);
			generatedCode = selectedGenerator.Generate(model);

			if (targetPackage.toLowerCase() === "yup") {
				console.log("\n🔧 Fixing up generated Yup code...");
				generatedCode = generatedCode.replace(
					"import y from 'yup'",
					"import * as y from 'yup'"
				);
			}

			// Currently broken, will fix later maybe?
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
	await generateFiles(baseOutputDir, schemaOutputDir, inputFiles);
}

async function fileExists(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath);
		return true;
	} catch {
		return false;
	}
}

main().catch((error) => {
	console.error("❌ Error during schema generation:", error);
	process.exit(1);
});
