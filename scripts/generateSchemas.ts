import fs from "node:fs/promises";
import path from "node:path";
import * as Codegen from "@sinclair/typebox-codegen";
import { glob } from "glob";
import { generate as generateZod } from "ts-to-zod";

const generators = {
	types: "self",
	typebox: Codegen.TypeScriptToTypeBox,
	zod: "ts-to-zod",
	valibot: Codegen.ModelToValibot,
	yup: Codegen.ModelToYup,
	arktype: Codegen.ModelToArkType,
	effect: Codegen.ModelToEffect,
	jsonschema: Codegen.ModelToJsonSchema,
};

async function generateFiles(baseOutputDir) {
	const schemaDir = path.join(baseOutputDir, "types");
	console.log(`\n📦 Generating index file for ${baseOutputDir}...`);
	const globPath = `${schemaDir.replace(/\\/g, "/")}/**/*.ts`;
	const generatedFiles = await glob(globPath, { ignore: "**/index.ts" });

	if (generatedFiles.length === 0) {
		console.log(`   -> No files found in ${globPath} to index. Skipping.`);
		return;
	}

	generateIndexFile(baseOutputDir, generatedFiles);
	generateDetailsFile(baseOutputDir, generatedFiles);
}

async function generateIndexFile(
	baseOutputDir: string,
	generatedFiles: string[]
) {
	let indexContent = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.\n\n`;
	for (const file of generatedFiles) {
		const fileContent = await fs.readFile(file, "utf-8");
		const exportRegex =
			/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+?)(?<!_properties_[A-Za-z0-9_]+)\s*=/g;
		// /export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+?)\s*=/g;
		const allMatches = [...fileContent.matchAll(exportRegex)];
		const exportedNames = [...new Set(allMatches.map((match) => match[1]))];

		if (exportedNames.length > 0) {
			const relativePath = path
				.relative(baseOutputDir, file)
				.replace(/\\/g, "/")
				.replace(/\.ts$/, "");
			indexContent += `export {\n\t${exportedNames.join(
				",\n\t"
			)},\n} from "./${relativePath}";\n\n`;
		}
	}
	const indexFilePath = path.join(baseOutputDir, "index.ts");
	await fs.writeFile(indexFilePath, indexContent);
	console.log(`   -> ✅ Index file generated at ${indexFilePath}`);
}

async function generateDetailsFile(
	baseOutputDir: string,
	generatedFiles: string[]
) {
	let detailsContent = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.\n\n`;
	for (const file of generatedFiles) {
		const fileContent = await fs.readFile(file, "utf-8");
		const exportRegex =
			/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+_properties_[A-Za-z0-9_]+)\s*=/g;
		// /export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+?)\s*=/g;
		const allMatches = [...fileContent.matchAll(exportRegex)];
		const exportedNames = [...new Set(allMatches.map((match) => match[1]))];

		if (exportedNames.length > 0) {
			const relativePath = path
				.relative(baseOutputDir, file)
				.replace(/\\/g, "/")
				.replace(/\.ts$/, "");
			detailsContent += `export {\n\t${exportedNames.join(
				",\n\t"
			)},\n} from "./${relativePath}";\n\n`;
		}
	}
	const detailsFilePath = path.join(baseOutputDir, "details.ts");
	await fs.writeFile(detailsFilePath, detailsContent);
	console.log(`   -> ✅ Details file generated at ${detailsFilePath}`);
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
		let generatedCode: any;

		if (targetPackage.toLowerCase() === "zod") {
			const { getZodSchemasFile } = generateZod({
				sourceText,
				keepComments: true,
			});
			generatedCode = getZodSchemasFile(inputFile);
		} else {
			const selectedGenerator = generators[targetPackage.toLowerCase()];
			if (targetPackage.toLowerCase() === "typebox") {
				generatedCode = selectedGenerator.Generate(sourceText);
			} else {
				const model = Codegen.TypeScriptToModel.Generate(sourceText);
				generatedCode = selectedGenerator.Generate(model);
			}

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
	await generateFiles(baseOutputDir);
}

main().catch((error) => {
	console.error("❌ Error during schema generation:", error);
	process.exit(1);
});
