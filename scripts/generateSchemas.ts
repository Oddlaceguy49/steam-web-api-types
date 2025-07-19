import fs from "node:fs/promises";
import path from "node:path";
import * as Codegen from "@sinclair/typebox-codegen";
import { glob } from "glob";

const generators = {
	types: Codegen.ModelToTypeScript,
	typebox: Codegen.ModelToTypeBox,
	zod: Codegen.ModelToZod,
	valibot: Codegen.ModelToValibot,
	yup: Codegen.ModelToYup,
	arktype: Codegen.ModelToArkType,
	effect: Codegen.ModelToEffect,
	jsonschema: Codegen.ModelToJsonSchema,
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
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+?)(?<!_properties_[A-Za-z0-9_]+)\s*=/g;
	const detailsExportRegex =
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+_properties_[A-Za-z0-9_]+)\s*=/g;

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
		let generatedCode: string;

		const selectedGenerator = generators[targetPackage.toLowerCase()];
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
