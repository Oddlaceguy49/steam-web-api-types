/*** The shape of a player object from the ISteamUser/GetPlayerSummaries/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries
 */
export interface PlayerSummary {
  /** @pattern ^[0-9]{17}$ */
  steamid: string;
  /** @minimum 0 @maximum 5 */
  communityvisibilitystate: number;
  /** @minimum 0 @maximum 1 */
  profilestate?: number;
  /** @minLength 1 @maxLength 32 */
  personaname: string;
  /** @format unix-timestamp */
  lastlogoff: number;
  /** @format url */
  profileurl: string;
  /** @format url */
  avatar: string;
  /** @format url */
  avatarmedium: string;
  /** @format url */
  avatarfull: string;
  /** @minimum 0 @maximum 6 */
  personastate: number;
  /** @pattern ^[0-9]{17}$ */
  primaryclanid?: string;
  /** @format unix-timestamp */
  timecreated?: number;
  /** @minLength 1 */
  realname?: string;
  /** @minLength 2 @maxLength 2 */
  loccountrycode?: string;
  /** @minLength 2 @maxLength 2 */
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
  /** @pattern ^[0-9]{17}$ */
  steamid: string;
  /** @minimum 1 */
  appid: number;
}

/*** The response from the ISteamUser/CheckAppOwnership/v4 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#CheckAppOwnership
 */
export interface CheckAppOwnershipResponse {
  appownership: {
    ownsApp: boolean;
    /** @format unix-timestamp */
    timeAcquired: number;
    /** @pattern ^[0-9]{17}$ */
    ownerSteamID: string;
    sitelicense?: boolean;
  };
}

/*** Parameters for the ISteamUser/GetDeletedSteamIDs/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs
 */
export interface GetDeletedSteamIDsRequest {
  key: string;
  /** @pattern ^[0-9]+$ */
  rowversion: string; // uint64 is represented as string in TypeScript
}

/*** Represents a deleted Steam ID.
 */
export interface DeletedSteamID {
  /** @pattern ^[0-9]{17}$ */
  steamid: string;
}

/*** The response from the ISteamUser/GetDeletedSteamIDs/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetDeletedSteamIDs
 */
export interface GetDeletedSteamIDsResponse {
  response: {
    deletedids: DeletedSteamID[];
    /** @pattern ^[0-9]+$ */
    rowversion: string; // uint64 is represented as string in TypeScript
  };
}

/*** Parameters for the ISteamUser/GetUserGroupList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetUserGroupList
 */
export interface GetUserGroupListRequest {
  key: string;
  /** @pattern ^[0-9]{17}$ */
  steamid: string;
}

/*** Represents a user group.
 */
export interface UserGroup {
  /** @pattern ^[0-9]+$ */
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
  /** @minLength 1 */
  vanityurl: string;
  /** @minimum 1 @maximum 3 */
  url_type?: number;
}

/*** The response from the ISteamUser/ResolveVanityURL/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#ResolveVanityURL
 */
export interface ResolveVanityURLResponse {
  response: {
    /** @pattern ^[0-9]{17}$ */
    steamid?: string;
    /** @minimum 1 */
    success: number;
    message?: string;
  };
}

/*** Parameters for the ISteamUser/GetFriendList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetFriendList
 */
export interface GetFriendListRequest {
  key: string;
  /** @pattern ^[0-9]{17}$ */
  steamid: string;
  /** @pattern ^(all|friend)$ */
  relationship?: string;
}

/*** Represents a friend in the friend list.
 */
export interface Friend {
  /** @pattern ^[0-9]{17}$ */
  steamid: string;
  /** @pattern ^(friend)$ */
  relationship: string;
  /** @format unix-timestamp */
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
  /** @pattern ^[0-9,]+$ */
  steamids: string; // Comma-separated list of 64-bit SteamIDs
}

/*** Represents player ban information.
 */
export interface PlayerBan {
  /** @pattern ^[0-9]{17}$ */
  SteamId: string;
  CommunityBanned: boolean;
  VACBanned: boolean;
  /** @minimum 0 */
  NumberOfVACBans: number;
  /** @minimum 0 */
  DaysSinceLastBan: number;
  /** @pattern ^(none|probation|banned)$ */
  EconomyBan: string;
}

/*** The response from the ISteamUser/GetPlayerBans/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerBans
 */
export interface GetPlayerBansResponse {
  players: PlayerBan[];
}