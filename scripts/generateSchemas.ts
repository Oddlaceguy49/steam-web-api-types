import fs from "node:fs/promises";
import path from "node:path";
import * as Codegen from "@sinclair/typebox-codegen";
import { glob } from "glob";
import { jsonSchemaToValibot } from "json-schema-to-valibot";
import { format } from "prettier";
import { Project } from "ts-morph";
import { generate as generateZod } from "ts-to-zod";
import * as TJS from "typescript-json-schema"; // The programmatic API for typescript-json-schema
import { generateArkTypeString, generateYupString } from "./utils/utils";

// --- Script Configuration ---

const SCRIPT_CONFIG = {
	INPUT_DIR: "src/types",
	OUTPUT_DIR_BASE: "src/generated",
	TYPES_SUBDIR: "types",
	BARREL_FILES: {
		INDEX: "index.ts",
		DETAILS: "details.ts",
	},
	FLATTEN_SEPARATOR: "_properties_",
	STRATEGIES: {
		TYPES: "types",
		JSON_SCHEMA: "json-schema",
		TYPESCRIPT_DIRECT: "typescript-direct",
		INTERFACE: "interface",
	},
	MAIN_EXPORT_REGEX:
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+?)(?<!_properties_[A-Za-z0-9_]+)\s*(?:=|{)/g,
	DETAILS_EXPORT_REGEX:
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+_properties_[A-Za-z0-9_]+)\s*(?:=|{)/g,
};

// Maps the command-line argument to the correct strategy.
const targetConfig = {
	types: { strategy: SCRIPT_CONFIG.STRATEGIES.TYPES }, // Added Kinda
	typebox: { strategy: SCRIPT_CONFIG.STRATEGIES.TYPESCRIPT_DIRECT }, // Added
	zod: { strategy: SCRIPT_CONFIG.STRATEGIES.TYPESCRIPT_DIRECT }, // Added
	yup: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA }, // Added
	valibot: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA }, // Added
	// arktype: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA }, // REALLY DAMN HARD
	// effect: { strategy: SCRIPT_CONFIG.STRATEGIES.TYPESCRIPT_DIRECT }, // NOPE BROKEN
	jsonschema: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA }, // Added
};

// --- Generation Strategies ---

const strategies = {
	[SCRIPT_CONFIG.STRATEGIES.TYPES]: {
		generate: async ({ inputFile }) => {
			const sourceText = await fs.readFile(inputFile, "utf-8");
			return sourceText;
		},
	},

	[SCRIPT_CONFIG.STRATEGIES.TYPESCRIPT_DIRECT]: {
		generate: async ({ inputFile, targetArg }) => {
			let generatedCode: string = "";
			const sourceText = await fs.readFile(inputFile, "utf-8");
			switch (targetArg) {
				case "zod": {
					const { getZodSchemasFile, getInferredTypes } = generateZod({
						sourceText,
						getSchemaName: (identifier) => `${identifier}`,
						keepComments: true,
					});

					// Generate the schemas part. Pass a dummy path because we will remove the import.
					const schemasFileContent = getZodSchemasFile("./dummy");

					// Generate the inferred types part.
					const typesFileContent = getInferredTypes("./dummy");

					// Clean up the generated parts.

					// This regex will find `import ... from "...";` and remove it.
					const importRegex = /^import .* from ".*";\r?\n?/gm;

					// Remove the imports from both chunks.
					const cleanedSchemas = schemasFileContent
						.replace(importRegex, "")
						.trim();
					let cleanedTypes = typesFileContent.replace(importRegex, "").trim();

					// This is the key fix: remove the "generated." prefix from the type aliases.
					// E.g., change `z.infer<typeof generated.PlayerSummarySchema>` to `z.infer<typeof PlayerSummarySchema>`
					cleanedTypes = cleanedTypes.replace(/generated\./g, "");

					// Assemble the final file content with a single, clean import.
					generatedCode = `import { z } from "zod";\n\n${cleanedSchemas}\n\n${cleanedTypes}`;
					break;
				}
				case "typebox":
					generatedCode = Codegen.TypeScriptToTypeBox.Generate(sourceText);
					break;
				case "effect": {
					const model = Codegen.TypeScriptToModel.Generate(sourceText);
					generatedCode = Codegen.ModelToEffect.Generate(model);
					break;
				}
				default:
					console.warn(
						`   -> ⚠️ Converter for '${targetArg}' not implemented. Returning raw JSONSchema.`
					);
					generatedCode = `// TODO: Implement JSONSchema to ${targetArg} conversion.`;
					break;
			}
			return generatedCode;
		},
	},
	[SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA]: {
		generate: async ({ inputFile, program, targetArg }) => {
			// Step 1: Get the list of all exported types from the current file.
			// Using ts-morph here is robust and simple.
			const project = new Project();
			const sourceFile = project.addSourceFileAtPath(inputFile);
			const exportedSymbols = sourceFile.getExportedDeclarations();
			const typeNames = Array.from(exportedSymbols.keys());

			if (typeNames.length === 0) {
				console.log(
					`   -> ⚠️ No exported types found in ${inputFile}. Skipping.`
				);
				return null;
			}
			console.log(`   -> Found types to process: ${typeNames.join(", ")}`);

			const allGeneratedCode: string[] = [];
			const settings: TJS.PartialArgs = {
				required: true,
				strictNullChecks: true,
				noExtraProps: true,
				// Set ref to false to generate self-contained schemas for each type.
				ref: false,
			};

			const schemas: TJS.Definition[] = [];

			// Step 2: Loop and generate a schema FOR EACH TYPE individually.
			for (const typeName of typeNames) {
				// We can skip generating schemas for the flattened property types if desired,
				// as they will be inlined into their parent schema.
				if (typeName.includes(SCRIPT_CONFIG.FLATTEN_SEPARATOR)) {
					continue;
				}

				console.log(`   -> ⚙️ Generating schema for type: ${typeName}`);
				const schema = TJS.generateSchema(program, typeName, settings);

				if (!schema || Object.keys(schema).length <= 1) {
					console.warn(
						`   -> ⚠️  Schema for type '${typeName}' was empty. Skipping.`
					);
					continue;
				}

				// IMPORTANT: Add an $id to the schema. This is what json-schema-to-zod
				// uses to name the exported const (e.g., export const MyType = ...).
				schema.$id = typeName;
				schemas.push(schema);

				// Step 3: Convert each individual schema to the target format.
				let convertedCode: string;
				switch (targetArg) {
					case "jsonschema":
						// For jsonschema itself, export each definition individually.
						convertedCode = `export const ${typeName} = ${JSON.stringify(
							schema,
							null,
							2
						)} as const;`;
						break;
					case "valibot": {
						// The 'name' option is a fallback; the $id property will be preferred.
						convertedCode = jsonSchemaToValibot(
							schema as unknown as import("json-schema-to-valibot").JsonSchema,
							{
								name: typeName,
								withJsDoc: true,
								module: "esm",
								exportDefinitions: true,
							}
						);
						// Remove import statements
						// const valibotImportRegex =
						// 	/^import .* from ["']valibot["'];?\r?\n?/gm;

						// convertedCode = convertedCode.replace(valibotImportRegex, "");

						break;
					}
					case "yup": {
						const yupSchemaString = generateYupString(schema, true); // Assume top-level is required

						// Assemble the final export statement
						convertedCode = `export const ${typeName} = ${yupSchemaString};`;
						convertedCode += `\n\nexport type ${typeName} = yup.InferType<typeof ${typeName}>;`;
						break;
					}
					case "arktype": {
						const arktypeDef = generateArkTypeString(schema);
						let arktypeExport: string;

						arktypeExport = `export const ${typeName} = type(${arktypeDef});`;

						const tsTypeExport = `export type ${typeName}Type = typeof ${typeName}.infer;`;

						convertedCode = `${arktypeExport}\n${tsTypeExport}`;
						break;
					}
					default:
						console.warn(
							`   -> ⚠️ Converter for '${targetArg}' not implemented. Returning raw JSONSchema.`
						);
						convertedCode = `// TODO: Implement JSONSchema to ${targetArg} conversion\nexport const ${typeName} = ${JSON.stringify(
							schema,
							null,
							2
						)};`;
						break;
				}
				allGeneratedCode.push(convertedCode);
			}

			// Step 4: Join all the generated code blocks into a single file's content.
			if (allGeneratedCode.length === 0) {
				return null; // Nothing was generated, so don't create a file.
			}

			if (targetArg === "zod") {
				return `import { zod } from "zod";\n\n${allGeneratedCode.join("\n\n")}`;
			} else if (targetArg === "valibot") {
				return `import * as v from "valibot";\n\n${allGeneratedCode.join(
					"\n\n"
				)}`;
			} else if (targetArg === "yup") {
				return `import * as yup from "yup";\n\n${allGeneratedCode.join(
					"\n\n"
				)}`;
			} else if (targetArg === "arktype") {
				return `import { type } from "arktype";\n\n${allGeneratedCode.join(
					"\n\n"
				)}`;
			}

			return allGeneratedCode.join("\n\n");
		},
	},
};

// --- Post-Processing Fixups ---
// These might not be needed with the new pipeline but are kept for reference.
const postProcessors = {};

// --- Utility Functions ---

const createHeader = (target) =>
	`// THIS FILE IS AUTO-GENERATED FOR ${target.toUpperCase()}. DO NOT EDIT.\n\n`;

/**
 * Generates a barrel file (e.g., index.ts, details.ts) that re-exports
 * from all the generated schema files.
 */
async function generateBarrelFile(
	baseOutputDir,
	generatedFiles,
	fileName,
	exportRegex
) {
	let fileContent = createHeader("Barrel File");
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
			)},\n} from "./${relativePath}";\n\n`;
		}
	}
	const filePath = path.join(baseOutputDir, fileName);
	await fs.writeFile(filePath, fileContent);
	console.log(`   -> ✅ ${fileName} generated at ${filePath}`);
}

/**
 * Scans the output directory and creates the main `index.ts` and `details.ts`
 * barrel files based on the generated content.
 */
async function generateBarrelFiles(baseOutputDir, schemaOutputDir) {
	console.log(`\n📦 Generating barrel files for ${schemaOutputDir}...`);
	const globPath = `${schemaOutputDir.replace(/\\/g, "/")}/**/*.ts`;
	const generatedFiles = await glob(globPath);

	if (generatedFiles.length === 0) {
		console.log(`   -> No files found in ${globPath} to index. Skipping.`);
		return;
	}

	await generateBarrelFile(
		baseOutputDir,
		generatedFiles,
		SCRIPT_CONFIG.BARREL_FILES.INDEX,
		SCRIPT_CONFIG.MAIN_EXPORT_REGEX
	);
	// await generateBarrelFile(
	// 	baseOutputDir,
	// 	generatedFiles,
	// 	SCRIPT_CONFIG.BARREL_FILES.DETAILS,
	// 	SCRIPT_CONFIG.DETAILS_EXPORT_REGEX,
	// );
}

// --- Main Execution Logic ---

async function main() {
	const targetArg = process.argv[2]?.toLowerCase();
	const currentTarget = targetConfig[targetArg];

	if (!targetArg || !currentTarget) {
		console.error("❌ Error: You must specify a valid target package.");
		console.error(
			`Available packages: ${Object.keys(targetConfig).join(", ")}`
		);
		process.exit(1);
	}

	console.log(`🚀 Starting schema generation for: ${targetArg}`);

	const inputDir = SCRIPT_CONFIG.INPUT_DIR;
	const baseOutputDir = path.join(SCRIPT_CONFIG.OUTPUT_DIR_BASE, targetArg);
	const schemaOutputDir = path.join(baseOutputDir, SCRIPT_CONFIG.TYPES_SUBDIR);

	console.log(`\n🧹 Cleaning up previous output...`);
	await fs.rm(baseOutputDir, { recursive: true, force: true });
	console.log("   -> Cleanup complete.");

	const inputFiles = await glob(`${inputDir}/**/*.ts`);
	if (inputFiles.length === 0) {
		console.warn(`No TypeScript files found in ${inputDir}. Exiting.`);
		return;
	}

	await fs.mkdir(schemaOutputDir, { recursive: true });
	console.log(`\nFound ${inputFiles.length} files to process...`);

	// Create a single TS Program instance that includes all our files.
	// This is much faster than compiling each file individually inside the loop.
	let tsProgram: any;
	if (currentTarget.strategy === SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA) {
		console.log(
			"\nAnalyzing TypeScript project to create a single Program instance..."
		);
		tsProgram = TJS.getProgramFromFiles(inputFiles, {
			strictNullChecks: true,
			types: ["node"],
		});
		console.log("   -> Analysis complete.");
	}

	for (const inputFile of inputFiles) {
		const relativePath = path.relative(inputDir, inputFile);
		const outputFile = path.join(schemaOutputDir, relativePath);
		console.log(`- Processing ${inputFile} -> ${outputFile}`);

		const strategy = strategies[currentTarget.strategy];
		let generatedCode = await strategy.generate({
			inputFile,
			program: tsProgram, // Pass the pre-compiled program
			targetArg,
		});

		// If the generator returns null (e.g., no types in file), skip file creation.
		if (generatedCode === null) {
			continue;
		}

		const postProcessor = postProcessors[targetArg];
		if (postProcessor) {
			generatedCode = await postProcessor(generatedCode);
		}

		const formattedCode = await format(generatedCode, {
			parser: "typescript",
			printWidth: 80,
		});

		await fs.mkdir(path.dirname(outputFile), { recursive: true });
		const combinedOutput = createHeader(targetArg) + formattedCode;
		await fs.writeFile(outputFile, combinedOutput);
	}

	console.log(`\n✅ Schema file generation for ${targetArg} complete!`);
	console.log(`   Output directory: ${schemaOutputDir}`);

	await generateBarrelFiles(baseOutputDir, schemaOutputDir);
}

// --- Script Entrypoint ---

main().catch((error) => {
	console.error("❌ Error during schema generation:", error);
	process.exit(1);
});
