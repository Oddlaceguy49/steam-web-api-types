// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export default {
	$schema: "http://json-schema.org/draft-07/schema#",
	definitions: {
		GetRecentlyPlayedGamesRequest: {
			description:
				"Parameters for retrieving recently played games for a user.",
			type: "object",
			properties: {
				steamid: {
					pattern: "^[0-9]{17}$",
					description: "The 64-bit SteamID of the user.",
					type: "string",
				},
				count: {
					minimum: 0,
					description: "The number of games to return (0 to 100).",
					type: "number",
				},
			},
			additionalProperties: false,
			required: ["steamid"],
		},
		RecentlyPlayedGame: {
			description: "Information about a recently played game.",
			type: "object",
			properties: {
				appid: {
					minimum: 1,
					description: "The AppID of the game.",
					type: "number",
				},
				name: {
					description: "The name of the game.",
					type: "string",
				},
				playtime_2weeks: {
					minimum: 0,
					description: "Total playtime in the last 2 weeks, in minutes.",
					type: "number",
				},
				playtime_forever: {
					minimum: 0,
					description: "Total playtime forever, in minutes.",
					type: "number",
				},
				img_icon_url: {
					format: "url",
					description: "The URL to the game's icon.",
					type: "string",
				},
				img_logo_url: {
					format: "url",
					description: "The URL to the game's logo.",
					type: "string",
				},
				has_community_visible_stats: {
					description: "True if the game has community visible stats.",
					type: "boolean",
				},
			},
			additionalProperties: false,
			required: [
				"appid",
				"has_community_visible_stats",
				"img_icon_url",
				"img_logo_url",
				"name",
				"playtime_2weeks",
				"playtime_forever",
			],
		},
		GetRecentlyPlayedGamesResponse: {
			description: "Response containing recently played games for a user.",
			type: "object",
			properties: {
				response: {
					type: "object",
					properties: {
						total_count: {
							minimum: 0,
							description: "The total number of games.",
							type: "number",
						},
						games: {
							type: "array",
							items: {
								$ref: "#/definitions/RecentlyPlayedGame",
							},
						},
					},
					additionalProperties: false,
					required: ["games", "total_count"],
				},
			},
			additionalProperties: false,
			required: ["response"],
		},
	},
} as const;
