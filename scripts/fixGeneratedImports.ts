import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { sync } from "glob";

// Use process.cwd() as the base, which is usually the project root when 'bun run' is used
const projectRoot = process.cwd();

console.log("✨ Fixing relative import paths in generated files...");
console.log(`  Searching from project root: ${projectRoot}`); // Shows where glob starts looking

// The glob pattern now includes the 'src/generated' part from the project root.
// Only target .ts files, as they are the ones that TypeScript compiles
// and where the missing .js extension errors occur.
const files = sync("src/generated/**/*.ts", { cwd: projectRoot });

console.log(`  Found ${files.length} files.`); // Confirm files are found

let filesFixed = 0;

files.forEach((file) => {
	const filePath = join(projectRoot, file);
	console.log(`  Processing file: ${filePath}`);

	const content = readFileSync(filePath, "utf8");

	// WHY is regex like this? Why do I live?
	// SIMPLIFIED REGEX: Targets the 'from "path"' part of import/export statements
	// This regex captures:
	// p1: 'from "' (the literal 'from' keyword followed by a space and a quote)
	// p2: the relative path (e.g., './../types/IPlayerService')
	// p3: './' or '../' (start of the relative path, captured as part of p2, can be ignored for main logic)
	// p4: '"' or '";' (the closing quote and optional semicolon)
	const regex = /(from\s+['"])((\.?\.?\/)[^'"]+)(['"];?)/g;

	// Use a flag to track if content was changed in this file
	let fileContentChanged = false;

	const newContent = content.replace(regex, (match, p1, p2, p3, p4) => {
		// CRUCIAL CONDITION:
		// 1. Path must be relative (starts with './' or '../')
		// 2. Path must NOT already have a file extension (e.g., .js, .ts, .json, etc.)
		//    The regex `/\.[^/]+$/` checks if the string ends with a dot followed by characters that are not a slash.
		if ((p2.startsWith("./") || p2.startsWith("../")) && !/\.[^/]+$/.test(p2)) {
			fileContentChanged = true; // Mark that a change occurred in this file
			return `${p1}${p2}.js${p4}`; // Append .js extension
		}
		return match; // No change needed for this specific match
	});

	if (fileContentChanged) {
		// Check the flag for changes
		writeFileSync(filePath, newContent, "utf8");
		console.log(`  Fixed: ${file}`);
		filesFixed++;
	} else {
		console.log(`  No changes needed for: ${file}`); // Inform user if file was processed but no changes
	}
});

console.log(`✅ Fixed ${filesFixed} files.`);
