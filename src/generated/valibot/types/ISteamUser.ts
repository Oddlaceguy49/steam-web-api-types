// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

export type PlayerSummary_properties_communityvisibilitystate = v.InferOutput<
	typeof PlayerSummary_properties_communityvisibilitystate
>;
export const PlayerSummary_properties_communityvisibilitystate = v.pipe(
	v.number(),
	v.minValue(0),
	v.maxValue(5)
);

export type PlayerSummary_properties_profilestate = v.InferOutput<
	typeof PlayerSummary_properties_profilestate
>;
export const PlayerSummary_properties_profilestate = v.pipe(
	v.number(),
	v.minValue(0),
	v.maxValue(1)
);

export type PlayerSummary_properties_personaname = v.InferOutput<
	typeof PlayerSummary_properties_personaname
>;
export const PlayerSummary_properties_personaname = v.pipe(
	v.string(),
	v.maxLength(32),
	v.minLength(1)
);

export type PlayerSummary_properties_lastlogoff = v.InferOutput<
	typeof PlayerSummary_properties_lastlogoff
>;
export const PlayerSummary_properties_lastlogoff = v.number();

export type PlayerSummary_properties_profileurl = v.InferOutput<
	typeof PlayerSummary_properties_profileurl
>;
export const PlayerSummary_properties_profileurl = v.string();

export type PlayerSummary_properties_avatar = v.InferOutput<
	typeof PlayerSummary_properties_avatar
>;
export const PlayerSummary_properties_avatar = v.string();

export type PlayerSummary_properties_avatarmedium = v.InferOutput<
	typeof PlayerSummary_properties_avatarmedium
>;
export const PlayerSummary_properties_avatarmedium = v.string();

export type PlayerSummary_properties_avatarfull = v.InferOutput<
	typeof PlayerSummary_properties_avatarfull
>;
export const PlayerSummary_properties_avatarfull = v.string();

export type PlayerSummary_properties_personastate = v.InferOutput<
	typeof PlayerSummary_properties_personastate
>;
export const PlayerSummary_properties_personastate = v.pipe(
	v.number(),
	v.minValue(0),
	v.maxValue(6)
);

export type PlayerSummary_properties_timecreated = v.InferOutput<
	typeof PlayerSummary_properties_timecreated
>;
export const PlayerSummary_properties_timecreated = v.number();

export type PlayerSummary_properties_realname = v.InferOutput<
	typeof PlayerSummary_properties_realname
>;
export const PlayerSummary_properties_realname = v.pipe(
	v.string(),
	v.minLength(1)
);

export type PlayerSummary_properties_loccountrycode = v.InferOutput<
	typeof PlayerSummary_properties_loccountrycode
>;
export const PlayerSummary_properties_loccountrycode = v.pipe(
	v.string(),
	v.maxLength(2),
	v.minLength(2)
);

export type PlayerSummary_properties_locstatecode = v.InferOutput<
	typeof PlayerSummary_properties_locstatecode
>;
export const PlayerSummary_properties_locstatecode = v.pipe(
	v.string(),
	v.maxLength(2),
	v.minLength(2)
);

export type PlayerSummary_properties_loccityid = v.InferOutput<
	typeof PlayerSummary_properties_loccityid
>;
export const PlayerSummary_properties_loccityid = v.number();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	v.pipe(v.number(), v.minValue(0), v.maxValue(5));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	v.pipe(v.number(), v.minValue(0), v.maxValue(1));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	v.pipe(v.string(), v.maxLength(32), v.minLength(1));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	v.number();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	v.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	v.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	v.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	v.string();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	v.pipe(v.number(), v.minValue(0), v.maxValue(6));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	v.number();

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	v.pipe(v.string(), v.minLength(1));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	v.pipe(v.string(), v.maxLength(2), v.minLength(2));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	v.pipe(v.string(), v.maxLength(2), v.minLength(2));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	v.InferOutput<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	v.number();

export type CheckAppOwnershipRequest_properties_key = v.InferOutput<
	typeof CheckAppOwnershipRequest_properties_key
>;
export const CheckAppOwnershipRequest_properties_key = v.string();

export type CheckAppOwnershipRequest_properties_appid = v.InferOutput<
	typeof CheckAppOwnershipRequest_properties_appid
>;
export const CheckAppOwnershipRequest_properties_appid = v.pipe(
	v.number(),
	v.minValue(1)
);

export type CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	v.InferOutput<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_ownsApp
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	v.boolean();

export type CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	v.InferOutput<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	v.number();

export type CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	v.InferOutput<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_sitelicense
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	v.boolean();

export type GetDeletedSteamIDsRequest_properties_key = v.InferOutput<
	typeof GetDeletedSteamIDsRequest_properties_key
>;
export const GetDeletedSteamIDsRequest_properties_key = v.string();

export type GetUserGroupListRequest_properties_key = v.InferOutput<
	typeof GetUserGroupListRequest_properties_key
>;
export const GetUserGroupListRequest_properties_key = v.string();

export type GetUserGroupListResponse_properties_response_properties_success =
	v.InferOutput<
		typeof GetUserGroupListResponse_properties_response_properties_success
	>;
export const GetUserGroupListResponse_properties_response_properties_success =
	v.boolean();

export type ResolveVanityURLRequest = v.InferOutput<
	typeof ResolveVanityURLRequest
>;
export const ResolveVanityURLRequest = v.object({
	key: v.string(),
	vanityurl: v.pipe(v.string(), v.minLength(1)),
	url_type: v.optional(v.pipe(v.number(), v.minValue(1), v.maxValue(3))),
});

export type ResolveVanityURLResponse_properties_response_properties_success =
	v.InferOutput<
		typeof ResolveVanityURLResponse_properties_response_properties_success
	>;
export const ResolveVanityURLResponse_properties_response_properties_success =
	v.pipe(v.number(), v.minValue(1));

export type ResolveVanityURLResponse_properties_response_properties_message =
	v.InferOutput<
		typeof ResolveVanityURLResponse_properties_response_properties_message
	>;
export const ResolveVanityURLResponse_properties_response_properties_message =
	v.string();

export type GetFriendListRequest_properties_key = v.InferOutput<
	typeof GetFriendListRequest_properties_key
>;
export const GetFriendListRequest_properties_key = v.string();

export type GetFriendListRequest_properties_relationship = v.InferOutput<
	typeof GetFriendListRequest_properties_relationship
>;
export const GetFriendListRequest_properties_relationship = v.string();

export type Friend_properties_relationship = v.InferOutput<
	typeof Friend_properties_relationship
>;
export const Friend_properties_relationship = v.string();

export type Friend_properties_friend_since = v.InferOutput<
	typeof Friend_properties_friend_since
>;
export const Friend_properties_friend_since = v.number();

export type GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	v.InferOutput<
		typeof GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship
	>;
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	v.string();

export type GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	v.InferOutput<
		typeof GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since
	>;
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	v.number();

export type GetPlayerBansRequest_properties_key = v.InferOutput<
	typeof GetPlayerBansRequest_properties_key
>;
export const GetPlayerBansRequest_properties_key = v.string();

export type PlayerBan_properties_CommunityBanned = v.InferOutput<
	typeof PlayerBan_properties_CommunityBanned
>;
export const PlayerBan_properties_CommunityBanned = v.boolean();

export type PlayerBan_properties_VACBanned = v.InferOutput<
	typeof PlayerBan_properties_VACBanned
>;
export const PlayerBan_properties_VACBanned = v.boolean();

export type PlayerBan_properties_NumberOfVACBans = v.InferOutput<
	typeof PlayerBan_properties_NumberOfVACBans
>;
export const PlayerBan_properties_NumberOfVACBans = v.pipe(
	v.number(),
	v.minValue(0)
);

export type PlayerBan_properties_DaysSinceLastBan = v.InferOutput<
	typeof PlayerBan_properties_DaysSinceLastBan
>;
export const PlayerBan_properties_DaysSinceLastBan = v.pipe(
	v.number(),
	v.minValue(0)
);

export type PlayerBan_properties_EconomyBan = v.InferOutput<
	typeof PlayerBan_properties_EconomyBan
>;
export const PlayerBan_properties_EconomyBan = v.string();

export type GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	v.InferOutput<
		typeof GetPlayerBansResponse_properties_players_items_properties_CommunityBanned
	>;
export const GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	v.boolean();

export type GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	v.InferOutput<
		typeof GetPlayerBansResponse_properties_players_items_properties_VACBanned
	>;
export const GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	v.boolean();

export type GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	v.InferOutput<
		typeof GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans
	>;
export const GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	v.pipe(v.number(), v.minValue(0));

export type GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	v.InferOutput<
		typeof GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan
	>;
export const GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	v.pipe(v.number(), v.minValue(0));

export type GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	v.InferOutput<
		typeof GetPlayerBansResponse_properties_players_items_properties_EconomyBan
	>;
export const GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	v.string();
