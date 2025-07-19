import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import { Project, Node } from "ts-morph";
import { format } from "prettier";
import { jsonSchemaToZod } from "json-schema-to-zod";
import * as TJS from "typescript-json-schema"; // The programmatic API for typescript-json-schema

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
		TYPEBOX_DIRECT: "typebox-direct", // Kept as an example of a custom path
	},
	MAIN_EXPORT_REGEX:
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+?)(?<!_properties_[A-Za-z0-9_]+)\s*(?:=|{)/g,
	DETAILS_EXPORT_REGEX:
		/export\s+(?:const|type|interface)\s+([A-Za-z0-9_]+_properties_[A-Za-z0-9_]+)\s*(?:=|{)/g,
};

// Maps the command-line argument to the correct strategy.
const targetConfig = {
	types: { strategy: SCRIPT_CONFIG.STRATEGIES.TYPES },
	typebox: { strategy: SCRIPT_CONFIG.STRATEGIES.TYPEBOX_DIRECT },
	zod: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA },
	yup: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA },
	valibot: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA },
	arktype: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA },
	effect: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA },
	jsonschema: { strategy: SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA },
};

// --- Generation Strategies ---

const strategies = {
	[SCRIPT_CONFIG.STRATEGIES.TYPES]: {
		generate: async ({ inputFile }) => {
			const project = new Project();
			const sourceText = await fs.readFile(inputFile, "utf-8");
			const sourceFile = project.createSourceFile(inputFile, sourceText, {
				overwrite: true,
			});

			const interfacesToProcess = sourceFile.getInterfaces();
			while (interfacesToProcess.length > 0) {
				const currentInterface = interfacesToProcess.shift();
				if (!currentInterface) continue;
				const parentInterfaceName = currentInterface.getName();
				for (const prop of currentInterface.getProperties()) {
					const propName = prop.getName();
					const typeNode = prop.getTypeNode();
					if (typeNode && Node.isTypeLiteral(typeNode)) {
						const newInterfaceName = `${parentInterfaceName}${SCRIPT_CONFIG.FLATTEN_SEPARATOR}${propName}`;
						const newInterface = sourceFile.addInterface({
							name: newInterfaceName,
							isExported: true,
							properties: typeNode
								.getMembers()
								.filter(Node.isPropertySignature)
								.map((m) => m.getStructure()),
						});
						interfacesToProcess.push(newInterface);
						prop.setType(newInterfaceName);
					}
				}
			}
			return sourceFile.getFullText();
		},
	},

	[SCRIPT_CONFIG.STRATEGIES.TYPEBOX_DIRECT]: {
		generate: async () => {
			throw new Error(
				"TypeBox direct generation is not implemented. Please add the '@sinclair/typebox-codegen' dependency and necessary logic if this path is required."
			);
		},
	},

	[SCRIPT_CONFIG.STRATEGIES.JSON_SCHEMA]: {
		generate: async ({ inputFile, program, targetArg }) => {
			// Stage 1: Generate high-fidelity JSON Schema from the pre-compiled TS Program.
			console.log(`   -> ⚙️ Generating intermediate JSONSchema...`);
			const settings: TJS.PartialArgs = {
				required: true,
				strictNullChecks: true,
				noExtraProps: true,
				ref: true, // Create reusable definitions for shared interfaces
			};
			const schema = TJS.generateSchema(program, "*", settings, [inputFile]);

			if (!schema) {
				console.warn(`   -> ⚠️ No schema generated for ${inputFile}. Skipping.`);
				return null; // Signal that no file should be written
			}

			// Stage 2: Convert the in-memory JSON Schema object to the final target format.
			console.log(
				`   -> ⚙️ Converting JSONSchema to ${targetArg.toUpperCase()}...`
			);
			switch (targetArg) {
				case "jsonschema":
					// For jsonschema itself, just return the pretty-printed JSON.
					return `export default ${JSON.stringify(schema, null, 2)} as const;`;
				case "zod":
					// The name 'schema' will be used for the main export if no top-level $id is found
					return jsonSchemaToZod(schema, { name: "schema" });
				// Other cases would be added here
				default:
					console.warn(
						`   -> ⚠️ Converter for '${targetArg}' not implemented. Returning raw JSONSchema.`
					);
					return `// TODO: Implement JSONSchema to ${targetArg} conversion\nexport const schema = ${JSON.stringify(
						schema,
						null,
						2
					)};`;
			}
		},
	},
};

// --- Post-Processing Fixups ---
// These might not be needed with the new pipeline but are kept for reference.
const postProcessors = {
	yup: async (code) => {
		/* ... */
	},
	arktype: async (code) => {
		/* ... */
	},
};

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
	await generateBarrelFile(
		baseOutputDir,
		generatedFiles,
		SCRIPT_CONFIG.BARREL_FILES.DETAILS,
		SCRIPT_CONFIG.DETAILS_EXPORT_REGEX
	);
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
	let tsProgram;
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
