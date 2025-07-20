// THIS FILE IS AUTO-GENERATED FOR TYPES. DO NOT EDIT.

/*** The shape of a player object from the ISteamUser/GetPlayerSummaries/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries
 * @description Represents a player's summary information.
 */
export interface PlayerSummary {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The player's 64-bit SteamID.
	 */
	steamid: string;
	/**
	 * @minimum 0
	 * @maximum 5
	 * @description Player's community visibility state (0 = Private, 1 = Friends Only, 2 = Friends of Friends, 3 = Users Only, 4 = Public, 5 = All).
	 */
	communityvisibilitystate: number;
	/**
	 * @minimum 0
	 * @maximum 1
	 * @description If the profile is not visible, this will be 0. If the profile is visible, this will be 1.
	 */
	profilestate?: number;
	/**
	 * @minLength 1
	 * @maxLength 32
	 * @description The player's persona name (display name).
	 */
	personaname: string;
	/**
	 * @format unix-timestamp
	 * @description The last time the player was logged off Steam.
	 */
	lastlogoff: number;
	/**
	 * @format url
	 * @description The URL to the player's Steam Community profile.
	 */
	profileurl: string;
	/**
	 * @format url
	 * @description The URL to the player's 32x32px avatar.
	 */
	avatar: string;
	/**
	 * @format url
	 * @description The URL to the player's 64x64px avatar.
	 */
	avatarmedium: string;
	/**
	 * @format url
	 * @description The URL to the player's 184x184px avatar.
	 */
	avatarfull: string;
	/**
	 * @minimum 0
	 * @maximum 6
	 * @description The player's current online status (0 = Offline, 1 = Online, 2 = Busy, 3 = Away, 4 = Snooze, 5 = Looking to Trade, 6 = Looking to Play).
	 */
	personastate: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit ID of the player's primary clan.
	 */
	primaryclanid?: string;
	/**
	 * @format unix-timestamp
	 * @description The time the player's Steam account was created.
	 */
	timecreated?: number;
	/**
	 * @minLength 1
	 * @description The player's real name.
	 */
	realname?: string;
	/**
	 * @minLength 2
	 * @maxLength 2
	 * @description The player's country code.
	 */
	loccountrycode?: string;
	/**
	 * @minLength 2
	 * @maxLength 2
	 * @description The player's state code.
	 */
	locstatecode?: string;
	/**
	 * @description The player's city ID.
	 */
	loccityid?: number;
}

export interface GetPlayerSummariesResponse_properties_response {
	players: PlayerSummary[];
}

/*** The full response from the ISteamUser/GetPlayerSummaries/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries
 * @description Response containing player summary information.
 */
export interface GetPlayerSummariesResponse {
	response: GetPlayerSummariesResponse_properties_response;
}

/*** Parameters for the ISteamUser/CheckAppOwnership/v4 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership
 * @description Parameters for checking app ownership.
 */
export interface CheckAppOwnershipRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
}

export interface CheckAppOwnershipResponse_properties_appownership {
	/** @description True if the user owns the app, false otherwise. */
	ownsApp: boolean;
	/**
	 * @format unix-timestamp
	 * @description The time the app was acquired by the user.
	 */
	timeAcquired: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the true owner (if family shared).
	 */
	ownerSteamID: string;
	/** @description True if the app is accessed via site license (PC Cafe program). */
	sitelicense?: boolean;
}

/*** The response from the ISteamUser/CheckAppOwnership/v4 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership
 * @description Response indicating app ownership.
 */
export interface CheckAppOwnershipResponse {
	appownership: CheckAppOwnershipResponse_properties_appownership;
}

/*** Parameters for the ISteamUser/GetDeletedSteamIDs/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs
 * @description Parameters for retrieving deleted SteamIDs.
 */
export interface GetDeletedSteamIDsRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description An unsigned 64-bit value for pagination.
	 */
	rowversion: string; // uint64 is represented as string in TypeScript
}

/*** Represents a deleted Steam ID.
 * @description Information about a deleted SteamID.
 */
export interface DeletedSteamID {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the deleted account.
	 */
	steamid: string;
}

export interface GetDeletedSteamIDsResponse_properties_response {
	deletedids: DeletedSteamID[];
	/**
	 * @pattern "^[0-9]+$"
	 * @description The rowversion for the next request.
	 */
	rowversion: string;
}

/*** The response from the ISteamUser/GetDeletedSteamIDs/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs
 * @description Response containing a list of deleted SteamIDs.
 */
export interface GetDeletedSteamIDsResponse {
	response: GetDeletedSteamIDsResponse_properties_response;
}

/*** Parameters for the ISteamUser/GetUserGroupList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList
 * @description Parameters for retrieving a user's group list.
 */
export interface GetUserGroupListRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
}

/*** Represents a user group.
 * @description Information about a Steam user group.
 */
export interface UserGroup {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the group.
	 */
	gid: string;
}

export interface GetUserGroupListResponse_properties_response {
	/** @description True if the request was successful. */
	success: boolean;
	groups: UserGroup[];
}

/*** The response from the ISteamUser/GetUserGroupList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList
 * @description Response containing a user's group list.
 */
export interface GetUserGroupListResponse {
	response: GetUserGroupListResponse_properties_response;
}

/*** Parameters for the ISteamUser/ResolveVanityURL/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL
 * @description Parameters for resolving a vanity URL to a SteamID.
 */
export interface ResolveVanityURLRequest {
	key: string;
	/**
	 * @minLength 1
	 * @description The vanity URL to resolve.
	 */
	vanityurl: string;
	/**
	 * @minimum 1
	 * @maximum 3
	 * @description The type of vanity URL (1 = individual, 2 = group, 3 = game group).
	 */
	url_type?: number;
}

export interface ResolveVanityURLResponse_properties_response {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID if resolved successfully.
	 */
	steamid?: string;
	/**
	 * @minimum 1
	 * @description The success status (1 = success, 42 = no match).
	 */
	success: number;
	/** @description A message describing the status. */
	message?: string;
}

/*** The response from the ISteamUser/ResolveVanityURL/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL
 * @description Response containing the resolved SteamID from a vanity URL.
 */
export interface ResolveVanityURLResponse {
	response: ResolveVanityURLResponse_properties_response;
}

/*** Parameters for the ISteamUser/GetFriendList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList
 * @description Parameters for retrieving a user's friend list.
 */
export interface GetFriendListRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @pattern "^(all|friend)$"
	 * @description Filter by relationship type (all or friend).
	 */
	relationship?: string;
}

/*** Represents a friend in the friend list.
 * @description Information about a friend.
 */
export interface Friend {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the friend.
	 */
	steamid: string;
	/**
	 * @pattern "^(friend)$"
	 * @description The relationship type (always 'friend').
	 */
	relationship: string;
	/**
	 * @format unix-timestamp
	 * @description The Unix timestamp of when the friendship was created.
	 */
	friend_since: number;
}

export interface GetFriendListResponse_properties_friendslist {
	friends: Friend[];
}

/*** The response from the ISteamUser/GetFriendList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList
 * @description Response containing a user's friend list.
 */
export interface GetFriendListResponse {
	friendslist: GetFriendListResponse_properties_friendslist;
}

/*** Parameters for the ISteamUser/GetPlayerBans/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans
 * @description Parameters for retrieving player ban information.
 */
export interface GetPlayerBansRequest {
	key: string;
	/**
	 * @pattern "^[0-9,]+$"
	 * @description Comma-separated list of 64-bit SteamIDs.
	 */
	steamids: string; // Comma-separated list of 64-bit SteamIDs
}

/*** Represents player ban information.
 * @description Details about a player's ban status.
 */
export interface PlayerBan {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The player's 64-bit SteamID.
	 */
	SteamId: string;
	/**
	 * @description True if the player is banned from the Steam Community.
	 */
	CommunityBanned: boolean;
	/**
	 * @description True if the player has VAC bans on record.
	 */
	VACBanned: boolean;
	/**
	 * @minimum 0
	 * @description The number of VAC bans the player has.
	 */
	NumberOfVACBans: number;
	/**
	 * @minimum 0
	 * @description The number of days since the player's last ban.
	 */
	DaysSinceLastBan: number;
	/**
	 * @pattern "^(none|probation|banned)$"
	 * @description The player's economy ban status.
	 */
	EconomyBan: string;
}

/*** The response from the ISteamUser/GetPlayerBans/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans
 * @description Response containing player ban information.
 */
export interface GetPlayerBansResponse {
	players: PlayerBan[];
}
