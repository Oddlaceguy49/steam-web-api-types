// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export const PlayerSummary = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries",
	description: "Represents a player's summary information.",
	$id: "PlayerSummary",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The player's 64",
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
			format: "unix",
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
			description: "The 64",
			type: "string",
		},
		timecreated: {
			format: "unix",
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
	required: [
		"steamid",
		"communityvisibilitystate",
		"personaname",
		"lastlogoff",
		"profileurl",
		"avatar",
		"avatarmedium",
		"avatarfull",
		"personastate",
	],
};
export const GetPlayerSummariesResponse_properties_response = {
	$id: "GetPlayerSummariesResponse_properties_response",
	type: "object",
	properties: {
		players: {
			type: "array",
			items: {
				see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries",
				description: "Represents a player's summary information.",
				$id: "PlayerSummary",
				type: "object",
				properties: {
					steamid: {
						pattern: "^[0-9]{17}$",
						description: "The player's 64",
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
						format: "unix",
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
						description: "The 64",
						type: "string",
					},
					timecreated: {
						format: "unix",
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
				required: [
					"steamid",
					"communityvisibilitystate",
					"personaname",
					"lastlogoff",
					"profileurl",
					"avatar",
					"avatarmedium",
					"avatarfull",
					"personastate",
				],
			},
		},
	},
	required: ["players"],
};
export const GetPlayerSummariesResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries",
	description: "Response containing player summary information.",
	$id: "GetPlayerSummariesResponse",
	type: "object",
	properties: {
		response: {
			$id: "GetPlayerSummariesResponse_properties_response",
			type: "object",
			properties: {
				players: {
					type: "array",
					items: {
						see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries",
						description: "Represents a player's summary information.",
						$id: "PlayerSummary",
						type: "object",
						properties: {
							steamid: {
								pattern: "^[0-9]{17}$",
								description: "The player's 64",
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
								format: "unix",
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
								description: "The 64",
								type: "string",
							},
							timecreated: {
								format: "unix",
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
						required: [
							"steamid",
							"communityvisibilitystate",
							"personaname",
							"lastlogoff",
							"profileurl",
							"avatar",
							"avatarmedium",
							"avatarfull",
							"personastate",
						],
					},
				},
			},
			required: ["players"],
		},
	},
	required: ["response"],
};
export const CheckAppOwnershipRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership",
	description: "Parameters for checking app ownership.",
	$id: "CheckAppOwnershipRequest",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64",
			type: "string",
		},
		appid: {
			minimum: 1,
			description: "The AppID of the game.",
			type: "number",
		},
	},
	required: ["key", "steamid", "appid"],
};
export const CheckAppOwnershipResponse_properties_appownership = {
	$id: "CheckAppOwnershipResponse_properties_appownership",
	type: "object",
	properties: {
		ownsApp: {
			type: "boolean",
		},
		timeAcquired: {
			format: "unix",
			description: "The time the app was acquired by the user.",
			type: "number",
		},
		ownerSteamID: {
			pattern: "^[0-9]{17}$",
			description: "The 64",
			type: "string",
		},
		sitelicense: {
			type: "boolean",
		},
	},
	required: ["ownsApp", "timeAcquired", "ownerSteamID"],
};
export const CheckAppOwnershipResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership",
	description: "Response indicating app ownership.",
	$id: "CheckAppOwnershipResponse",
	type: "object",
	properties: {
		appownership: {
			$id: "CheckAppOwnershipResponse_properties_appownership",
			type: "object",
			properties: {
				ownsApp: {
					type: "boolean",
				},
				timeAcquired: {
					format: "unix",
					description: "The time the app was acquired by the user.",
					type: "number",
				},
				ownerSteamID: {
					pattern: "^[0-9]{17}$",
					description: "The 64",
					type: "string",
				},
				sitelicense: {
					type: "boolean",
				},
			},
			required: ["ownsApp", "timeAcquired", "ownerSteamID"],
		},
	},
	required: ["appownership"],
};
export const GetDeletedSteamIDsRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs",
	description: "Parameters for retrieving deleted SteamIDs.",
	$id: "GetDeletedSteamIDsRequest",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		rowversion: {
			pattern: "^[0-9]+$",
			description: "An unsigned 64",
			type: "string",
		},
	},
	required: ["key", "rowversion"],
};
export const DeletedSteamID = {
	description: "Information about a deleted SteamID.",
	$id: "DeletedSteamID",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64",
			type: "string",
		},
	},
	required: ["steamid"],
};
export const GetDeletedSteamIDsResponse_properties_response = {
	$id: "GetDeletedSteamIDsResponse_properties_response",
	type: "object",
	properties: {
		deletedids: {
			type: "array",
			items: {
				description: "Information about a deleted SteamID.",
				$id: "DeletedSteamID",
				type: "object",
				properties: {
					steamid: {
						pattern: "^[0-9]{17}$",
						description: "The 64",
						type: "string",
					},
				},
				required: ["steamid"],
			},
		},
		rowversion: {
			pattern: "^[0-9]+$",
			description: "The rowversion for the next request.",
			type: "string",
		},
	},
	required: ["deletedids", "rowversion"],
};
export const GetDeletedSteamIDsResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs",
	description: "Response containing a list of deleted SteamIDs.",
	$id: "GetDeletedSteamIDsResponse",
	type: "object",
	properties: {
		response: {
			$id: "GetDeletedSteamIDsResponse_properties_response",
			type: "object",
			properties: {
				deletedids: {
					type: "array",
					items: {
						description: "Information about a deleted SteamID.",
						$id: "DeletedSteamID",
						type: "object",
						properties: {
							steamid: {
								pattern: "^[0-9]{17}$",
								description: "The 64",
								type: "string",
							},
						},
						required: ["steamid"],
					},
				},
				rowversion: {
					pattern: "^[0-9]+$",
					description: "The rowversion for the next request.",
					type: "string",
				},
			},
			required: ["deletedids", "rowversion"],
		},
	},
	required: ["response"],
};
export const GetUserGroupListRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList",
	description: "Parameters for retrieving a user's group list.",
	$id: "GetUserGroupListRequest",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64",
			type: "string",
		},
	},
	required: ["key", "steamid"],
};
export const UserGroup = {
	description: "Information about a Steam user group.",
	$id: "UserGroup",
	type: "object",
	properties: {
		gid: {
			pattern: "^[0-9]+$",
			description: "The 64",
			type: "string",
		},
	},
	required: ["gid"],
};
export const GetUserGroupListResponse_properties_response = {
	$id: "GetUserGroupListResponse_properties_response",
	type: "object",
	properties: {
		success: {
			type: "boolean",
		},
		groups: {
			type: "array",
			items: {
				description: "Information about a Steam user group.",
				$id: "UserGroup",
				type: "object",
				properties: {
					gid: {
						pattern: "^[0-9]+$",
						description: "The 64",
						type: "string",
					},
				},
				required: ["gid"],
			},
		},
	},
	required: ["success", "groups"],
};
export const GetUserGroupListResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList",
	description: "Response containing a user's group list.",
	$id: "GetUserGroupListResponse",
	type: "object",
	properties: {
		response: {
			$id: "GetUserGroupListResponse_properties_response",
			type: "object",
			properties: {
				success: {
					type: "boolean",
				},
				groups: {
					type: "array",
					items: {
						description: "Information about a Steam user group.",
						$id: "UserGroup",
						type: "object",
						properties: {
							gid: {
								pattern: "^[0-9]+$",
								description: "The 64",
								type: "string",
							},
						},
						required: ["gid"],
					},
				},
			},
			required: ["success", "groups"],
		},
	},
	required: ["response"],
};
export const ResolveVanityURLRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL",
	description: "Parameters for resolving a vanity URL to a SteamID.",
	$id: "ResolveVanityURLRequest",
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
	required: ["key", "vanityurl"],
};
export const ResolveVanityURLResponse_properties_response = {
	$id: "ResolveVanityURLResponse_properties_response",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64",
			type: "string",
		},
		success: {
			minimum: 1,
			description: "The success status (1 = success, 42 = no match).",
			type: "number",
		},
		message: {
			type: "string",
		},
	},
	required: ["success"],
};
export const ResolveVanityURLResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL",
	description: "Response containing the resolved SteamID from a vanity URL.",
	$id: "ResolveVanityURLResponse",
	type: "object",
	properties: {
		response: {
			$id: "ResolveVanityURLResponse_properties_response",
			type: "object",
			properties: {
				steamid: {
					pattern: "^[0-9]{17}$",
					description: "The 64",
					type: "string",
				},
				success: {
					minimum: 1,
					description: "The success status (1 = success, 42 = no match).",
					type: "number",
				},
				message: {
					type: "string",
				},
			},
			required: ["success"],
		},
	},
	required: ["response"],
};
export const GetFriendListRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList",
	description: "Parameters for retrieving a user's friend list.",
	$id: "GetFriendListRequest",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64",
			type: "string",
		},
		relationship: {
			pattern: "^(all|friend)$",
			description: "Filter by relationship type (all or friend).",
			type: "string",
		},
	},
	required: ["key", "steamid"],
};
export const Friend = {
	description: "Information about a friend.",
	$id: "Friend",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The 64",
			type: "string",
		},
		relationship: {
			pattern: "^(friend)$",
			description: "The relationship type (always 'friend').",
			type: "string",
		},
		friend_since: {
			format: "unix",
			description: "The Unix timestamp of when the friendship was created.",
			type: "number",
		},
	},
	required: ["steamid", "relationship", "friend_since"],
};
export const GetFriendListResponse_properties_friendslist = {
	$id: "GetFriendListResponse_properties_friendslist",
	type: "object",
	properties: {
		friends: {
			type: "array",
			items: {
				description: "Information about a friend.",
				$id: "Friend",
				type: "object",
				properties: {
					steamid: {
						pattern: "^[0-9]{17}$",
						description: "The 64",
						type: "string",
					},
					relationship: {
						pattern: "^(friend)$",
						description: "The relationship type (always 'friend').",
						type: "string",
					},
					friend_since: {
						format: "unix",
						description:
							"The Unix timestamp of when the friendship was created.",
						type: "number",
					},
				},
				required: ["steamid", "relationship", "friend_since"],
			},
		},
	},
	required: ["friends"],
};
export const GetFriendListResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList",
	description: "Response containing a user's friend list.",
	$id: "GetFriendListResponse",
	type: "object",
	properties: {
		friendslist: {
			$id: "GetFriendListResponse_properties_friendslist",
			type: "object",
			properties: {
				friends: {
					type: "array",
					items: {
						description: "Information about a friend.",
						$id: "Friend",
						type: "object",
						properties: {
							steamid: {
								pattern: "^[0-9]{17}$",
								description: "The 64",
								type: "string",
							},
							relationship: {
								pattern: "^(friend)$",
								description: "The relationship type (always 'friend').",
								type: "string",
							},
							friend_since: {
								format: "unix",
								description:
									"The Unix timestamp of when the friendship was created.",
								type: "number",
							},
						},
						required: ["steamid", "relationship", "friend_since"],
					},
				},
			},
			required: ["friends"],
		},
	},
	required: ["friendslist"],
};
export const GetPlayerBansRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans",
	description: "Parameters for retrieving player ban information.",
	$id: "GetPlayerBansRequest",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		steamids: {
			pattern: "^[0-9,]+$",
			description: "Comma",
			type: "string",
		},
	},
	required: ["key", "steamids"],
};
export const PlayerBan = {
	description: "Details about a player's ban status.",
	$id: "PlayerBan",
	type: "object",
	properties: {
		SteamId: {
			pattern: "^[0-9]{17}$",
			description: "The player's 64",
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
	required: [
		"SteamId",
		"CommunityBanned",
		"VACBanned",
		"NumberOfVACBans",
		"DaysSinceLastBan",
		"EconomyBan",
	],
};
export const GetPlayerBansResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans",
	description: "Response containing player ban information.",
	$id: "GetPlayerBansResponse",
	type: "object",
	properties: {
		players: {
			type: "array",
			items: {
				description: "Details about a player's ban status.",
				$id: "PlayerBan",
				type: "object",
				properties: {
					SteamId: {
						pattern: "^[0-9]{17}$",
						description: "The player's 64",
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
				required: [
					"SteamId",
					"CommunityBanned",
					"VACBanned",
					"NumberOfVACBans",
					"DaysSinceLastBan",
					"EconomyBan",
				],
			},
		},
	},
	required: ["players"],
};
