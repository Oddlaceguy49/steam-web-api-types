// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

export type PlayerSummary = v.InferOutput<typeof PlayerSummary>;
export const PlayerSummary = v.object({
	steamid: v.string(),
	communityvisibilitystate: v.pipe(v.number(), v.minValue(0), v.maxValue(5)),
	profilestate: v.optional(v.pipe(v.number(), v.minValue(0), v.maxValue(1))),
	personaname: v.pipe(v.string(), v.maxLength(32), v.minLength(1)),
	lastlogoff: v.number(),
	profileurl: v.string(),
	avatar: v.string(),
	avatarmedium: v.string(),
	avatarfull: v.string(),
	personastate: v.pipe(v.number(), v.minValue(0), v.maxValue(6)),
	primaryclanid: v.optional(v.string()),
	timecreated: v.optional(v.number()),
	realname: v.optional(v.pipe(v.string(), v.minLength(1))),
	loccountrycode: v.optional(
		v.pipe(v.string(), v.maxLength(2), v.minLength(2))
	),
	locstatecode: v.optional(v.pipe(v.string(), v.maxLength(2), v.minLength(2))),
	loccityid: v.optional(v.number()),
});

export type GetPlayerSummariesResponse_properties_response = v.InferOutput<
	typeof GetPlayerSummariesResponse_properties_response
>;
export const GetPlayerSummariesResponse_properties_response = v.object({
	players: v.array(PlayerSummary),
});

export type GetPlayerSummariesResponse = v.InferOutput<
	typeof GetPlayerSummariesResponse
>;
export const GetPlayerSummariesResponse = v.object({
	response: GetPlayerSummariesResponse_properties_response,
});

export type CheckAppOwnershipRequest = v.InferOutput<
	typeof CheckAppOwnershipRequest
>;
export const CheckAppOwnershipRequest = v.object({
	key: v.string(),
	steamid: v.string(),
	appid: v.pipe(v.number(), v.minValue(1)),
});

export type CheckAppOwnershipResponse_properties_appownership = v.InferOutput<
	typeof CheckAppOwnershipResponse_properties_appownership
>;
export const CheckAppOwnershipResponse_properties_appownership = v.object({
	ownsApp: v.boolean(),
	timeAcquired: v.number(),
	ownerSteamID: v.string(),
	sitelicense: v.optional(v.boolean()),
});

export type CheckAppOwnershipResponse = v.InferOutput<
	typeof CheckAppOwnershipResponse
>;
export const CheckAppOwnershipResponse = v.object({
	appownership: CheckAppOwnershipResponse_properties_appownership,
});

export type GetDeletedSteamIDsRequest = v.InferOutput<
	typeof GetDeletedSteamIDsRequest
>;
export const GetDeletedSteamIDsRequest = v.object({
	key: v.string(),
	rowversion: v.string(),
});

export type DeletedSteamID = v.InferOutput<typeof DeletedSteamID>;
export const DeletedSteamID = v.object({
	steamid: v.string(),
});

export type GetDeletedSteamIDsResponse_properties_response = v.InferOutput<
	typeof GetDeletedSteamIDsResponse_properties_response
>;
export const GetDeletedSteamIDsResponse_properties_response = v.object({
	deletedids: v.array(DeletedSteamID),
	rowversion: v.string(),
});

export type GetDeletedSteamIDsResponse = v.InferOutput<
	typeof GetDeletedSteamIDsResponse
>;
export const GetDeletedSteamIDsResponse = v.object({
	response: GetDeletedSteamIDsResponse_properties_response,
});

export type GetUserGroupListRequest = v.InferOutput<
	typeof GetUserGroupListRequest
>;
export const GetUserGroupListRequest = v.object({
	key: v.string(),
	steamid: v.string(),
});

export type UserGroup = v.InferOutput<typeof UserGroup>;
export const UserGroup = v.object({
	gid: v.string(),
});

export type GetUserGroupListResponse_properties_response = v.InferOutput<
	typeof GetUserGroupListResponse_properties_response
>;
export const GetUserGroupListResponse_properties_response = v.object({
	success: v.boolean(),
	groups: v.array(UserGroup),
});

export type GetUserGroupListResponse = v.InferOutput<
	typeof GetUserGroupListResponse
>;
export const GetUserGroupListResponse = v.object({
	response: GetUserGroupListResponse_properties_response,
});

export type ResolveVanityURLRequest = v.InferOutput<
	typeof ResolveVanityURLRequest
>;
export const ResolveVanityURLRequest = v.object({
	key: v.string(),
	vanityurl: v.pipe(v.string(), v.minLength(1)),
	url_type: v.optional(v.pipe(v.number(), v.minValue(1), v.maxValue(3))),
});

export type ResolveVanityURLResponse_properties_response = v.InferOutput<
	typeof ResolveVanityURLResponse_properties_response
>;
export const ResolveVanityURLResponse_properties_response = v.object({
	steamid: v.optional(v.string()),
	success: v.pipe(v.number(), v.minValue(1)),
	message: v.optional(v.string()),
});

export type ResolveVanityURLResponse = v.InferOutput<
	typeof ResolveVanityURLResponse
>;
export const ResolveVanityURLResponse = v.object({
	response: ResolveVanityURLResponse_properties_response,
});

export type GetFriendListRequest = v.InferOutput<typeof GetFriendListRequest>;
export const GetFriendListRequest = v.object({
	key: v.string(),
	steamid: v.string(),
	relationship: v.optional(v.string()),
});

export type Friend = v.InferOutput<typeof Friend>;
export const Friend = v.object({
	steamid: v.string(),
	relationship: v.string(),
	friend_since: v.number(),
});

export type GetFriendListResponse_properties_friendslist = v.InferOutput<
	typeof GetFriendListResponse_properties_friendslist
>;
export const GetFriendListResponse_properties_friendslist = v.object({
	friends: v.array(Friend),
});

export type GetFriendListResponse = v.InferOutput<typeof GetFriendListResponse>;
export const GetFriendListResponse = v.object({
	friendslist: GetFriendListResponse_properties_friendslist,
});

export type GetPlayerBansRequest = v.InferOutput<typeof GetPlayerBansRequest>;
export const GetPlayerBansRequest = v.object({
	key: v.string(),
	steamids: v.string(),
});

export type PlayerBan = v.InferOutput<typeof PlayerBan>;
export const PlayerBan = v.object({
	SteamId: v.string(),
	CommunityBanned: v.boolean(),
	VACBanned: v.boolean(),
	NumberOfVACBans: v.pipe(v.number(), v.minValue(0)),
	DaysSinceLastBan: v.pipe(v.number(), v.minValue(0)),
	EconomyBan: v.string(),
});

export type GetPlayerBansResponse = v.InferOutput<typeof GetPlayerBansResponse>;
export const GetPlayerBansResponse = v.object({
	players: v.array(PlayerBan),
});
