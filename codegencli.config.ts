import { defineConfig } from "@oddlaceguy49/typebox-codegen-cli/config";

export default defineConfig({
	// Global settings that apply to all tasks unless overridden
	input: "src/types",
	output: "src/generated",

	// An array of generation tasks to run
	tasks: [
		{
			target: "zod",
		},
		{
			target: "yup",
		},
		{
			target: "effect",
		},
		{
			target: "jsonschema",
		},
		{
			target: "valibot",
		},
		{
			target: "types",
		},
		{
			target: "typebox",
		},
	],
});
