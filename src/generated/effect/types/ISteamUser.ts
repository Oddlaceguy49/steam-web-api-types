// THIS FILE IS AUTO-GENERATED FOR EFFECT. DO NOT EDIT.

import { Schema as ET } from "@effect/schema/Schema";
import { Schema as ES } from "@effect/schema";

export type PlayerSummary = ET.Type<typeof PlayerSummary>;
export const PlayerSummary = ES.Struct({
	steamid: ES.String,
	communityvisibilitystate: ES.Number.pipe(ES.greaterThanOrEqualTo(0)).pipe(
		ES.lessThanOrEqualTo(5)
	),
	profilestate: ES.optional(
		ES.Number.pipe(ES.greaterThanOrEqualTo(0)).pipe(ES.lessThanOrEqualTo(1))
	),
	personaname: ES.String.pipe(ES.maxLength(32)).pipe(ES.minLength(1)),
	lastlogoff: ES.Number,
	profileurl: ES.String,
	avatar: ES.String,
	avatarmedium: ES.String,
	avatarfull: ES.String,
	personastate: ES.Number.pipe(ES.greaterThanOrEqualTo(0)).pipe(
		ES.lessThanOrEqualTo(6)
	),
	primaryclanid: ES.optional(ES.String),
	timecreated: ES.optional(ES.Number),
	realname: ES.optional(ES.String.pipe(ES.minLength(1))),
	loccountrycode: ES.optional(
		ES.String.pipe(ES.maxLength(2)).pipe(ES.minLength(2))
	),
	locstatecode: ES.optional(
		ES.String.pipe(ES.maxLength(2)).pipe(ES.minLength(2))
	),
	loccityid: ES.optional(ES.Number),
});

export type GetPlayerSummariesResponse_properties_response = ET.Type<
	typeof GetPlayerSummariesResponse_properties_response
>;
export const GetPlayerSummariesResponse_properties_response = ES.Struct({
	players: ES.Array(PlayerSummary),
});

export type GetPlayerSummariesResponse = ET.Type<
	typeof GetPlayerSummariesResponse
>;
export const GetPlayerSummariesResponse = ES.Struct({
	response: GetPlayerSummariesResponse_properties_response,
});

export type CheckAppOwnershipRequest = ET.Type<typeof CheckAppOwnershipRequest>;
export const CheckAppOwnershipRequest = ES.Struct({
	key: ES.String,
	steamid: ES.String,
	appid: ES.Number.pipe(ES.greaterThanOrEqualTo(1)),
});

export type CheckAppOwnershipResponse_properties_appownership = ET.Type<
	typeof CheckAppOwnershipResponse_properties_appownership
>;
export const CheckAppOwnershipResponse_properties_appownership = ES.Struct({
	ownsApp: ES.Boolean,
	timeAcquired: ES.Number,
	ownerSteamID: ES.String,
	sitelicense: ES.optional(ES.Boolean),
});

export type CheckAppOwnershipResponse = ET.Type<
	typeof CheckAppOwnershipResponse
>;
export const CheckAppOwnershipResponse = ES.Struct({
	appownership: CheckAppOwnershipResponse_properties_appownership,
});

export type GetDeletedSteamIDsRequest = ET.Type<
	typeof GetDeletedSteamIDsRequest
>;
export const GetDeletedSteamIDsRequest = ES.Struct({
	key: ES.String,
	rowversion: ES.String,
});

export type DeletedSteamID = ET.Type<typeof DeletedSteamID>;
export const DeletedSteamID = ES.Struct({
	steamid: ES.String,
});

export type GetDeletedSteamIDsResponse_properties_response = ET.Type<
	typeof GetDeletedSteamIDsResponse_properties_response
>;
export const GetDeletedSteamIDsResponse_properties_response = ES.Struct({
	deletedids: ES.Array(DeletedSteamID),
	rowversion: ES.String,
});

export type GetDeletedSteamIDsResponse = ET.Type<
	typeof GetDeletedSteamIDsResponse
>;
export const GetDeletedSteamIDsResponse = ES.Struct({
	response: GetDeletedSteamIDsResponse_properties_response,
});

export type GetUserGroupListRequest = ET.Type<typeof GetUserGroupListRequest>;
export const GetUserGroupListRequest = ES.Struct({
	key: ES.String,
	steamid: ES.String,
});

export type UserGroup = ET.Type<typeof UserGroup>;
export const UserGroup = ES.Struct({
	gid: ES.String,
});

export type GetUserGroupListResponse_properties_response = ET.Type<
	typeof GetUserGroupListResponse_properties_response
>;
export const GetUserGroupListResponse_properties_response = ES.Struct({
	success: ES.Boolean,
	groups: ES.Array(UserGroup),
});

export type GetUserGroupListResponse = ET.Type<typeof GetUserGroupListResponse>;
export const GetUserGroupListResponse = ES.Struct({
	response: GetUserGroupListResponse_properties_response,
});

export type ResolveVanityURLRequest = ET.Type<typeof ResolveVanityURLRequest>;
export const ResolveVanityURLRequest = ES.Struct({
	key: ES.String,
	vanityurl: ES.String.pipe(ES.minLength(1)),
	url_type: ES.optional(
		ES.Number.pipe(ES.greaterThanOrEqualTo(1)).pipe(ES.lessThanOrEqualTo(3))
	),
});

export type ResolveVanityURLResponse_properties_response = ET.Type<
	typeof ResolveVanityURLResponse_properties_response
>;
export const ResolveVanityURLResponse_properties_response = ES.Struct({
	steamid: ES.optional(ES.String),
	success: ES.Number.pipe(ES.greaterThanOrEqualTo(1)),
	message: ES.optional(ES.String),
});

export type ResolveVanityURLResponse = ET.Type<typeof ResolveVanityURLResponse>;
export const ResolveVanityURLResponse = ES.Struct({
	response: ResolveVanityURLResponse_properties_response,
});

export type GetFriendListRequest = ET.Type<typeof GetFriendListRequest>;
export const GetFriendListRequest = ES.Struct({
	key: ES.String,
	steamid: ES.String,
	relationship: ES.optional(ES.String),
});

export type Friend = ET.Type<typeof Friend>;
export const Friend = ES.Struct({
	steamid: ES.String,
	relationship: ES.String,
	friend_since: ES.Number,
});

export type GetFriendListResponse_properties_friendslist = ET.Type<
	typeof GetFriendListResponse_properties_friendslist
>;
export const GetFriendListResponse_properties_friendslist = ES.Struct({
	friends: ES.Array(Friend),
});

export type GetFriendListResponse = ET.Type<typeof GetFriendListResponse>;
export const GetFriendListResponse = ES.Struct({
	friendslist: GetFriendListResponse_properties_friendslist,
});

export type GetPlayerBansRequest = ET.Type<typeof GetPlayerBansRequest>;
export const GetPlayerBansRequest = ES.Struct({
	key: ES.String,
	steamids: ES.String,
});

export type PlayerBan = ET.Type<typeof PlayerBan>;
export const PlayerBan = ES.Struct({
	SteamId: ES.String,
	CommunityBanned: ES.Boolean,
	VACBanned: ES.Boolean,
	NumberOfVACBans: ES.Number.pipe(ES.greaterThanOrEqualTo(0)),
	DaysSinceLastBan: ES.Number.pipe(ES.greaterThanOrEqualTo(0)),
	EconomyBan: ES.String,
});

export type GetPlayerBansResponse = ET.Type<typeof GetPlayerBansResponse>;
export const GetPlayerBansResponse = ES.Struct({
	players: ES.Array(PlayerBan),
});
