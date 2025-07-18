// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as y from "yup";

export type PlayerSummary_properties_communityvisibilitystate = y.InferType<
	typeof PlayerSummary_properties_communityvisibilitystate
>;
export const PlayerSummary_properties_communityvisibilitystate = y
	.number()
	.required()
	.min(0)
	.max(5);

export type PlayerSummary_properties_profilestate = y.InferType<
	typeof PlayerSummary_properties_profilestate
>;
export const PlayerSummary_properties_profilestate = y
	.number()
	.required()
	.min(0)
	.max(1);

export type PlayerSummary_properties_personaname = y.InferType<
	typeof PlayerSummary_properties_personaname
>;
export const PlayerSummary_properties_personaname = y
	.string()
	.required()
	.max(32)
	.min(1);

export type PlayerSummary_properties_lastlogoff = y.InferType<
	typeof PlayerSummary_properties_lastlogoff
>;
export const PlayerSummary_properties_lastlogoff = y.number().required();

export type PlayerSummary_properties_profileurl = y.InferType<
	typeof PlayerSummary_properties_profileurl
>;
export const PlayerSummary_properties_profileurl = y.string().required();

export type PlayerSummary_properties_avatar = y.InferType<
	typeof PlayerSummary_properties_avatar
>;
export const PlayerSummary_properties_avatar = y.string().required();

export type PlayerSummary_properties_avatarmedium = y.InferType<
	typeof PlayerSummary_properties_avatarmedium
>;
export const PlayerSummary_properties_avatarmedium = y.string().required();

export type PlayerSummary_properties_avatarfull = y.InferType<
	typeof PlayerSummary_properties_avatarfull
>;
export const PlayerSummary_properties_avatarfull = y.string().required();

export type PlayerSummary_properties_personastate = y.InferType<
	typeof PlayerSummary_properties_personastate
>;
export const PlayerSummary_properties_personastate = y
	.number()
	.required()
	.min(0)
	.max(6);

export type PlayerSummary_properties_timecreated = y.InferType<
	typeof PlayerSummary_properties_timecreated
>;
export const PlayerSummary_properties_timecreated = y.number().required();

export type PlayerSummary_properties_realname = y.InferType<
	typeof PlayerSummary_properties_realname
>;
export const PlayerSummary_properties_realname = y.string().required().min(1);

export type PlayerSummary_properties_loccountrycode = y.InferType<
	typeof PlayerSummary_properties_loccountrycode
>;
export const PlayerSummary_properties_loccountrycode = y
	.string()
	.required()
	.max(2)
	.min(2);

export type PlayerSummary_properties_locstatecode = y.InferType<
	typeof PlayerSummary_properties_locstatecode
>;
export const PlayerSummary_properties_locstatecode = y
	.string()
	.required()
	.max(2)
	.min(2);

export type PlayerSummary_properties_loccityid = y.InferType<
	typeof PlayerSummary_properties_loccityid
>;
export const PlayerSummary_properties_loccityid = y.number().required();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	y.number().required().min(0).max(5);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	y.number().required().min(0).max(1);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	y.string().required().max(32).min(1);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	y.number().required();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	y.string().required();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	y.string().required();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	y.string().required();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	y.string().required();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	y.number().required().min(0).max(6);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	y.number().required();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	y.string().required().min(1);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	y.string().required().max(2).min(2);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	y.string().required().max(2).min(2);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	y.InferType<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	y.number().required();

export type CheckAppOwnershipRequest_properties_key = y.InferType<
	typeof CheckAppOwnershipRequest_properties_key
>;
export const CheckAppOwnershipRequest_properties_key = y.string().required();

export type CheckAppOwnershipRequest_properties_appid = y.InferType<
	typeof CheckAppOwnershipRequest_properties_appid
>;
export const CheckAppOwnershipRequest_properties_appid = y
	.number()
	.required()
	.min(1);

export type CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	y.InferType<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_ownsApp
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	y.boolean().required();

export type CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	y.InferType<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	y.number().required();

export type CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	y.InferType<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_sitelicense
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	y.boolean().required();

export type GetDeletedSteamIDsRequest_properties_key = y.InferType<
	typeof GetDeletedSteamIDsRequest_properties_key
>;
export const GetDeletedSteamIDsRequest_properties_key = y.string().required();

export type GetUserGroupListRequest_properties_key = y.InferType<
	typeof GetUserGroupListRequest_properties_key
>;
export const GetUserGroupListRequest_properties_key = y.string().required();

export type GetUserGroupListResponse_properties_response_properties_success =
	y.InferType<
		typeof GetUserGroupListResponse_properties_response_properties_success
	>;
export const GetUserGroupListResponse_properties_response_properties_success = y
	.boolean()
	.required();

export type ResolveVanityURLRequest = y.InferType<
	typeof ResolveVanityURLRequest
>;
export const ResolveVanityURLRequest = y.object({
	key: y.string().required(),
	vanityurl: y.string().required().min(1),
	url_type: y.number().required().min(1).max(3).optional(),
});

export type ResolveVanityURLResponse_properties_response_properties_success =
	y.InferType<
		typeof ResolveVanityURLResponse_properties_response_properties_success
	>;
export const ResolveVanityURLResponse_properties_response_properties_success = y
	.number()
	.required()
	.min(1);

export type ResolveVanityURLResponse_properties_response_properties_message =
	y.InferType<
		typeof ResolveVanityURLResponse_properties_response_properties_message
	>;
export const ResolveVanityURLResponse_properties_response_properties_message = y
	.string()
	.required();

export type GetFriendListRequest_properties_key = y.InferType<
	typeof GetFriendListRequest_properties_key
>;
export const GetFriendListRequest_properties_key = y.string().required();

export type GetFriendListRequest_properties_relationship = y.InferType<
	typeof GetFriendListRequest_properties_relationship
>;
export const GetFriendListRequest_properties_relationship = y
	.string()
	.required();

export type Friend_properties_relationship = y.InferType<
	typeof Friend_properties_relationship
>;
export const Friend_properties_relationship = y.string().required();

export type Friend_properties_friend_since = y.InferType<
	typeof Friend_properties_friend_since
>;
export const Friend_properties_friend_since = y.number().required();

export type GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	y.InferType<
		typeof GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship
	>;
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	y.string().required();

export type GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	y.InferType<
		typeof GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since
	>;
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	y.number().required();

export type GetPlayerBansRequest_properties_key = y.InferType<
	typeof GetPlayerBansRequest_properties_key
>;
export const GetPlayerBansRequest_properties_key = y.string().required();

export type PlayerBan_properties_CommunityBanned = y.InferType<
	typeof PlayerBan_properties_CommunityBanned
>;
export const PlayerBan_properties_CommunityBanned = y.boolean().required();

export type PlayerBan_properties_VACBanned = y.InferType<
	typeof PlayerBan_properties_VACBanned
>;
export const PlayerBan_properties_VACBanned = y.boolean().required();

export type PlayerBan_properties_NumberOfVACBans = y.InferType<
	typeof PlayerBan_properties_NumberOfVACBans
>;
export const PlayerBan_properties_NumberOfVACBans = y
	.number()
	.required()
	.min(0);

export type PlayerBan_properties_DaysSinceLastBan = y.InferType<
	typeof PlayerBan_properties_DaysSinceLastBan
>;
export const PlayerBan_properties_DaysSinceLastBan = y
	.number()
	.required()
	.min(0);

export type PlayerBan_properties_EconomyBan = y.InferType<
	typeof PlayerBan_properties_EconomyBan
>;
export const PlayerBan_properties_EconomyBan = y.string().required();

export type GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	y.InferType<
		typeof GetPlayerBansResponse_properties_players_items_properties_CommunityBanned
	>;
export const GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	y.boolean().required();

export type GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	y.InferType<
		typeof GetPlayerBansResponse_properties_players_items_properties_VACBanned
	>;
export const GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	y.boolean().required();

export type GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	y.InferType<
		typeof GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans
	>;
export const GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	y.number().required().min(0);

export type GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	y.InferType<
		typeof GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan
	>;
export const GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	y.number().required().min(0);

export type GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	y.InferType<
		typeof GetPlayerBansResponse_properties_players_items_properties_EconomyBan
	>;
export const GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	y.string().required();
