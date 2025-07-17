/*** The shape of a player object from the ISteamUser/GetPlayerSummaries/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries
 */
export interface PlayerSummary {
	steamid: string;
	communityvisibilitystate: number;
	profilestate?: number;
	personaname: string;
	lastlogoff: number;
	profileurl: string;
	avatar: string;
	avatarmedium: string;
	avatarfull: string;
	personastate: number;
	primaryclanid?: string;
	timecreated?: number;
	realname?: string;
	loccountrycode?: string;
	locstatecode?: string;
	loccityid?: number;
}

/*** The full response from the ISteamUser/GetPlayerSummaries/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries
 */
export interface GetPlayerSummariesResponse {
	response: {
		players: PlayerSummary[];
	};
}

/*** Parameters for the ISteamUser/CheckAppOwnership/v4 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership
 */
export interface CheckAppOwnershipRequest {
	key: string;
	steamid: string;
	appid: number;
}

/*** The response from the ISteamUser/CheckAppOwnership/v4 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership
 */
export interface CheckAppOwnershipResponse {
	appownership: {
		ownsApp: boolean;
		timeAcquired: number;
		ownerSteamID: string;
		sitelicense?: boolean;
	};
}

/*** Parameters for the ISteamUser/GetDeletedSteamIDs/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs
 */
export interface GetDeletedSteamIDsRequest {
	key: string;
	rowversion: string; // uint64 is represented as string in TypeScript
}

/*** Represents a deleted Steam ID.
 */
export interface DeletedSteamID {
	steamid: string;
	// Add other fields if they are returned by the API
}

/*** The response from the ISteamUser/GetDeletedSteamIDs/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs
 */
export interface GetDeletedSteamIDsResponse {
	response: {
		deletedids: DeletedSteamID[];
		rowversion: string; // uint64 is represented as string in TypeScript
		// Add other fields if they are returned by the API
	};
}

/*** Parameters for the ISteamUser/GetUserGroupList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList
 */
export interface GetUserGroupListRequest {
	key: string;
	steamid: string;
}

/*** Represents a user group.
 */
export interface UserGroup {
	gid: string;
}

/*** The response from the ISteamUser/GetUserGroupList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList
 */
export interface GetUserGroupListResponse {
	response: {
		success: boolean;
		groups: UserGroup[];
	};
}

/*** Parameters for the ISteamUser/ResolveVanityURL/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL
 */
export interface ResolveVanityURLRequest {
	key: string;
	vanityurl: string;
	url_type?: number;
}

/*** The response from the ISteamUser/ResolveVanityURL/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL
 */
export interface ResolveVanityURLResponse {
	response: {
		steamid?: string;
		success: number;
		message?: string;
	};
}

/*** Parameters for the ISteamUser/GetFriendList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList
 */
export interface GetFriendListRequest {
	key: string;
	steamid: string;
	relationship?: string;
}

/*** Represents a friend in the friend list.
 */
export interface Friend {
	steamid: string;
	relationship: string;
	friend_since: number;
}

/*** The response from the ISteamUser/GetFriendList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList
 */
export interface GetFriendListResponse {
	friendslist: {
		friends: Friend[];
	};
}

/*** Parameters for the ISteamUser/GetPlayerBans/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans
 */
export interface GetPlayerBansRequest {
	key: string;
	steamids: string; // Comma-separated list of 64-bit SteamIDs
}

/*** Represents player ban information.
 */
export interface PlayerBan {
	SteamId: string;
	CommunityBanned: boolean;
	VACBanned: boolean;
	NumberOfVACBans: number;
	DaysSinceLastBan: number;
	EconomyBan: string;
}

/*** The response from the ISteamUser/GetPlayerBans/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans
 */
export interface GetPlayerBansResponse {
	players: PlayerBan[];
}
