import fs from "node:fs/promises";
import path from "node:path";
import * as Codegen from "@sinclair/typebox-codegen";
import { glob } from "glob";

// --- Generator Map ---
// Maps a simple command-line string to the correct generator object.
const generators = {
	typebox: Codegen.TypeScriptToTypeBox, // This one is a special case (1-step)
	zod: Codegen.ModelToZod,
	valibot: Codegen.ModelToValibot,
	yup: Codegen.ModelToYup,
	arktype: Codegen.ModelToArkType,
	effect: Codegen.ModelToEffect,
	jsonschema: Codegen.ModelToJsonSchema,
};

// --- Main Function ---
async function main() {
	// Read the target package from command-line arguments
	const targetPackage = process.argv[2]; // The first argument after "node generate.mjs"

	if (!targetPackage || !generators[targetPackage.toLowerCase()]) {
		console.error("❌ Error: You must specify a valid target package.");
		console.error(`Usage: node generate.mjs <package-name>`);
		console.error(`Available packages: ${Object.keys(generators).join(", ")}`);
		process.exit(1);
	}

	const selectedGenerator = generators[targetPackage.toLowerCase()];
	console.log(`🚀 Starting schema generation for: ${targetPackage}`);

	// --- Configuration ---
	const inputDir = "src/types";
	const outputDir = path.join("src/generated", targetPackage.toLowerCase()); // Dynamic output dir!
	// ---------------------

	// Find all .ts files recursively in the input directory
	const inputFiles = await glob(`${inputDir}/**/*.ts`);

	if (inputFiles.length === 0) {
		console.warn(`No TypeScript files found in ${inputDir}. Exiting.`);
		return;
	}

	await fs.mkdir(outputDir, { recursive: true });
	console.log(`Found ${inputFiles.length} files to process...`);

	// Process each file
	for (const inputFile of inputFiles) {
		const relativePath = path.relative(inputDir, inputFile);
		const outputFile = path.join(outputDir, relativePath);

		console.log(`- Processing ${inputFile} -> ${outputFile}`);
		await fs.mkdir(path.dirname(outputFile), { recursive: true });

		const sourceText = await fs.readFile(inputFile, "utf-8");

		// Generate code using the selected generator
		let generatedCode: any;
		if (targetPackage.toLowerCase() === "typebox") {
			// TypeBox is a direct 1-step generation
			generatedCode = selectedGenerator.Generate(sourceText);
		} else {
			// Other packages use a 2-step process: TS -> Model -> Target
			const model = Codegen.TypeScriptToModel.Generate(sourceText);
			generatedCode = selectedGenerator.Generate(model);
		}

		const combinedOutput = `// THIS FILE IS AUTO-GENERATED FOR ${targetPackage.toUpperCase()}. DO NOT EDIT.\n\n${generatedCode}`;
		await fs.writeFile(outputFile, combinedOutput);
	}

	console.log(`✅ Schema generation for ${targetPackage} complete!`);
	console.log(`   Output directory: ${outputDir}`);
}

// Run the main function and handle any potential errors
main().catch((error) => {
	console.error("❌ Error during schema generation:", error);
	process.exit(1);
});
