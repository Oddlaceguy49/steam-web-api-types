// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export const GetNewsForAppRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp",
	description: "Parameters for retrieving news for a specific app.",
	$id: "GetNewsForAppRequest",
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
			format: "unix",
			description: "Retrieve posts earlier than this Unix epoch timestamp.",
			type: "number",
		},
		count: {
			minimum: 0,
			description: "Number of posts to retrieve (default is 20).",
			type: "number",
		},
		feeds: {
			description: "Comma",
			type: "string",
		},
		tags: {
			description: "Comma",
			type: "string",
		},
	},
	required: ["appid"],
};
export const NewsItem = {
	description: "A single news item for a Steam app.",
	$id: "NewsItem",
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
			format: "unix",
			description: "The Unix timestamp of when the news item was published.",
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
	required: [
		"gid",
		"title",
		"url",
		"is_external_url",
		"author",
		"contents",
		"feedlabel",
		"date",
		"feedname",
		"feed_type",
		"appid",
	],
};
export const GetNewsForAppResponse_properties_appnews = {
	$id: "GetNewsForAppResponse_properties_appnews",
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
				description: "A single news item for a Steam app.",
				$id: "NewsItem",
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
						format: "unix",
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
				required: [
					"gid",
					"title",
					"url",
					"is_external_url",
					"author",
					"contents",
					"feedlabel",
					"date",
					"feedname",
					"feed_type",
					"appid",
				],
			},
		},
	},
	required: ["appid", "newsitems"],
};
export const GetNewsForAppResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp",
	description: "Response containing news items for a specific app.",
	$id: "GetNewsForAppResponse",
	type: "object",
	properties: {
		appnews: {
			$id: "GetNewsForAppResponse_properties_appnews",
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
						description: "A single news item for a Steam app.",
						$id: "NewsItem",
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
								format: "unix",
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
						required: [
							"gid",
							"title",
							"url",
							"is_external_url",
							"author",
							"contents",
							"feedlabel",
							"date",
							"feedname",
							"feed_type",
							"appid",
						],
					},
				},
			},
			required: ["appid", "newsitems"],
		},
	},
	required: ["appnews"],
};
