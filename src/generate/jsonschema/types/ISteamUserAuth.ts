// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export default {
	$schema: "http://json-schema.org/draft-07/schema#",
	definitions: {
		AuthenticateUserTicketRequest: {
			description: "Parameters for authenticating a user ticket.",
			type: "object",
			properties: {
				key: {
					minLength: 1,
					description: "Your Steamworks Web API publisher authentication key.",
					type: "string",
				},
				appid: {
					minimum: 1,
					description: "The AppID of the game.",
					type: "number",
				},
				ticket: {
					minLength: 1,
					description:
						"The hexadecimal string representation of the binary ticket data.",
					type: "string",
				},
				identity: {
					minLength: 1,
					description: "Optional: A string identifier for the remote service.",
					type: "string",
				},
			},
			additionalProperties: false,
			required: ["appid", "key", "ticket"],
		},
		AuthenticateUserTicketResponse: {
			description: "Response from authenticating a user ticket.",
			type: "object",
			properties: {
				response: {
					type: "object",
					properties: {
						steamid: {
							pattern: "^[0-9]{17}$",
							description: "The user's 64-bit SteamID if the ticket is valid.",
							type: "string",
						},
						error: {
							type: "object",
							properties: {
								errorcode: {
									description: "Error code if authentication fails.",
									type: "number",
								},
								errordesc: {
									minLength: 1,
									description: "Error description if authentication fails.",
									type: "string",
								},
							},
							additionalProperties: false,
							required: ["errorcode", "errordesc"],
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
			required: ["response"],
		},
	},
} as const;
