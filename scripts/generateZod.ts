// generate-typebox.mjs
import fs from "node:fs/promises";
import path from "node:path";
import * as Codegen from "@sinclair/typebox-codegen";
import { glob } from "glob";

// --- Configuration ---
const inputDir = "src/types";
const outputDir = "src/typebox";

async function main() {
	console.log("Starting TypeBox schema generation...");

	// Find all .ts files recursively in the input directory
	const inputFiles = await glob(`${inputDir}/**/*.ts`);

	if (inputFiles.length === 0) {
		console.warn(`No TypeScript files found in ${inputDir}. Exiting.`);
		return;
	}

	// Ensure the output directory exists, ignoring errors if it already does
	try {
		await fs.mkdir(outputDir, { recursive: true });
	} catch (error) {
		if (error.code !== "EEXIST") throw error;
	}

	console.log(`Found ${inputFiles.length} files to process...`);

	for (const inputFile of inputFiles) {
		// Get the relative path from the input directory to preserve the structure
		const relativePath = path.relative(inputDir, inputFile);
		const outputFile = path.join(outputDir, relativePath);

		console.log(`- Processing ${inputFile} -> ${outputFile}`);

		// Ensure the subdirectory for the output file exists
		await fs.mkdir(path.dirname(outputFile), { recursive: true });

		// Read the source TypeScript file content
		const sourceText = await fs.readFile(inputFile, "utf-8");

		// Use the `Generate` function from typebox-codegen
		const typeboxSchemasText = Codegen.TypeScriptToTypeBox.Generate(sourceText);

		// Add a header comment to the generated file
		const combinedOutput = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.\n\n${typeboxSchemasText}`;

		// Write the generated content to the output file
		await fs.writeFile(outputFile, combinedOutput);
	}

	console.log("✅ TypeBox schema generation complete!");
}

// Run the main function and handle any potential errors
main().catch((error) => {
	console.error("❌ Error during TypeBox schema generation:", error);
	process.exit(1);
});
