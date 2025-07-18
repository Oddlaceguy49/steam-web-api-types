import fs from "node:fs";
import path from "node:path";
import * as Codegen from "@sinclair/typebox-codegen";

// --- Configuration ---
const inputDir = "src/types";
const outputDir = "src/generated";

console.log(`Starting TypeBox code generation...`);

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
	console.log(`Created output directory: ${outputDir}`);
}

// Read all files from the input directory
const files = fs.readdirSync(inputDir);
console.log(`Found ${files.length} files in ${inputDir}.`);

// Process each file
for (const file of files) {
	// We only care about TypeScript files
	if (path.extname(file) !== ".ts") {
		continue;
	}

	const inputPath = path.join(inputDir, file);
	const outputPath = path.join(outputDir, file);

	console.log(`- Processing ${inputPath}...`);

	// Read the source TypeScript type definitions
	const typeScriptCode = fs.readFileSync(inputPath, "utf-8");

	// Use the library to generate TypeBox code
	const generatedCode = Codegen.TypeScriptToTypeBox.Generate(typeScriptCode);

	// Write the generated code to the output directory
	fs.writeFileSync(outputPath, generatedCode, "utf-8");
	console.log(`  -> Saved to ${outputPath}`);
}

console.log("Code generation complete!");
