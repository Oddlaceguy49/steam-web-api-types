// THIS FILE IS AUTO-GENERATED FOR EFFECT. DO NOT EDIT.

import { Schema as ET } from "@effect/schema/Schema";
import { Schema as ES } from "@effect/schema";

export type PlayerSummary_properties_communityvisibilitystate = ET.Type<
	typeof PlayerSummary_properties_communityvisibilitystate
>;
export const PlayerSummary_properties_communityvisibilitystate = ES.Number.pipe(
	ES.greaterThanOrEqualTo(0)
).pipe(ES.lessThanOrEqualTo(5));

export type PlayerSummary_properties_profilestate = ET.Type<
	typeof PlayerSummary_properties_profilestate
>;
export const PlayerSummary_properties_profilestate = ES.Number.pipe(
	ES.greaterThanOrEqualTo(0)
).pipe(ES.lessThanOrEqualTo(1));

export type PlayerSummary_properties_personaname = ET.Type<
	typeof PlayerSummary_properties_personaname
>;
export const PlayerSummary_properties_personaname = ES.String.pipe(
	ES.maxLength(32)
).pipe(ES.minLength(1));

export type PlayerSummary_properties_lastlogoff = ET.Type<
	typeof PlayerSummary_properties_lastlogoff
>;
export const PlayerSummary_properties_lastlogoff = ES.Number;

export type PlayerSummary_properties_profileurl = ET.Type<
	typeof PlayerSummary_properties_profileurl
>;
export const PlayerSummary_properties_profileurl = ES.String;

export type PlayerSummary_properties_avatar = ET.Type<
	typeof PlayerSummary_properties_avatar
>;
export const PlayerSummary_properties_avatar = ES.String;

export type PlayerSummary_properties_avatarmedium = ET.Type<
	typeof PlayerSummary_properties_avatarmedium
>;
export const PlayerSummary_properties_avatarmedium = ES.String;

export type PlayerSummary_properties_avatarfull = ET.Type<
	typeof PlayerSummary_properties_avatarfull
>;
export const PlayerSummary_properties_avatarfull = ES.String;

export type PlayerSummary_properties_personastate = ET.Type<
	typeof PlayerSummary_properties_personastate
>;
export const PlayerSummary_properties_personastate = ES.Number.pipe(
	ES.greaterThanOrEqualTo(0)
).pipe(ES.lessThanOrEqualTo(6));

export type PlayerSummary_properties_timecreated = ET.Type<
	typeof PlayerSummary_properties_timecreated
>;
export const PlayerSummary_properties_timecreated = ES.Number;

export type PlayerSummary_properties_realname = ET.Type<
	typeof PlayerSummary_properties_realname
>;
export const PlayerSummary_properties_realname = ES.String.pipe(
	ES.minLength(1)
);

export type PlayerSummary_properties_loccountrycode = ET.Type<
	typeof PlayerSummary_properties_loccountrycode
>;
export const PlayerSummary_properties_loccountrycode = ES.String.pipe(
	ES.maxLength(2)
).pipe(ES.minLength(2));

export type PlayerSummary_properties_locstatecode = ET.Type<
	typeof PlayerSummary_properties_locstatecode
>;
export const PlayerSummary_properties_locstatecode = ES.String.pipe(
	ES.maxLength(2)
).pipe(ES.minLength(2));

export type PlayerSummary_properties_loccityid = ET.Type<
	typeof PlayerSummary_properties_loccityid
>;
export const PlayerSummary_properties_loccityid = ES.Number;

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	ES.Number.pipe(ES.greaterThanOrEqualTo(0)).pipe(ES.lessThanOrEqualTo(5));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	ES.Number.pipe(ES.greaterThanOrEqualTo(0)).pipe(ES.lessThanOrEqualTo(1));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	ES.String.pipe(ES.maxLength(32)).pipe(ES.minLength(1));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	ES.Number;

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	ES.String;

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	ES.String;

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	ES.String;

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	ES.String;

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	ES.Number.pipe(ES.greaterThanOrEqualTo(0)).pipe(ES.lessThanOrEqualTo(6));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	ES.Number;

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	ES.String.pipe(ES.minLength(1));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	ES.String.pipe(ES.maxLength(2)).pipe(ES.minLength(2));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	ES.String.pipe(ES.maxLength(2)).pipe(ES.minLength(2));

export type GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	ET.Type<
		typeof GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid
	>;
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	ES.Number;

export type CheckAppOwnershipRequest_properties_key = ET.Type<
	typeof CheckAppOwnershipRequest_properties_key
>;
export const CheckAppOwnershipRequest_properties_key = ES.String;

export type CheckAppOwnershipRequest_properties_appid = ET.Type<
	typeof CheckAppOwnershipRequest_properties_appid
>;
export const CheckAppOwnershipRequest_properties_appid = ES.Number.pipe(
	ES.greaterThanOrEqualTo(1)
);

export type CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	ET.Type<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_ownsApp
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	ES.Boolean;

export type CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	ET.Type<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	ES.Number;

export type CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	ET.Type<
		typeof CheckAppOwnershipResponse_properties_appownership_properties_sitelicense
	>;
export const CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	ES.Boolean;

export type GetDeletedSteamIDsRequest_properties_key = ET.Type<
	typeof GetDeletedSteamIDsRequest_properties_key
>;
export const GetDeletedSteamIDsRequest_properties_key = ES.String;

export type GetUserGroupListRequest_properties_key = ET.Type<
	typeof GetUserGroupListRequest_properties_key
>;
export const GetUserGroupListRequest_properties_key = ES.String;

export type GetUserGroupListResponse_properties_response_properties_success =
	ET.Type<
		typeof GetUserGroupListResponse_properties_response_properties_success
	>;
export const GetUserGroupListResponse_properties_response_properties_success =
	ES.Boolean;

export type ResolveVanityURLRequest = ET.Type<typeof ResolveVanityURLRequest>;
export const ResolveVanityURLRequest = ES.Struct({
	key: ES.String,
	vanityurl: ES.String.pipe(ES.minLength(1)),
	url_type: ES.optional(
		ES.Number.pipe(ES.greaterThanOrEqualTo(1)).pipe(ES.lessThanOrEqualTo(3))
	),
});

export type ResolveVanityURLResponse_properties_response_properties_success =
	ET.Type<
		typeof ResolveVanityURLResponse_properties_response_properties_success
	>;
export const ResolveVanityURLResponse_properties_response_properties_success =
	ES.Number.pipe(ES.greaterThanOrEqualTo(1));

export type ResolveVanityURLResponse_properties_response_properties_message =
	ET.Type<
		typeof ResolveVanityURLResponse_properties_response_properties_message
	>;
export const ResolveVanityURLResponse_properties_response_properties_message =
	ES.String;

export type GetFriendListRequest_properties_key = ET.Type<
	typeof GetFriendListRequest_properties_key
>;
export const GetFriendListRequest_properties_key = ES.String;

export type GetFriendListRequest_properties_relationship = ET.Type<
	typeof GetFriendListRequest_properties_relationship
>;
export const GetFriendListRequest_properties_relationship = ES.String;

export type Friend_properties_relationship = ET.Type<
	typeof Friend_properties_relationship
>;
export const Friend_properties_relationship = ES.String;

export type Friend_properties_friend_since = ET.Type<
	typeof Friend_properties_friend_since
>;
export const Friend_properties_friend_since = ES.Number;

export type GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	ET.Type<
		typeof GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship
	>;
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	ES.String;

export type GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	ET.Type<
		typeof GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since
	>;
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	ES.Number;

export type GetPlayerBansRequest_properties_key = ET.Type<
	typeof GetPlayerBansRequest_properties_key
>;
export const GetPlayerBansRequest_properties_key = ES.String;

export type PlayerBan_properties_CommunityBanned = ET.Type<
	typeof PlayerBan_properties_CommunityBanned
>;
export const PlayerBan_properties_CommunityBanned = ES.Boolean;

export type PlayerBan_properties_VACBanned = ET.Type<
	typeof PlayerBan_properties_VACBanned
>;
export const PlayerBan_properties_VACBanned = ES.Boolean;

export type PlayerBan_properties_NumberOfVACBans = ET.Type<
	typeof PlayerBan_properties_NumberOfVACBans
>;
export const PlayerBan_properties_NumberOfVACBans = ES.Number.pipe(
	ES.greaterThanOrEqualTo(0)
);

export type PlayerBan_properties_DaysSinceLastBan = ET.Type<
	typeof PlayerBan_properties_DaysSinceLastBan
>;
export const PlayerBan_properties_DaysSinceLastBan = ES.Number.pipe(
	ES.greaterThanOrEqualTo(0)
);

export type PlayerBan_properties_EconomyBan = ET.Type<
	typeof PlayerBan_properties_EconomyBan
>;
export const PlayerBan_properties_EconomyBan = ES.String;

export type GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	ET.Type<
		typeof GetPlayerBansResponse_properties_players_items_properties_CommunityBanned
	>;
export const GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	ES.Boolean;

export type GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	ET.Type<
		typeof GetPlayerBansResponse_properties_players_items_properties_VACBanned
	>;
export const GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	ES.Boolean;

export type GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	ET.Type<
		typeof GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans
	>;
export const GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	ES.Number.pipe(ES.greaterThanOrEqualTo(0));

export type GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	ET.Type<
		typeof GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan
	>;
export const GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	ES.Number.pipe(ES.greaterThanOrEqualTo(0));

export type GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	ET.Type<
		typeof GetPlayerBansResponse_properties_players_items_properties_EconomyBan
	>;
export const GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	ES.String;
