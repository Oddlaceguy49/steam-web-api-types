// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export const PlayerSummary = {
	description: "Represents a player's summary information.",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The player's 64-bit SteamID.",
			type: "string",
		},
		communityvisibilitystate: {
			minimum: 0,
			maximum: 5,
			description:
				"Player's community visibility state (0 = Private, 1 = Friends Only, 2 = Friends of Friends, 3 = Users Only, 4 = Public, 5 = All).",
			type: "number",
		},
		profilestate: {
			minimum: 0,
			maximum: 1,
			description:
				"If the profile is not visible, this will be 0. If the profile is visible, this will be 1.",
			type: "number",
		},
		personaname: {
			minLength: 1,
			maxLength: 32,
			description: "The player's persona name (display name).",
			type: "string",
		},
		lastlogoff: {
			format: "unix-timestamp",
			description: "The last time the player was logged off Steam.",
			type: "number",
		},
		profileurl: {
			format: "url",
			description: "The URL to the player's Steam Community profile.",
			type: "string",
		},
		avatar: {
			format: "url",
			description: "The URL to the player's 32x32px avatar.",
			type: "string",
		},
		avatarmedium: {
			format: "url",
			description: "The URL to the player's 64x64px avatar.",
			type: "string",
		},
		avatarfull: {
			format: "url",
			description: "The URL to the player's 184x184px avatar.",
			type: "string",
		},
		personastate: {
			minimum: 0,
			maximum: 6,
			description:
				"The player's current online status (0 = Offline, 1 = Online, 2 = Busy, 3 = Away, 4 = Snooze, 5 = Looking to Trade, 6 = Looking to Play).",
			type: "number",
		},
		primaryclanid: {
			pattern: "^[0-9]{17}$",
			description: "The 64-bit ID of the player's primary clan.",
			type: "string",
		},
		timecreated: {
			format: "unix-timestamp",
			description: "The time the player's Steam account was created.",
			type: "number",
		},
		realname: {
			minLength: 1,
			description: "The player's real name.",
			type: "string",
		},
		loccountrycode: {
			minLength: 2,
			maxLength: 2,
			description: "The player's country code.",
			type: "string",
		},
		locstatecode: {
			minLength: 2,
			maxLength: 2,
			description: "The player's state code.",
			type: "string",
		},
		loccityid: {
			description: "The player's city ID.",
			type: "number",
		},
	},
	additionalProperties: false,
	required: [
		"avatar",
		"avatarfull",
		"avatarmedium",
		"communityvisibilitystate",
		"lastlogoff",
		"personaname",
		"personastate",
		"profileurl",
		"steamid",
	],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "PlayerSummary",
} as const;

export const GetPlayerSummariesResponse = {
	description: "Response containing player summary information.",
	type: "object",
	properties: {
		response: {
			type: "object",
			properties: {
				players: {
					type: "array",
					items: {
						description: "Represents a player's summary information.",
						type: "object",
						properties: {
							steamid: {
								pattern: "^[0-9]{17}$",
								description: "The player's 64-bit SteamID.",
								type: "string",
							},
							communityvisibilitystate: {
								minimum: 0,
								maximum: 5,
								description:
									"Player's community visibility state (0 = Private, 1 = Friends Only, 2 = Friends of Friends, 3 = Users Only, 4 = Public, 5 = All).",
								type: "number",
							},
							profilestate: {
								minimum: 0,
								maximum: 1,
								description:
									"If the profile is not visible, this will be 0. If the profile is visible, this will be 1.",
								type: "number",
							},
							personaname: {
								minLength: 1,
								maxLength: 32,
								description: "The player's persona name (display name).",
								type: "string",
							},
							lastlogoff: {
								format: "unix-timestamp",
								description: "The last time the player was logged off Steam.",
								type: "number",
							},
							profileurl: {
								format: "url",
								description: "The URL to the player's Steam Community profile.",
								type: "string",
							},
							avatar: {
								format: "url",
								description: "The URL to the player's 32x32px avatar.",
								type: "string",
							},
							avatarmedium: {
								format: "url",
								description: "The URL to the player's 64x64px avatar.",
								type: "string",
							},
							avatarfull: {
								format: "url",
								description: "The URL to the player's 184x184px avatar.",
								type: "string",
							},
							personastate: {
								minimum: 0,
								maximum: 6,
								description:
									"The player's current online status (0 = Offline, 1 = Online, 2 = Busy, 3 = Away, 4 = Snooze, 5 = Looking to Trade, 6 = Looking to Play).",
								type: "number",
							},
							primaryclanid: {
								pattern: "^[0-9]{17}$",
								description: "The 64-bit ID of the player's primary clan.",
								type: "string",
							},
							timecreated: {
								format: "unix-timestamp",
								description: "The time the player's Steam account was created.",
								type: "number",
							},
							realname: {
								minLength: 1,
								description: "The player's real name.",
								type: "string",
							},
							loccountrycode: {
								minLength: 2,
								maxLength: 2,
								description: "The player's country code.",
								type: "string",
							},
							locstatecode: {
								minLength: 2,
								maxLength: 2,
								description: "The player's state code.",
								type: "string",
							},
							loccityid: {
								description: "The player's city ID.",
								type: "number",
							},
						},
						additionalProperties: false,
						required: [
							"avatar",
							"avatarfull",
							"avatarmedium",
							"communityvisibilitystate",
							"lastlogoff",
							"personaname",
							"personastate",
							"profileurl",
							"steamid",
						],
					},
				},
			},
			additionalProperties: false,
			required: ["players"],
		},
	},
	additionalProperties: false,
	required: ["response"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetPlayerSummariesResponse",
} as const;

export const CheckAppOwnershipRequest = {
	description: "Parameters for checking app ownership.",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64-bit SteamID of the user.",
			type: "string",
		},
		appid: {
			minimum: 1,
			description: "The AppID of the game.",
			type: "number",
		},
	},
	additionalProperties: false,
	required: ["appid", "key", "steamid"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "CheckAppOwnershipRequest",
} as const;

export const CheckAppOwnershipResponse = {
	description: "Response indicating app ownership.",
	type: "object",
	properties: {
		appownership: {
			type: "object",
			properties: {
				ownsApp: {
					description: "True if the user owns the app, false otherwise.",
					type: "boolean",
				},
				timeAcquired: {
					format: "unix-timestamp",
					description: "The time the app was acquired by the user.",
					type: "number",
				},
				ownerSteamID: {
					pattern: "^[0-9]{17}$",
					description:
						"The 64-bit SteamID of the true owner (if family shared).",
					type: "string",
				},
				sitelicense: {
					description:
						"True if the app is accessed via site license (PC Cafe program).",
					type: "boolean",
				},
			},
			additionalProperties: false,
			required: ["ownerSteamID", "ownsApp", "timeAcquired"],
		},
	},
	additionalProperties: false,
	required: ["appownership"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "CheckAppOwnershipResponse",
} as const;

export const GetDeletedSteamIDsRequest = {
	description: "Parameters for retrieving deleted SteamIDs.",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		rowversion: {
			pattern: "^[0-9]+$",
			description: "An unsigned 64-bit value for pagination.",
			type: "string",
		},
	},
	additionalProperties: false,
	required: ["key", "rowversion"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetDeletedSteamIDsRequest",
} as const;

export const DeletedSteamID = {
	description: "Information about a deleted SteamID.",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64-bit SteamID of the deleted account.",
			type: "string",
		},
	},
	additionalProperties: false,
	required: ["steamid"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "DeletedSteamID",
} as const;

export const GetDeletedSteamIDsResponse = {
	description: "Response containing a list of deleted SteamIDs.",
	type: "object",
	properties: {
		response: {
			type: "object",
			properties: {
				deletedids: {
					type: "array",
					items: {
						description: "Information about a deleted SteamID.",
						type: "object",
						properties: {
							steamid: {
								pattern: "^[0-9]{17}$",
								description: "The 64-bit SteamID of the deleted account.",
								type: "string",
							},
						},
						additionalProperties: false,
						required: ["steamid"],
					},
				},
				rowversion: {
					pattern: "^[0-9]+$",
					description: "The rowversion for the next request.",
					type: "string",
				},
			},
			additionalProperties: false,
			required: ["deletedids", "rowversion"],
		},
	},
	additionalProperties: false,
	required: ["response"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetDeletedSteamIDsResponse",
} as const;

export const GetUserGroupListRequest = {
	description: "Parameters for retrieving a user's group list.",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64-bit SteamID of the user.",
			type: "string",
		},
	},
	additionalProperties: false,
	required: ["key", "steamid"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetUserGroupListRequest",
} as const;

export const UserGroup = {
	description: "Information about a Steam user group.",
	type: "object",
	properties: {
		gid: {
			pattern: "^[0-9]+$",
			description: "The 64-bit ID of the group.",
			type: "string",
		},
	},
	additionalProperties: false,
	required: ["gid"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "UserGroup",
} as const;

export const GetUserGroupListResponse = {
	description: "Response containing a user's group list.",
	type: "object",
	properties: {
		response: {
			type: "object",
			properties: {
				success: {
					description: "True if the request was successful.",
					type: "boolean",
				},
				groups: {
					type: "array",
					items: {
						description: "Information about a Steam user group.",
						type: "object",
						properties: {
							gid: {
								pattern: "^[0-9]+$",
								description: "The 64-bit ID of the group.",
								type: "string",
							},
						},
						additionalProperties: false,
						required: ["gid"],
					},
				},
			},
			additionalProperties: false,
			required: ["groups", "success"],
		},
	},
	additionalProperties: false,
	required: ["response"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetUserGroupListResponse",
} as const;

export const ResolveVanityURLRequest = {
	description: "Parameters for resolving a vanity URL to a SteamID.",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		vanityurl: {
			minLength: 1,
			description: "The vanity URL to resolve.",
			type: "string",
		},
		url_type: {
			minimum: 1,
			maximum: 3,
			description:
				"The type of vanity URL (1 = individual, 2 = group, 3 = game group).",
			type: "number",
		},
	},
	additionalProperties: false,
	required: ["key", "vanityurl"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "ResolveVanityURLRequest",
} as const;

export const ResolveVanityURLResponse = {
	description: "Response containing the resolved SteamID from a vanity URL.",
	type: "object",
	properties: {
		response: {
			type: "object",
			properties: {
				steamid: {
					pattern: "^[0-9]{17}$",
					description: "The 64-bit SteamID if resolved successfully.",
					type: "string",
				},
				success: {
					minimum: 1,
					description: "The success status (1 = success, 42 = no match).",
					type: "number",
				},
				message: {
					description: "A message describing the status.",
					type: "string",
				},
			},
			additionalProperties: false,
			required: ["success"],
		},
	},
	additionalProperties: false,
	required: ["response"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "ResolveVanityURLResponse",
} as const;

export const GetFriendListRequest = {
	description: "Parameters for retrieving a user's friend list.",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64-bit SteamID of the user.",
			type: "string",
		},
		relationship: {
			pattern: "^(all|friend)$",
			description: "Filter by relationship type (all or friend).",
			type: "string",
		},
	},
	additionalProperties: false,
	required: ["key", "steamid"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetFriendListRequest",
} as const;

export const Friend = {
	description: "Information about a friend.",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64-bit SteamID of the friend.",
			type: "string",
		},
		relationship: {
			pattern: "^(friend)$",
			description: "The relationship type (always 'friend').",
			type: "string",
		},
		friend_since: {
			format: "unix-timestamp",
			description: "The Unix timestamp of when the friendship was created.",
			type: "number",
		},
	},
	additionalProperties: false,
	required: ["friend_since", "relationship", "steamid"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "Friend",
} as const;

export const GetFriendListResponse = {
	description: "Response containing a user's friend list.",
	type: "object",
	properties: {
		friendslist: {
			type: "object",
			properties: {
				friends: {
					type: "array",
					items: {
						description: "Information about a friend.",
						type: "object",
						properties: {
							steamid: {
								pattern: "^[0-9]{17}$",
								description: "The 64-bit SteamID of the friend.",
								type: "string",
							},
							relationship: {
								pattern: "^(friend)$",
								description: "The relationship type (always 'friend').",
								type: "string",
							},
							friend_since: {
								format: "unix-timestamp",
								description:
									"The Unix timestamp of when the friendship was created.",
								type: "number",
							},
						},
						additionalProperties: false,
						required: ["friend_since", "relationship", "steamid"],
					},
				},
			},
			additionalProperties: false,
			required: ["friends"],
		},
	},
	additionalProperties: false,
	required: ["friendslist"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetFriendListResponse",
} as const;

export const GetPlayerBansRequest = {
	description: "Parameters for retrieving player ban information.",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		steamids: {
			pattern: "^[0-9,]+$",
			description: "Comma-separated list of 64-bit SteamIDs.",
			type: "string",
		},
	},
	additionalProperties: false,
	required: ["key", "steamids"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetPlayerBansRequest",
} as const;

export const PlayerBan = {
	description: "Details about a player's ban status.",
	type: "object",
	properties: {
		SteamId: {
			pattern: "^[0-9]{17}$",
			description: "The player's 64-bit SteamID.",
			type: "string",
		},
		CommunityBanned: {
			description: "True if the player is banned from the Steam Community.",
			type: "boolean",
		},
		VACBanned: {
			description: "True if the player has VAC bans on record.",
			type: "boolean",
		},
		NumberOfVACBans: {
			minimum: 0,
			description: "The number of VAC bans the player has.",
			type: "number",
		},
		DaysSinceLastBan: {
			minimum: 0,
			description: "The number of days since the player's last ban.",
			type: "number",
		},
		EconomyBan: {
			pattern: "^(none|probation|banned)$",
			description: "The player's economy ban status.",
			type: "string",
		},
	},
	additionalProperties: false,
	required: [
		"CommunityBanned",
		"DaysSinceLastBan",
		"EconomyBan",
		"NumberOfVACBans",
		"SteamId",
		"VACBanned",
	],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "PlayerBan",
} as const;

export const GetPlayerBansResponse = {
	description: "Response containing player ban information.",
	type: "object",
	properties: {
		players: {
			type: "array",
			items: {
				description: "Details about a player's ban status.",
				type: "object",
				properties: {
					SteamId: {
						pattern: "^[0-9]{17}$",
						description: "The player's 64-bit SteamID.",
						type: "string",
					},
					CommunityBanned: {
						description:
							"True if the player is banned from the Steam Community.",
						type: "boolean",
					},
					VACBanned: {
						description: "True if the player has VAC bans on record.",
						type: "boolean",
					},
					NumberOfVACBans: {
						minimum: 0,
						description: "The number of VAC bans the player has.",
						type: "number",
					},
					DaysSinceLastBan: {
						minimum: 0,
						description: "The number of days since the player's last ban.",
						type: "number",
					},
					EconomyBan: {
						pattern: "^(none|probation|banned)$",
						description: "The player's economy ban status.",
						type: "string",
					},
				},
				additionalProperties: false,
				required: [
					"CommunityBanned",
					"DaysSinceLastBan",
					"EconomyBan",
					"NumberOfVACBans",
					"SteamId",
					"VACBanned",
				],
			},
		},
	},
	additionalProperties: false,
	required: ["players"],
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "GetPlayerBansResponse",
} as const;
