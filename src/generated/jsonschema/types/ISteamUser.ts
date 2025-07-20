// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export const PlayerSummary_properties_communityvisibilitystate = {
	minimum: 0,
	maximum: 5,
	description:
		"Player's community visibility state (0 = Private, 1 = Friends Only, 2 = Friends of Friends, 3 = Users Only, 4 = Public, 5 = All).",
	type: "number",
	$id: "PlayerSummary_properties_communityvisibilitystate",
};
export const PlayerSummary_properties_profilestate = {
	minimum: 0,
	maximum: 1,
	description:
		"If the profile is not visible, this will be 0. If the profile is visible, this will be 1.",
	type: "number",
	$id: "PlayerSummary_properties_profilestate",
};
export const PlayerSummary_properties_personaname = {
	minLength: 1,
	maxLength: 32,
	description: "The player's persona name (display name).",
	type: "string",
	$id: "PlayerSummary_properties_personaname",
};
export const PlayerSummary_properties_lastlogoff = {
	format: "unix",
	description: "The last time the player was logged off Steam.",
	type: "number",
	$id: "PlayerSummary_properties_lastlogoff",
};
export const PlayerSummary_properties_profileurl = {
	format: "url",
	description: "The URL to the player's Steam Community profile.",
	type: "string",
	$id: "PlayerSummary_properties_profileurl",
};
export const PlayerSummary_properties_avatar = {
	format: "url",
	description: "The URL to the player's 32x32px avatar.",
	type: "string",
	$id: "PlayerSummary_properties_avatar",
};
export const PlayerSummary_properties_avatarmedium = {
	format: "url",
	description: "The URL to the player's 64x64px avatar.",
	type: "string",
	$id: "PlayerSummary_properties_avatarmedium",
};
export const PlayerSummary_properties_avatarfull = {
	format: "url",
	description: "The URL to the player's 184x184px avatar.",
	type: "string",
	$id: "PlayerSummary_properties_avatarfull",
};
export const PlayerSummary_properties_personastate = {
	minimum: 0,
	maximum: 6,
	description:
		"The player's current online status (0 = Offline, 1 = Online, 2 = Busy, 3 = Away, 4 = Snooze, 5 = Looking to Trade, 6 = Looking to Play).",
	type: "number",
	$id: "PlayerSummary_properties_personastate",
};
export const PlayerSummary_properties_timecreated = {
	format: "unix",
	description: "The time the player's Steam account was created.",
	type: "number",
	$id: "PlayerSummary_properties_timecreated",
};
export const PlayerSummary_properties_realname = {
	minLength: 1,
	description: "The player's real name.",
	type: "string",
	$id: "PlayerSummary_properties_realname",
};
export const PlayerSummary_properties_loccountrycode = {
	minLength: 2,
	maxLength: 2,
	description: "The player's country code.",
	type: "string",
	$id: "PlayerSummary_properties_loccountrycode",
};
export const PlayerSummary_properties_locstatecode = {
	minLength: 2,
	maxLength: 2,
	description: "The player's state code.",
	type: "string",
	$id: "PlayerSummary_properties_locstatecode",
};
export const PlayerSummary_properties_loccityid = {
	description: "The player's city ID.",
	type: "number",
	$id: "PlayerSummary_properties_loccityid",
};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate =
	{
		minimum: 0,
		maximum: 5,
		description:
			"Player's community visibility state (0 = Private, 1 = Friends Only, 2 = Friends of Friends, 3 = Users Only, 4 = Public, 5 = All).",
		type: "number",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_communityvisibilitystate",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate =
	{
		minimum: 0,
		maximum: 1,
		description:
			"If the profile is not visible, this will be 0. If the profile is visible, this will be 1.",
		type: "number",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profilestate",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname =
	{
		minLength: 1,
		maxLength: 32,
		description: "The player's persona name (display name).",
		type: "string",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personaname",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff =
	{
		format: "unix",
		description: "The last time the player was logged off Steam.",
		type: "number",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_lastlogoff",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl =
	{
		format: "url",
		description: "The URL to the player's Steam Community profile.",
		type: "string",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_profileurl",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar =
	{
		format: "url",
		description: "The URL to the player's 32x32px avatar.",
		type: "string",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatar",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium =
	{
		format: "url",
		description: "The URL to the player's 64x64px avatar.",
		type: "string",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarmedium",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull =
	{
		format: "url",
		description: "The URL to the player's 184x184px avatar.",
		type: "string",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_avatarfull",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate =
	{
		minimum: 0,
		maximum: 6,
		description:
			"The player's current online status (0 = Offline, 1 = Online, 2 = Busy, 3 = Away, 4 = Snooze, 5 = Looking to Trade, 6 = Looking to Play).",
		type: "number",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_personastate",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated =
	{
		format: "unix",
		description: "The time the player's Steam account was created.",
		type: "number",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_timecreated",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname =
	{
		minLength: 1,
		description: "The player's real name.",
		type: "string",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_realname",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode =
	{
		minLength: 2,
		maxLength: 2,
		description: "The player's country code.",
		type: "string",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccountrycode",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode =
	{
		minLength: 2,
		maxLength: 2,
		description: "The player's state code.",
		type: "string",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_locstatecode",
	};
export const GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid =
	{
		description: "The player's city ID.",
		type: "number",
		$id: "GetPlayerSummariesResponse_properties_response_properties_players_items_properties_loccityid",
	};
export const CheckAppOwnershipRequest_properties_key = {
	type: "string",
	$id: "CheckAppOwnershipRequest_properties_key",
};
export const CheckAppOwnershipRequest_properties_appid = {
	minimum: 1,
	description: "The AppID of the game.",
	type: "number",
	$id: "CheckAppOwnershipRequest_properties_appid",
};
export const CheckAppOwnershipResponse_properties_appownership_properties_ownsApp =
	{
		description: "True if the user owns the app, false otherwise.",
		type: "boolean",
		$id: "CheckAppOwnershipResponse_properties_appownership_properties_ownsApp",
	};
export const CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired =
	{
		format: "unix",
		description: "The time the app was acquired by the user.",
		type: "number",
		$id: "CheckAppOwnershipResponse_properties_appownership_properties_timeAcquired",
	};
export const CheckAppOwnershipResponse_properties_appownership_properties_sitelicense =
	{
		description:
			"True if the app is accessed via site license (PC Cafe program).",
		type: "boolean",
		$id: "CheckAppOwnershipResponse_properties_appownership_properties_sitelicense",
	};
export const GetDeletedSteamIDsRequest_properties_key = {
	type: "string",
	$id: "GetDeletedSteamIDsRequest_properties_key",
};
export const GetUserGroupListRequest_properties_key = {
	type: "string",
	$id: "GetUserGroupListRequest_properties_key",
};
export const GetUserGroupListResponse_properties_response_properties_success = {
	description: "True if the request was successful.",
	type: "boolean",
	$id: "GetUserGroupListResponse_properties_response_properties_success",
};
export const ResolveVanityURLRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL",
	description: "Parameters for resolving a vanity URL to a SteamID.",
	$id: "ResolveVanityURLRequest",
	type: "object",
	properties: {
		key: {
			type: "string",
		},
		vanityurl: {
			minLength: 1,
			description: "The vanity URL to resolve.",
			type: "string",
		},
		url_type: {
			minimum: 1,
			maximum: 3,
			description:
				"The type of vanity URL (1 = individual, 2 = group, 3 = game group).",
			type: "number",
		},
	},
	required: ["key", "vanityurl"],
};
export const ResolveVanityURLResponse_properties_response_properties_success = {
	minimum: 1,
	description: "The success status (1 = success, 42 = no match).",
	type: "number",
	$id: "ResolveVanityURLResponse_properties_response_properties_success",
};
export const ResolveVanityURLResponse_properties_response_properties_message = {
	description: "A message describing the status.",
	type: "string",
	$id: "ResolveVanityURLResponse_properties_response_properties_message",
};
export const GetFriendListRequest_properties_key = {
	type: "string",
	$id: "GetFriendListRequest_properties_key",
};
export const GetFriendListRequest_properties_relationship = {
	pattern: "^(all|friend)$",
	description: "Filter by relationship type (all or friend).",
	type: "string",
	$id: "GetFriendListRequest_properties_relationship",
};
export const Friend_properties_relationship = {
	pattern: "^(friend)$",
	description: "The relationship type (always 'friend').",
	type: "string",
	$id: "Friend_properties_relationship",
};
export const Friend_properties_friend_since = {
	format: "unix",
	description: "The Unix timestamp of when the friendship was created.",
	type: "number",
	$id: "Friend_properties_friend_since",
};
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship =
	{
		pattern: "^(friend)$",
		description: "The relationship type (always 'friend').",
		type: "string",
		$id: "GetFriendListResponse_properties_friendslist_properties_friends_items_properties_relationship",
	};
export const GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since =
	{
		format: "unix",
		description: "The Unix timestamp of when the friendship was created.",
		type: "number",
		$id: "GetFriendListResponse_properties_friendslist_properties_friends_items_properties_friend_since",
	};
export const GetPlayerBansRequest_properties_key = {
	type: "string",
	$id: "GetPlayerBansRequest_properties_key",
};
export const PlayerBan_properties_CommunityBanned = {
	description: "True if the player is banned from the Steam Community.",
	type: "boolean",
	$id: "PlayerBan_properties_CommunityBanned",
};
export const PlayerBan_properties_VACBanned = {
	description: "True if the player has VAC bans on record.",
	type: "boolean",
	$id: "PlayerBan_properties_VACBanned",
};
export const PlayerBan_properties_NumberOfVACBans = {
	minimum: 0,
	description: "The number of VAC bans the player has.",
	type: "number",
	$id: "PlayerBan_properties_NumberOfVACBans",
};
export const PlayerBan_properties_DaysSinceLastBan = {
	minimum: 0,
	description: "The number of days since the player's last ban.",
	type: "number",
	$id: "PlayerBan_properties_DaysSinceLastBan",
};
export const PlayerBan_properties_EconomyBan = {
	pattern: "^(none|probation|banned)$",
	description: "The player's economy ban status.",
	type: "string",
	$id: "PlayerBan_properties_EconomyBan",
};
export const GetPlayerBansResponse_properties_players_items_properties_CommunityBanned =
	{
		description: "True if the player is banned from the Steam Community.",
		type: "boolean",
		$id: "GetPlayerBansResponse_properties_players_items_properties_CommunityBanned",
	};
export const GetPlayerBansResponse_properties_players_items_properties_VACBanned =
	{
		description: "True if the player has VAC bans on record.",
		type: "boolean",
		$id: "GetPlayerBansResponse_properties_players_items_properties_VACBanned",
	};
export const GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans =
	{
		minimum: 0,
		description: "The number of VAC bans the player has.",
		type: "number",
		$id: "GetPlayerBansResponse_properties_players_items_properties_NumberOfVACBans",
	};
export const GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan =
	{
		minimum: 0,
		description: "The number of days since the player's last ban.",
		type: "number",
		$id: "GetPlayerBansResponse_properties_players_items_properties_DaysSinceLastBan",
	};
export const GetPlayerBansResponse_properties_players_items_properties_EconomyBan =
	{
		pattern: "^(none|probation|banned)$",
		description: "The player's economy ban status.",
		type: "string",
		$id: "GetPlayerBansResponse_properties_players_items_properties_EconomyBan",
	};
