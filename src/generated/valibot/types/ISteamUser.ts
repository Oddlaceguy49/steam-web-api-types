// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

/**
 * Represents a player's summary information.
 */
export const PlayerSummary = v.strictObject({
	steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
	communityvisibilitystate: v.pipe(v.number(), v.minValue(0), v.maxValue(5)),
	profilestate: v.optional(v.pipe(v.number(), v.minValue(0), v.maxValue(1))),
	personaname: v.pipe(v.string(), v.minLength(1), v.maxLength(32)),
	lastlogoff: v.number(),
	profileurl: v.pipe(v.string(), v.url()),
	avatar: v.pipe(v.string(), v.url()),
	avatarmedium: v.pipe(v.string(), v.url()),
	avatarfull: v.pipe(v.string(), v.url()),
	personastate: v.pipe(v.number(), v.minValue(0), v.maxValue(6)),
	primaryclanid: v.optional(v.pipe(v.string(), v.regex(/^[0-9]{17}$/))),
	timecreated: v.optional(v.number()),
	realname: v.optional(v.pipe(v.string(), v.minLength(1))),
	loccountrycode: v.optional(
		v.pipe(v.string(), v.minLength(2), v.maxLength(2))
	),
	locstatecode: v.optional(v.pipe(v.string(), v.minLength(2), v.maxLength(2))),
	loccityid: v.optional(v.number()),
});

/**
 * Response containing player summary information.
 */
export const GetPlayerSummariesResponse = v.strictObject({
	response: v.strictObject({
		players: v.array(
			v.strictObject({
				steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
				communityvisibilitystate: v.pipe(
					v.number(),
					v.minValue(0),
					v.maxValue(5)
				),
				profilestate: v.optional(
					v.pipe(v.number(), v.minValue(0), v.maxValue(1))
				),
				personaname: v.pipe(v.string(), v.minLength(1), v.maxLength(32)),
				lastlogoff: v.number(),
				profileurl: v.pipe(v.string(), v.url()),
				avatar: v.pipe(v.string(), v.url()),
				avatarmedium: v.pipe(v.string(), v.url()),
				avatarfull: v.pipe(v.string(), v.url()),
				personastate: v.pipe(v.number(), v.minValue(0), v.maxValue(6)),
				primaryclanid: v.optional(v.pipe(v.string(), v.regex(/^[0-9]{17}$/))),
				timecreated: v.optional(v.number()),
				realname: v.optional(v.pipe(v.string(), v.minLength(1))),
				loccountrycode: v.optional(
					v.pipe(v.string(), v.minLength(2), v.maxLength(2))
				),
				locstatecode: v.optional(
					v.pipe(v.string(), v.minLength(2), v.maxLength(2))
				),
				loccityid: v.optional(v.number()),
			})
		),
	}),
});

/**
 * Parameters for checking app ownership.
 */
export const CheckAppOwnershipRequest = v.strictObject({
	key: v.string(),
	steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
	appid: v.pipe(v.number(), v.minValue(1)),
});

/**
 * Response indicating app ownership.
 */
export const CheckAppOwnershipResponse = v.strictObject({
	appownership: v.strictObject({
		ownsApp: v.boolean(),
		timeAcquired: v.number(),
		ownerSteamID: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
		sitelicense: v.optional(v.boolean()),
	}),
});

/**
 * Parameters for retrieving deleted SteamIDs.
 */
export const GetDeletedSteamIDsRequest = v.strictObject({
	key: v.string(),
	rowversion: v.pipe(v.string(), v.regex(/^[0-9]+$/)),
});

/**
 * Information about a deleted SteamID.
 */
export const DeletedSteamID = v.strictObject({
	steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
});

/**
 * Response containing a list of deleted SteamIDs.
 */
export const GetDeletedSteamIDsResponse = v.strictObject({
	response: v.strictObject({
		deletedids: v.array(
			v.strictObject({ steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)) })
		),
		rowversion: v.pipe(v.string(), v.regex(/^[0-9]+$/)),
	}),
});

/**
 * Parameters for retrieving a user's group list.
 */
export const GetUserGroupListRequest = v.strictObject({
	key: v.string(),
	steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
});

/**
 * Information about a Steam user group.
 */
export const UserGroup = v.strictObject({
	gid: v.pipe(v.string(), v.regex(/^[0-9]+$/)),
});

/**
 * Response containing a user's group list.
 */
export const GetUserGroupListResponse = v.strictObject({
	response: v.strictObject({
		success: v.boolean(),
		groups: v.array(
			v.strictObject({ gid: v.pipe(v.string(), v.regex(/^[0-9]+$/)) })
		),
	}),
});

/**
 * Parameters for resolving a vanity URL to a SteamID.
 */
export const ResolveVanityURLRequest = v.strictObject({
	key: v.string(),
	vanityurl: v.pipe(v.string(), v.minLength(1)),
	url_type: v.optional(v.pipe(v.number(), v.minValue(1), v.maxValue(3))),
});

/**
 * Response containing the resolved SteamID from a vanity URL.
 */
export const ResolveVanityURLResponse = v.strictObject({
	response: v.strictObject({
		steamid: v.optional(v.pipe(v.string(), v.regex(/^[0-9]{17}$/))),
		success: v.pipe(v.number(), v.minValue(1)),
		message: v.optional(v.string()),
	}),
});

/**
 * Parameters for retrieving a user's friend list.
 */
export const GetFriendListRequest = v.strictObject({
	key: v.string(),
	steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
	relationship: v.optional(v.pipe(v.string(), v.regex(/^(all|friend)$/))),
});

/**
 * Information about a friend.
 */
export const Friend = v.strictObject({
	steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
	relationship: v.pipe(v.string(), v.regex(/^(friend)$/)),
	friend_since: v.number(),
});

/**
 * Response containing a user's friend list.
 */
export const GetFriendListResponse = v.strictObject({
	friendslist: v.strictObject({
		friends: v.array(
			v.strictObject({
				steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
				relationship: v.pipe(v.string(), v.regex(/^(friend)$/)),
				friend_since: v.number(),
			})
		),
	}),
});

/**
 * Parameters for retrieving player ban information.
 */
export const GetPlayerBansRequest = v.strictObject({
	key: v.string(),
	steamids: v.pipe(v.string(), v.regex(/^[0-9,]+$/)),
});

/**
 * Details about a player's ban status.
 */
export const PlayerBan = v.strictObject({
	SteamId: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
	CommunityBanned: v.boolean(),
	VACBanned: v.boolean(),
	NumberOfVACBans: v.pipe(v.number(), v.minValue(0)),
	DaysSinceLastBan: v.pipe(v.number(), v.minValue(0)),
	EconomyBan: v.pipe(v.string(), v.regex(/^(none|probation|banned)$/)),
});

/**
 * Response containing player ban information.
 */
export const GetPlayerBansResponse = v.strictObject({
	players: v.array(
		v.strictObject({
			SteamId: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
			CommunityBanned: v.boolean(),
			VACBanned: v.boolean(),
			NumberOfVACBans: v.pipe(v.number(), v.minValue(0)),
			DaysSinceLastBan: v.pipe(v.number(), v.minValue(0)),
			EconomyBan: v.pipe(v.string(), v.regex(/^(none|probation|banned)$/)),
		})
	),
});
