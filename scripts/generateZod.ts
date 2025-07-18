import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";
import { generate } from "ts-to-zod";

// --- Configuration ---
const inputDir = "src/types";
const outputDir = "src/generated/zod";

async function main() {
	console.log("Starting Zod schema generation...");

	// Find all .ts files in the input directory
	const inputFiles = await glob(`${inputDir}/**/*.ts`);

	if (inputFiles.length === 0) {
		console.warn(`No input files found in ${inputDir}. Exiting.`);
		return;
	}

	try {
		// Ensure the output directory exists
		await fs.mkdir(outputDir, { recursive: true });
	} catch (error) {
		// If the error is anything OTHER than "directory already exists", re-throw it.
		if (error.code !== "EEXIST") {
			throw error;
		}
		// If it's EEXIST, safely ignore it and continue.
	}

	console.log(`Found ${inputFiles.length} files to process...`);

	// Loop through each input file and generate the corresponding output
	for (const inputFile of inputFiles) {
		const fileName = path.basename(inputFile);
		const outputFile = path.join(outputDir, fileName);

		console.log(`- Processing ${inputFile} -> ${outputFile}`);

		// Read the source file content
		const sourceText = await fs.readFile(inputFile, "utf-8");

		// Use the `generate` function from ts-to-zod
		const { getZodSchemasFile } = generate({
			sourceText: sourceText,
			// Keep JSDoc comments
			keepComments: true,
		});

		// Write the generated content to the output file
		const zodSchemasText = getZodSchemasFile(fileName); // Pass original filename for context

		const combinedOutput = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.\n\n${zodSchemasText}`;

		await fs.writeFile(outputFile, combinedOutput);
	}

	console.log("✅ Zod schema generation complete!");
}

// Run the main function and handle any errors
main().catch((error) => {
	console.error("Error during Zod schema generation:", error);
	process.exit(1);
});
