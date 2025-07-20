// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as y from "yup";

export type PlayerSummary = y.InferType<typeof PlayerSummary>;
export const PlayerSummary = y.object({
	steamid: y.string().required(),
	communityvisibilitystate: y.number().required().min(0).max(5),
	profilestate: y.number().required().min(0).max(1).optional(),
	personaname: y.string().required().max(32).min(1),
	lastlogoff: y.number().required(),
	profileurl: y.string().required(),
	avatar: y.string().required(),
	avatarmedium: y.string().required(),
	avatarfull: y.string().required(),
	personastate: y.number().required().min(0).max(6),
	primaryclanid: y.string().required().optional(),
	timecreated: y.number().required().optional(),
	realname: y.string().required().min(1).optional(),
	loccountrycode: y.string().required().max(2).min(2).optional(),
	locstatecode: y.string().required().max(2).min(2).optional(),
	loccityid: y.number().required().optional(),
});

export type GetPlayerSummariesResponse_properties_response = y.InferType<
	typeof GetPlayerSummariesResponse_properties_response
>;
export const GetPlayerSummariesResponse_properties_response = y.object({
	players: y.array(PlayerSummary),
});

export type GetPlayerSummariesResponse = y.InferType<
	typeof GetPlayerSummariesResponse
>;
export const GetPlayerSummariesResponse = y.object({
	response: GetPlayerSummariesResponse_properties_response,
});

export type CheckAppOwnershipRequest = y.InferType<
	typeof CheckAppOwnershipRequest
>;
export const CheckAppOwnershipRequest = y.object({
	key: y.string().required(),
	steamid: y.string().required(),
	appid: y.number().required().min(1),
});

export type CheckAppOwnershipResponse_properties_appownership = y.InferType<
	typeof CheckAppOwnershipResponse_properties_appownership
>;
export const CheckAppOwnershipResponse_properties_appownership = y.object({
	ownsApp: y.boolean().required(),
	timeAcquired: y.number().required(),
	ownerSteamID: y.string().required(),
	sitelicense: y.boolean().required().optional(),
});

export type CheckAppOwnershipResponse = y.InferType<
	typeof CheckAppOwnershipResponse
>;
export const CheckAppOwnershipResponse = y.object({
	appownership: CheckAppOwnershipResponse_properties_appownership,
});

export type GetDeletedSteamIDsRequest = y.InferType<
	typeof GetDeletedSteamIDsRequest
>;
export const GetDeletedSteamIDsRequest = y.object({
	key: y.string().required(),
	rowversion: y.string().required(),
});

export type DeletedSteamID = y.InferType<typeof DeletedSteamID>;
export const DeletedSteamID = y.object({
	steamid: y.string().required(),
});

export type GetDeletedSteamIDsResponse_properties_response = y.InferType<
	typeof GetDeletedSteamIDsResponse_properties_response
>;
export const GetDeletedSteamIDsResponse_properties_response = y.object({
	deletedids: y.array(DeletedSteamID),
	rowversion: y.string().required(),
});

export type GetDeletedSteamIDsResponse = y.InferType<
	typeof GetDeletedSteamIDsResponse
>;
export const GetDeletedSteamIDsResponse = y.object({
	response: GetDeletedSteamIDsResponse_properties_response,
});

export type GetUserGroupListRequest = y.InferType<
	typeof GetUserGroupListRequest
>;
export const GetUserGroupListRequest = y.object({
	key: y.string().required(),
	steamid: y.string().required(),
});

export type UserGroup = y.InferType<typeof UserGroup>;
export const UserGroup = y.object({
	gid: y.string().required(),
});

export type GetUserGroupListResponse_properties_response = y.InferType<
	typeof GetUserGroupListResponse_properties_response
>;
export const GetUserGroupListResponse_properties_response = y.object({
	success: y.boolean().required(),
	groups: y.array(UserGroup),
});

export type GetUserGroupListResponse = y.InferType<
	typeof GetUserGroupListResponse
>;
export const GetUserGroupListResponse = y.object({
	response: GetUserGroupListResponse_properties_response,
});

export type ResolveVanityURLRequest = y.InferType<
	typeof ResolveVanityURLRequest
>;
export const ResolveVanityURLRequest = y.object({
	key: y.string().required(),
	vanityurl: y.string().required().min(1),
	url_type: y.number().required().min(1).max(3).optional(),
});

export type ResolveVanityURLResponse_properties_response = y.InferType<
	typeof ResolveVanityURLResponse_properties_response
>;
export const ResolveVanityURLResponse_properties_response = y.object({
	steamid: y.string().required().optional(),
	success: y.number().required().min(1),
	message: y.string().required().optional(),
});

export type ResolveVanityURLResponse = y.InferType<
	typeof ResolveVanityURLResponse
>;
export const ResolveVanityURLResponse = y.object({
	response: ResolveVanityURLResponse_properties_response,
});

export type GetFriendListRequest = y.InferType<typeof GetFriendListRequest>;
export const GetFriendListRequest = y.object({
	key: y.string().required(),
	steamid: y.string().required(),
	relationship: y.string().required().optional(),
});

export type Friend = y.InferType<typeof Friend>;
export const Friend = y.object({
	steamid: y.string().required(),
	relationship: y.string().required(),
	friend_since: y.number().required(),
});

export type GetFriendListResponse_properties_friendslist = y.InferType<
	typeof GetFriendListResponse_properties_friendslist
>;
export const GetFriendListResponse_properties_friendslist = y.object({
	friends: y.array(Friend),
});

export type GetFriendListResponse = y.InferType<typeof GetFriendListResponse>;
export const GetFriendListResponse = y.object({
	friendslist: GetFriendListResponse_properties_friendslist,
});

export type GetPlayerBansRequest = y.InferType<typeof GetPlayerBansRequest>;
export const GetPlayerBansRequest = y.object({
	key: y.string().required(),
	steamids: y.string().required(),
});

export type PlayerBan = y.InferType<typeof PlayerBan>;
export const PlayerBan = y.object({
	SteamId: y.string().required(),
	CommunityBanned: y.boolean().required(),
	VACBanned: y.boolean().required(),
	NumberOfVACBans: y.number().required().min(0),
	DaysSinceLastBan: y.number().required().min(0),
	EconomyBan: y.string().required(),
});

export type GetPlayerBansResponse = y.InferType<typeof GetPlayerBansResponse>;
export const GetPlayerBansResponse = y.object({
	players: y.array(PlayerBan),
});
