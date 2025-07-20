// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export const GetRecentlyPlayedGamesRequest = {
	see: "https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames",
	description: "Parameters for retrieving recently played games for a user.",
	$id: "GetRecentlyPlayedGamesRequest",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64",
			type: "string",
		},
		count: {
			minimum: 0,
			description: "The number of games to return (0 to 100).",
			type: "number",
		},
	},
	required: ["steamid"],
};
export const RecentlyPlayedGame = {
	description: "Information about a recently played game.",
	$id: "RecentlyPlayedGame",
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
	required: [
		"appid",
		"name",
		"playtime_2weeks",
		"playtime_forever",
		"img_icon_url",
		"img_logo_url",
		"has_community_visible_stats",
	],
};
export const GetRecentlyPlayedGamesResponse_properties_response = {
	$id: "GetRecentlyPlayedGamesResponse_properties_response",
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
				description: "Information about a recently played game.",
				$id: "RecentlyPlayedGame",
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
				required: [
					"appid",
					"name",
					"playtime_2weeks",
					"playtime_forever",
					"img_icon_url",
					"img_logo_url",
					"has_community_visible_stats",
				],
			},
		},
	},
	required: ["total_count", "games"],
};
export const GetRecentlyPlayedGamesResponse = {
	see: "https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames",
	description: "Response containing recently played games for a user.",
	$id: "GetRecentlyPlayedGamesResponse",
	type: "object",
	properties: {
		response: {
			$id: "GetRecentlyPlayedGamesResponse_properties_response",
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
						description: "Information about a recently played game.",
						$id: "RecentlyPlayedGame",
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
						required: [
							"appid",
							"name",
							"playtime_2weeks",
							"playtime_forever",
							"img_icon_url",
							"img_logo_url",
							"has_community_visible_stats",
						],
					},
				},
			},
			required: ["total_count", "games"],
		},
	},
	required: ["response"],
};
