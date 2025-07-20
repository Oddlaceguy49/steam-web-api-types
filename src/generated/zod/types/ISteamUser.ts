// THIS FILE IS AUTO-GENERATED FOR ZOD. DO NOT EDIT.

import { z } from "zod";

export type PlayerSummary = z.infer<typeof PlayerSummary>;
export const PlayerSummary = z.object({
	steamid: z.string(),
	communityvisibilitystate: z.number().min(0).max(5),
	profilestate: z.number().min(0).max(1).optional(),
	personaname: z.string().max(32).min(1),
	lastlogoff: z.number(),
	profileurl: z.string(),
	avatar: z.string(),
	avatarmedium: z.string(),
	avatarfull: z.string(),
	personastate: z.number().min(0).max(6),
	primaryclanid: z.string().optional(),
	timecreated: z.number().optional(),
	realname: z.string().min(1).optional(),
	loccountrycode: z.string().max(2).min(2).optional(),
	locstatecode: z.string().max(2).min(2).optional(),
	loccityid: z.number().optional(),
});

export type GetPlayerSummariesResponse_properties_response = z.infer<
	typeof GetPlayerSummariesResponse_properties_response
>;
export const GetPlayerSummariesResponse_properties_response = z.object({
	players: z.array(PlayerSummary),
});

export type GetPlayerSummariesResponse = z.infer<
	typeof GetPlayerSummariesResponse
>;
export const GetPlayerSummariesResponse = z.object({
	response: GetPlayerSummariesResponse_properties_response,
});

export type CheckAppOwnershipRequest = z.infer<typeof CheckAppOwnershipRequest>;
export const CheckAppOwnershipRequest = z.object({
	key: z.string(),
	steamid: z.string(),
	appid: z.number().min(1),
});

export type CheckAppOwnershipResponse_properties_appownership = z.infer<
	typeof CheckAppOwnershipResponse_properties_appownership
>;
export const CheckAppOwnershipResponse_properties_appownership = z.object({
	ownsApp: z.boolean(),
	timeAcquired: z.number(),
	ownerSteamID: z.string(),
	sitelicense: z.boolean().optional(),
});

export type CheckAppOwnershipResponse = z.infer<
	typeof CheckAppOwnershipResponse
>;
export const CheckAppOwnershipResponse = z.object({
	appownership: CheckAppOwnershipResponse_properties_appownership,
});

export type GetDeletedSteamIDsRequest = z.infer<
	typeof GetDeletedSteamIDsRequest
>;
export const GetDeletedSteamIDsRequest = z.object({
	key: z.string(),
	rowversion: z.string(),
});

export type DeletedSteamID = z.infer<typeof DeletedSteamID>;
export const DeletedSteamID = z.object({
	steamid: z.string(),
});

export type GetDeletedSteamIDsResponse_properties_response = z.infer<
	typeof GetDeletedSteamIDsResponse_properties_response
>;
export const GetDeletedSteamIDsResponse_properties_response = z.object({
	deletedids: z.array(DeletedSteamID),
	rowversion: z.string(),
});

export type GetDeletedSteamIDsResponse = z.infer<
	typeof GetDeletedSteamIDsResponse
>;
export const GetDeletedSteamIDsResponse = z.object({
	response: GetDeletedSteamIDsResponse_properties_response,
});

export type GetUserGroupListRequest = z.infer<typeof GetUserGroupListRequest>;
export const GetUserGroupListRequest = z.object({
	key: z.string(),
	steamid: z.string(),
});

export type UserGroup = z.infer<typeof UserGroup>;
export const UserGroup = z.object({
	gid: z.string(),
});

export type GetUserGroupListResponse_properties_response = z.infer<
	typeof GetUserGroupListResponse_properties_response
>;
export const GetUserGroupListResponse_properties_response = z.object({
	success: z.boolean(),
	groups: z.array(UserGroup),
});

export type GetUserGroupListResponse = z.infer<typeof GetUserGroupListResponse>;
export const GetUserGroupListResponse = z.object({
	response: GetUserGroupListResponse_properties_response,
});

export type ResolveVanityURLRequest = z.infer<typeof ResolveVanityURLRequest>;
export const ResolveVanityURLRequest = z.object({
	key: z.string(),
	vanityurl: z.string().min(1),
	url_type: z.number().min(1).max(3).optional(),
});

export type ResolveVanityURLResponse_properties_response = z.infer<
	typeof ResolveVanityURLResponse_properties_response
>;
export const ResolveVanityURLResponse_properties_response = z.object({
	steamid: z.string().optional(),
	success: z.number().min(1),
	message: z.string().optional(),
});

export type ResolveVanityURLResponse = z.infer<typeof ResolveVanityURLResponse>;
export const ResolveVanityURLResponse = z.object({
	response: ResolveVanityURLResponse_properties_response,
});

export type GetFriendListRequest = z.infer<typeof GetFriendListRequest>;
export const GetFriendListRequest = z.object({
	key: z.string(),
	steamid: z.string(),
	relationship: z.string().optional(),
});

export type Friend = z.infer<typeof Friend>;
export const Friend = z.object({
	steamid: z.string(),
	relationship: z.string(),
	friend_since: z.number(),
});

export type GetFriendListResponse_properties_friendslist = z.infer<
	typeof GetFriendListResponse_properties_friendslist
>;
export const GetFriendListResponse_properties_friendslist = z.object({
	friends: z.array(Friend),
});

export type GetFriendListResponse = z.infer<typeof GetFriendListResponse>;
export const GetFriendListResponse = z.object({
	friendslist: GetFriendListResponse_properties_friendslist,
});

export type GetPlayerBansRequest = z.infer<typeof GetPlayerBansRequest>;
export const GetPlayerBansRequest = z.object({
	key: z.string(),
	steamids: z.string(),
});

export type PlayerBan = z.infer<typeof PlayerBan>;
export const PlayerBan = z.object({
	SteamId: z.string(),
	CommunityBanned: z.boolean(),
	VACBanned: z.boolean(),
	NumberOfVACBans: z.number().min(0),
	DaysSinceLastBan: z.number().min(0),
	EconomyBan: z.string(),
});

export type GetPlayerBansResponse = z.infer<typeof GetPlayerBansResponse>;
export const GetPlayerBansResponse = z.object({
	players: z.array(PlayerBan),
});
