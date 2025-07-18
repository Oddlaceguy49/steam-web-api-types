import { Type, Static } from "@sinclair/typebox";

export type PlayerSummary = Static<typeof PlayerSummary>;
export const PlayerSummary = Type.Object(
	{
		steamid: Type.String({ pattern: "^[0", description: "The player's 64" }),
		communityvisibilitystate: Type.Number({
			minimum: 0,
			maximum: 5,
			description:
				"Player's community visibility state (0 = Private, 1 = Friends Only, 2 = Friends of Friends, 3 = Users Only, 4 = Public, 5 = All).",
		}),
		profilestate: Type.Optional(
			Type.Number({
				minimum: 0,
				maximum: 1,
				description:
					"If the profile is not visible, this will be 0. If the profile is visible, this will be 1.",
			})
		),
		personaname: Type.String({
			minLength: 1,
			maxLength: 32,
			description: "The player's persona name (display name).",
		}),
		lastlogoff: Type.Number({
			format: "unix",
			description: "The last time the player was logged off Steam.",
		}),
		profileurl: Type.String({
			format: "url",
			description: "The URL to the player's Steam Community profile.",
		}),
		avatar: Type.String({
			format: "url",
			description: "The URL to the player's 32x32px avatar.",
		}),
		avatarmedium: Type.String({
			format: "url",
			description: "The URL to the player's 64x64px avatar.",
		}),
		avatarfull: Type.String({
			format: "url",
			description: "The URL to the player's 184x184px avatar.",
		}),
		personastate: Type.Number({
			minimum: 0,
			maximum: 6,
			description:
				"The player's current online status (0 = Offline, 1 = Online, 2 = Busy, 3 = Away, 4 = Snooze, 5 = Looking to Trade, 6 = Looking to Play).",
		}),
		primaryclanid: Type.Optional(
			Type.String({ pattern: "^[0", description: "The 64" })
		),
		timecreated: Type.Optional(
			Type.Number({
				format: "unix",
				description: "The time the player's Steam account was created.",
			})
		),
		realname: Type.Optional(
			Type.String({ minLength: 1, description: "The player's real name." })
		),
		loccountrycode: Type.Optional(
			Type.String({
				minLength: 2,
				maxLength: 2,
				description: "The player's country code.",
			})
		),
		locstatecode: Type.Optional(
			Type.String({
				minLength: 2,
				maxLength: 2,
				description: "The player's state code.",
			})
		),
		loccityid: Type.Optional(
			Type.Number({ description: "The player's city ID." })
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries",
		description: "Represents a player's summary information.",
	}
);

export type GetPlayerSummariesResponse = Static<
	typeof GetPlayerSummariesResponse
>;
export const GetPlayerSummariesResponse = Type.Object(
	{
		response: Type.Object({
			players: Type.Array(PlayerSummary),
		}),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries",
		description: "Response containing player summary information.",
	}
);

export type CheckAppOwnershipRequest = Static<typeof CheckAppOwnershipRequest>;
export const CheckAppOwnershipRequest = Type.Object(
	{
		key: Type.String(),
		steamid: Type.String({ pattern: "^[0", description: "The 64" }),
		appid: Type.Number({ minimum: 1, description: "The AppID of the game." }),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership",
		description: "Parameters for checking app ownership.",
	}
);

export type CheckAppOwnershipResponse = Static<
	typeof CheckAppOwnershipResponse
>;
export const CheckAppOwnershipResponse = Type.Object(
	{
		appownership: Type.Object(
			{
				ownsApp: Type.Boolean({
					description: "True if the user owns the app, false otherwise.",
				}),
				timeAcquired: Type.Number({
					format: "unix",
					description: "The time the app was acquired by the user.",
				}),
				ownerSteamID: Type.String({ pattern: "^[0", description: "The 64" }),
				sitelicense: Type.Optional(
					Type.Boolean({
						description:
							"True if the app is accessed via site license (PC Cafe program).",
					})
				),
			},
			{ description: "True if the user owns the app, false otherwise." }
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership",
		description: "Response indicating app ownership.",
	}
);

export type GetDeletedSteamIDsRequest = Static<
	typeof GetDeletedSteamIDsRequest
>;
export const GetDeletedSteamIDsRequest = Type.Object(
	{
		key: Type.String(),
		rowversion: Type.String({ pattern: "^[0", description: "An unsigned 64" }),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs",
		description: "Parameters for retrieving deleted SteamIDs.",
	}
);

export type DeletedSteamID = Static<typeof DeletedSteamID>;
export const DeletedSteamID = Type.Object(
	{
		steamid: Type.String({ pattern: "^[0", description: "The 64" }),
	},
	{ description: "Information about a deleted SteamID." }
);

export type GetDeletedSteamIDsResponse = Static<
	typeof GetDeletedSteamIDsResponse
>;
export const GetDeletedSteamIDsResponse = Type.Object(
	{
		response: Type.Object(
			{
				deletedids: Type.Array(DeletedSteamID),
				rowversion: Type.String({
					pattern: "^[0",
					description: "The rowversion for the next request.",
				}),
			},
			{ pattern: "^[0", description: "The rowversion for the next request." }
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs",
		description: "Response containing a list of deleted SteamIDs.",
	}
);

export type GetUserGroupListRequest = Static<typeof GetUserGroupListRequest>;
export const GetUserGroupListRequest = Type.Object(
	{
		key: Type.String(),
		steamid: Type.String({ pattern: "^[0", description: "The 64" }),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList",
		description: "Parameters for retrieving a user's group list.",
	}
);

export type UserGroup = Static<typeof UserGroup>;
export const UserGroup = Type.Object(
	{
		gid: Type.String({ pattern: "^[0", description: "The 64" }),
	},
	{ description: "Information about a Steam user group." }
);

export type GetUserGroupListResponse = Static<typeof GetUserGroupListResponse>;
export const GetUserGroupListResponse = Type.Object(
	{
		response: Type.Object(
			{
				success: Type.Boolean({
					description: "True if the request was successful.",
				}),
				groups: Type.Array(UserGroup),
			},
			{ description: "True if the request was successful." }
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList",
		description: "Response containing a user's group list.",
	}
);

export type ResolveVanityURLRequest = Static<typeof ResolveVanityURLRequest>;
export const ResolveVanityURLRequest = Type.Object(
	{
		key: Type.String(),
		vanityurl: Type.String({
			minLength: 1,
			description: "The vanity URL to resolve.",
		}),
		url_type: Type.Optional(
			Type.Number({
				minimum: 1,
				maximum: 3,
				description:
					"The type of vanity URL (1 = individual, 2 = group, 3 = game group).",
			})
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL",
		description: "Parameters for resolving a vanity URL to a SteamID.",
	}
);

export type ResolveVanityURLResponse = Static<typeof ResolveVanityURLResponse>;
export const ResolveVanityURLResponse = Type.Object(
	{
		response: Type.Object(
			{
				steamid: Type.Optional(
					Type.String({ pattern: "^[0", description: "The 64" })
				),
				success: Type.Number({
					minimum: 1,
					description: "The success status (1 = success, 42 = no match).",
				}),
				message: Type.Optional(
					Type.String({ description: "A message describing the status." })
				),
			},
			{ pattern: "^[0", description: "The 64" }
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL",
		description: "Response containing the resolved SteamID from a vanity URL.",
	}
);

export type GetFriendListRequest = Static<typeof GetFriendListRequest>;
export const GetFriendListRequest = Type.Object(
	{
		key: Type.String(),
		steamid: Type.String({ pattern: "^[0", description: "The 64" }),
		relationship: Type.Optional(
			Type.String({
				pattern: "^(all|friend)$",
				description: "Filter by relationship type (all or friend).",
			})
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList",
		description: "Parameters for retrieving a user's friend list.",
	}
);

export type Friend = Static<typeof Friend>;
export const Friend = Type.Object(
	{
		steamid: Type.String({ pattern: "^[0", description: "The 64" }),
		relationship: Type.String({
			pattern: "^(friend)$",
			description: "The relationship type (always 'friend').",
		}),
		friend_since: Type.Number({
			format: "unix",
			description: "The Unix timestamp of when the friendship was created.",
		}),
	},
	{ description: "Information about a friend." }
);

export type GetFriendListResponse = Static<typeof GetFriendListResponse>;
export const GetFriendListResponse = Type.Object(
	{
		friendslist: Type.Object({
			friends: Type.Array(Friend),
		}),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList",
		description: "Response containing a user's friend list.",
	}
);

export type GetPlayerBansRequest = Static<typeof GetPlayerBansRequest>;
export const GetPlayerBansRequest = Type.Object(
	{
		key: Type.String(),
		steamids: Type.String({ pattern: "^[0", description: "Comma" }),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans",
		description: "Parameters for retrieving player ban information.",
	}
);

export type PlayerBan = Static<typeof PlayerBan>;
export const PlayerBan = Type.Object(
	{
		SteamId: Type.String({ pattern: "^[0", description: "The player's 64" }),
		CommunityBanned: Type.Boolean({
			description: "True if the player is banned from the Steam Community.",
		}),
		VACBanned: Type.Boolean({
			description: "True if the player has VAC bans on record.",
		}),
		NumberOfVACBans: Type.Number({
			minimum: 0,
			description: "The number of VAC bans the player has.",
		}),
		DaysSinceLastBan: Type.Number({
			minimum: 0,
			description: "The number of days since the player's last ban.",
		}),
		EconomyBan: Type.String({
			pattern: "^(none|probation|banned)$",
			description: "The player's economy ban status.",
		}),
	},
	{ description: "Details about a player's ban status." }
);

export type GetPlayerBansResponse = Static<typeof GetPlayerBansResponse>;
export const GetPlayerBansResponse = Type.Object(
	{
		players: Type.Array(PlayerBan),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans",
		description: "Response containing player ban information.",
	}
);
