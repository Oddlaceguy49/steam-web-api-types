// THIS FILE IS AUTO-GENERATED FOR ZOD. DO NOT EDIT.

import { z } from "zod";

export type PlayerSummary_properties_communityvisibilitystate = z.infer<
	typeof PlayerSummary_properties_communityvisibilitystate
>;
export const PlayerSummary_properties_communityvisibilitystate = z
	.number()
	.min(0)
	.max(5);

export type PlayerSummary_properties_profilestate = z.infer<
	typeof PlayerSummary_properties_profilestate
>;
export const PlayerSummary_properties_profilestate = z.number().min(0).max(1);

export type PlayerSummary_properties_personaname = z.infer<
	typeof PlayerSummary_properties_personaname
>;
export const PlayerSummary_properties_personaname = z.string().max(32).min(1);

export type PlayerSummary_properties_lastlogoff = z.infer<
	typeof PlayerSummary_properties_lastlogoff
>;
export const PlayerSummary_properties_lastlogoff = z.number();

export type PlayerSummary_properties_profileurl = z.infer<
	typeof PlayerSummary_properties_profileurl
>;
export const PlayerSummary_properties_profileurl = z.string();

export type PlayerSummary_properties_avatar = z.infer<
	typeof PlayerSummary_properties_avatar
>;
export const PlayerSummary_properties_avatar = z.string();

export type PlayerSummary_properties_avatarmedium = z.infer<
	typeof PlayerSummary_properties_avatarmedium
>;
export const PlayerSummary_properties_avatarmedium = z.string();

export type PlayerSummary_properties_avatarfull = z.infer<
	typeof PlayerSummary_properties_avatarfull
>;
export const PlayerSummary_properties_avatarfull = z.string();

export type PlayerSummary_properties_personastate = z.infer<
	typeof PlayerSummary_properties_personastate
>;
export const PlayerSummary_properties_personastate = z.number().min(0).max(6);

export type PlayerSummary_properties_timecreated = z.infer<
	typeof PlayerSummary_properties_timecreated
>;
export const PlayerSummary_properties_timecreated = z.number();

export type PlayerSummary_properties_realname = z.infer<
	typeof PlayerSummary_properties_realname
>;
export const PlayerSummary_properties_realname = z.string().min(1);

export type PlayerSummary_properties_loccountrycode = z.infer<
	typeof PlayerSummary_properties_loccountrycode
>;
export const PlayerSummary_properties_loccountrycode = z.string().max(2).min(2);

export type PlayerSummary_properties_locstatecode = z.infer<
	typeof PlayerSummary_properties_locstatecode
>;
export const PlayerSummary_properties_locstatecode = z.string().max(2).min(2);

export type PlayerSummary_properties_loccityid = z.infer<
	typeof PlayerSummary_properties_loccityid
>;
export const PlayerSummary_properties_loccityid = z.number();

export type CheckAppOwnershipRequest_properties_key = z.infer<
	typeof CheckAppOwnershipRequest_properties_key
>;
export const CheckAppOwnershipRequest_properties_key = z.string();

export type CheckAppOwnershipRequest_properties_appid = z.infer<
	typeof CheckAppOwnershipRequest_properties_appid
>;
export const CheckAppOwnershipRequest_properties_appid = z.number().min(1);

export type GetDeletedSteamIDsRequest_properties_key = z.infer<
	typeof GetDeletedSteamIDsRequest_properties_key
>;
export const GetDeletedSteamIDsRequest_properties_key = z.string();

export type GetUserGroupListRequest_properties_key = z.infer<
	typeof GetUserGroupListRequest_properties_key
>;
export const GetUserGroupListRequest_properties_key = z.string();

export type ResolveVanityURLRequest = z.infer<typeof ResolveVanityURLRequest>;
export const ResolveVanityURLRequest = z.object({
	key: z.string(),
	vanityurl: z.string().min(1),
	url_type: z.number().min(1).max(3).optional(),
});

export type GetFriendListRequest_properties_key = z.infer<
	typeof GetFriendListRequest_properties_key
>;
export const GetFriendListRequest_properties_key = z.string();

export type GetFriendListRequest_properties_relationship = z.infer<
	typeof GetFriendListRequest_properties_relationship
>;
export const GetFriendListRequest_properties_relationship = z.string();

export type Friend_properties_relationship = z.infer<
	typeof Friend_properties_relationship
>;
export const Friend_properties_relationship = z.string();

export type Friend_properties_friend_since = z.infer<
	typeof Friend_properties_friend_since
>;
export const Friend_properties_friend_since = z.number();

export type GetPlayerBansRequest_properties_key = z.infer<
	typeof GetPlayerBansRequest_properties_key
>;
export const GetPlayerBansRequest_properties_key = z.string();

export type PlayerBan_properties_CommunityBanned = z.infer<
	typeof PlayerBan_properties_CommunityBanned
>;
export const PlayerBan_properties_CommunityBanned = z.boolean();

export type PlayerBan_properties_VACBanned = z.infer<
	typeof PlayerBan_properties_VACBanned
>;
export const PlayerBan_properties_VACBanned = z.boolean();

export type PlayerBan_properties_NumberOfVACBans = z.infer<
	typeof PlayerBan_properties_NumberOfVACBans
>;
export const PlayerBan_properties_NumberOfVACBans = z.number().min(0);

export type PlayerBan_properties_DaysSinceLastBan = z.infer<
	typeof PlayerBan_properties_DaysSinceLastBan
>;
export const PlayerBan_properties_DaysSinceLastBan = z.number().min(0);

export type PlayerBan_properties_EconomyBan = z.infer<
	typeof PlayerBan_properties_EconomyBan
>;
export const PlayerBan_properties_EconomyBan = z.string();

export type GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	z.infer<
		typeof GetPlayerBansResponse_properties_players_items_properties_CommunityBanned
	>;
export const GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	z.boolean();

export type GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	z.infer<
		typeof GetPlayerBansResponse_properties_players_items_properties_VACBanned
	>;
export const GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	z.boolean();

export type GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	z.infer<
		typeof GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans
	>;
export const GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	z.number().min(0);

export type GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	z.infer<
		typeof GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan
	>;
export const GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	z.number().min(0);

export type GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	z.infer<
		typeof GetPlayerBansResponse_properties_players_items_properties_EconomyBan
	>;
export const GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	z.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	z.number().min(0).max(5);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	z.number().min(0).max(1);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	z.string().max(32).min(1);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	z.number();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	z.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	z.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	z.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	z.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	z.number().min(0).max(6);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	z.number();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	z.string().min(1);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	z.string().max(2).min(2);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	z.string().max(2).min(2);

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	z.infer<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	z.number();

export type CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	z.infer<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_ownsApp
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	z.boolean();

export type CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	z.infer<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	z.number();

export type CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	z.infer<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_sitelicense
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	z.boolean();

export type GetUserGroupListResponse_properties_response_properties_success =
	z.infer<
		typeof GetUserGroupListResponse_properties_response_properties_success
	>;
export const GetUserGroupListResponse_properties_response_properties_success =
	z.boolean();

export type ResolveVanityURLResponse_properties_response_properties_success =
	z.infer<
		typeof ResolveVanityURLResponse_properties_response_properties_success
	>;
export const ResolveVanityURLResponse_properties_response_properties_success = z
	.number()
	.min(1);

export type ResolveVanityURLResponse_properties_response_properties_message =
	z.infer<
		typeof ResolveVanityURLResponse_properties_response_properties_message
	>;
export const ResolveVanityURLResponse_properties_response_properties_message =
	z.string();

export type GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	z.infer<
		typeof GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship
	>;
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	z.string();

export type GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	z.infer<
		typeof GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since
	>;
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	z.number();
