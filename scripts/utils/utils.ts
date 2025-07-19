/**
 * Manually builds a Yup validation schema string from a JSON Schema object.
 * This is necessary because `schema-to-yup` returns a runtime object, not source code.
 * @param schema The JSON Schema definition.
 * @returns A string of Yup source code (e.g., "yup.object({...})").
 */
export function generateYupString(schema, isRequired = false) {
	let yupString = "";

	switch (schema.type) {
		case "object": {
			const properties = Object.entries(schema.properties || {})
				.map(([key, propSchema]) => {
					const required = schema.required?.includes(key) ?? false;
					return `'${key}': ${generateYupString(propSchema, required)}`;
				})
				.join(",\n");
			yupString = `yup.object({\n${properties}\n})`;
			break;
		}

		case "array": {
			// Assumes schema.items is a single schema, not a tuple
			const itemSchemaString = schema.items
				? generateYupString(schema.items)
				: "yup.mixed()";
			yupString = `yup.array().of(${itemSchemaString})`;
			break;
		}

		case "string":
			yupString = "yup.string()";
			if (schema.minLength) yupString += `.min(${schema.minLength})`;
			if (schema.maxLength) yupString += `.max(${schema.maxLength})`;
			if (schema.pattern) yupString += `.matches(/${schema.pattern}/)`;
			if (schema.format === "email") yupString += ".email()";
			if (schema.format === "url") yupString += ".url()";
			break;

		case "number":
			yupString = "yup.number()";
			if (typeof schema.minimum !== "undefined")
				yupString += `.min(${schema.minimum})`;
			if (typeof schema.maximum !== "undefined")
				yupString += `.max(${schema.maximum})`;
			// A common check for integer
			if (schema.type === "integer" || schema.format === "unix-timestamp") {
				yupString += ".integer()";
			}
			break;

		case "boolean":
			yupString = "yup.boolean()";
			break;

		default:
			// Fallback for any unsupported types
			yupString = "yup.mixed()";
			break;
	}

	// Add .required() if the property is in the parent's `required` array.
	if (isRequired) {
		yupString += ".required()";
	}

	return yupString;
}

/**
 * Manually builds an ArkType definition for the arktype() constructor
 * from a JSON Schema object, using idiomatic keywords from the documentation.
 * @param schema The JSON Schema definition.
 * @returns A string or object representing the ArkType definition.
 */
export function generateArkTypeString(schema) {
	if (!schema) {
		return "'unknown'";
	}

	switch (schema.type) {
		case "object": {
			const properties = Object.entries(schema.properties || {})
				.map(([key, propSchema]) => {
					const isOptional = !schema.required?.includes(key);
					const arkKey = isOptional ? `'${key}?'` : `'${key}'`;
					return `${arkKey}: ${generateArkTypeString(propSchema)}`;
				})
				.join(",\n");
			return `{\n${properties}\n}`;
		}

		case "array": {
			// Return the definition of what's INSIDE the array.
			// The `case "arktype":` block will handle wrapping it correctly.
			if (!schema.items) {
				return "'unknown'";
			}
			return generateArkTypeString(schema.items);
		}

		case "string": {
			// Prioritize specific keywords from the docs first.
			if (schema.format === "email") return "'string.email'";
			if (schema.format === "url") return "'string.url'";
			// The regex pattern is still the best way for custom patterns.
			if (schema.pattern) return `/${schema.pattern}/`;

			// Fallback to generic string with length bounds.
			let strDef = "string";

			if (schema.maxLength !== undefined) {
				strDef = `${strDef}<=${schema.maxLength}`;

				if (schema.minLength !== undefined)
					strDef = `${schema.minLength}<=${strDef}`;
			} else {
				if (schema.minLength !== undefined)
					strDef = `${strDef}>=${schema.minLength}`;
			}
			return `'${strDef}'`;
		}

		case "number":
		case "integer": {
			let numDef: string;
			// Prioritize the most specific format: number.epoch for unix timestamps.
			if (schema.format === "unix-timestamp") {
				numDef = "number.epoch";
			} else if (schema.type === "integer") {
				numDef = "integer";
			} else {
				numDef = "number";
			}

			// Apply bounds to the selected definition.
			if (schema.maxmium !== undefined) {
				numDef = `${numDef}<=${schema.maxmium}`;

				if (schema.minimum !== undefined)
					numDef = `${schema.minimum}<=${numDef}`;
			} else {
				if (schema.minimum !== undefined)
					numDef = `${numDef}>=${schema.minimum}`;
			}
			return `'${numDef}'`;
		}

		case "boolean":
			return "'boolean'";

		default:
			return "'unknown'";
	}
}
