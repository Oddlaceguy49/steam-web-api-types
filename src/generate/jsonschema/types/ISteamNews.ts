// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export default {
	$schema: "http://json-schema.org/draft-07/schema#",
	definitions: {
		GetNewsForAppRequest: {
			description: "Parameters for retrieving news for a specific app.",
			type: "object",
			properties: {
				appid: {
					minimum: 1,
					description: "The AppID of the game for which to retrieve news.",
					type: "number",
				},
				maxlength: {
					minimum: 0,
					description:
						"Maximum length for the content to return. If 0, the full content is returned; if less than the full content, a blurb is generated.",
					type: "number",
				},
				enddate: {
					format: "unix-timestamp",
					description: "Retrieve posts earlier than this Unix epoch timestamp.",
					type: "number",
				},
				count: {
					minimum: 0,
					description: "Number of posts to retrieve (default is 20).",
					type: "number",
				},
				feeds: {
					description: "Comma-separated list of feed names to return news for.",
					type: "string",
				},
				tags: {
					description:
						"Comma-separated list of tags to filter by (e.g., 'patchnodes').",
					type: "string",
				},
			},
			additionalProperties: false,
			required: ["appid"],
		},
		NewsItem: {
			description: "A single news item for a Steam app.",
			type: "object",
			properties: {
				gid: {
					pattern: "^[0-9]+$",
					description: "The unique ID of the news item.",
					type: "string",
				},
				title: {
					description: "The title of the news item.",
					type: "string",
				},
				url: {
					format: "url",
					description: "The URL to the news item.",
					type: "string",
				},
				is_external_url: {
					description: "True if the URL is external, false otherwise.",
					type: "boolean",
				},
				author: {
					description: "The author of the news item.",
					type: "string",
				},
				contents: {
					description: "The full content of the news item.",
					type: "string",
				},
				feedlabel: {
					description: "The label of the news feed.",
					type: "string",
				},
				date: {
					format: "unix-timestamp",
					description:
						"The Unix timestamp of when the news item was published.",
					type: "number",
				},
				feedname: {
					description: "The name of the news feed.",
					type: "string",
				},
				feed_type: {
					description: "The type of the news feed.",
					type: "number",
				},
				appid: {
					minimum: 1,
					description: "The AppID associated with the news item.",
					type: "number",
				},
			},
			additionalProperties: false,
			required: [
				"appid",
				"author",
				"contents",
				"date",
				"feed_type",
				"feedlabel",
				"feedname",
				"gid",
				"is_external_url",
				"title",
				"url",
			],
		},
		GetNewsForAppResponse: {
			description: "Response containing news items for a specific app.",
			type: "object",
			properties: {
				appnews: {
					type: "object",
					properties: {
						appid: {
							minimum: 1,
							description: "The AppID of the game.",
							type: "number",
						},
						newsitems: {
							type: "array",
							items: {
								$ref: "#/definitions/NewsItem",
							},
						},
					},
					additionalProperties: false,
					required: ["appid", "newsitems"],
				},
			},
			additionalProperties: false,
			required: ["appnews"],
		},
	},
} as const;
