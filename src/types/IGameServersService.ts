/***
 * JSDoc type definitions for the Steam Web API's IGameServersService.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService
 */

// ---- Helper Interfaces ----

/*** Represents a game server account.
 * @description Contains the details of a persistent game server account.
 */
export interface GameServerAccount {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the game server account.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID the server account is associated with.
	 */
	appid: number;
	/**
	 * @description The login token for the game server.
	 */
	login_token: string;
	/**
	 * @description A memo associated with the server account, for developer use.
	 */
	memo: string;
	/**
	 * @description True if the account has been deleted.
	 */
	is_deleted: boolean;
	/**
	 * @description True if the account's login token has expired.
	 */
	is_expired: boolean;
}

/*** Represents public information about a game server account.
 * @description A subset of game server account details that are publicly accessible.
 */
export interface GameServerPublicInfo {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the game server account.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID the server account is associated with.
	 */
	appid: number;
}

/*** Represents the status of a login token.
 * @description Contains details about a game server login token, including its associated SteamID and status.
 */
export interface LoginTokenInfo {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the account that owns the token.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID the token is for.
	 */
	appid: number;
	/**
	 * @description The memo associated with the account.
	 */
	memo: string;
	/**
	 * @description True if the account is banned.
	 */
	is_banned: boolean;
	/**
	 * @description True if the token has expired.
	 */
	is_expired: boolean;
}

/*** Represents a mapping between a server's IP address and its SteamID.
 * @description Used in IP/SteamID lookup responses.
 */
export interface ServerIpToSteamIdMapping {
	/**
	 * @format ip
	 * @description The IP address of the server.
	 */
	server_ip: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the server.
	 */
	steamid: string;
}

// ---- API Endpoints ----

/*** Parameters for the IGameServersService/GetAccountList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#GetAccountList
 * @description Parameters for retrieving a list of game server accounts.
 */
export interface GetAccountListRequest {
	key: string;
}

/*** The response from the IGameServersService/GetAccountList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#GetAccountList
 * @description Response containing a list of all game server accounts for the publisher key.
 */
export interface GetAccountListResponse {
	response: {
		servers: GameServerAccount[];
	};
}

/*** Parameters for the IGameServersService/CreateAccount/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#CreateAccount
 * @description Parameters for creating a new game server account.
 */
export interface CreateAccountRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID to create the server for.
	 */
	appid: number;
	/**
	 * @minLength 1
	 * @description A memo to help identify the server.
	 */
	memo: string;
}

/*** The response from the IGameServersService/CreateAccount/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#CreateAccount
 * @description Response containing the details of the newly created account.
 */
export interface CreateAccountResponse {
	response: GameServerAccount;
}

/*** Parameters for the IGameServersService/SetMemo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#SetMemo
 * @description Parameters for setting the memo on a game server account.
 */
export interface SetMemoRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the game server account to modify.
	 */
	steamid: string;
	/**
	 * @minLength 1
	 * @description The new memo to set for the account.
	 */
	memo: string;
}

/*** The response from the IGameServersService/SetMemo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#SetMemo
 * @description An empty response on success.
 */
export interface SetMemoResponse {
	response: {};
}

/*** Parameters for the IGameServersService/ResetLoginToken/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#ResetLoginToken
 * @description Parameters for resetting the login token of a game server account.
 */
export interface ResetLoginTokenRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the game server account.
	 */
	steamid: string;
}

/*** The response from the IGameServersService/ResetLoginToken/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#ResetLoginToken
 * @description Response containing the new login token.
 */
export interface ResetLoginTokenResponse {
	response: {
		/**
		 * @description The new login token for the game server.
		 */
		login_token: string;
	};
}

/*** Parameters for the IGameServersService/DeleteAccount/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#DeleteAccount
 * @description Parameters for deleting a game server account.
 */
export interface DeleteAccountRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the game server account to delete.
	 */
	steamid: string;
}

/*** The response from the IGameServersService/DeleteAccount/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#DeleteAccount
 * @description An empty response on success.
 */
export interface DeleteAccountResponse {
	response: {};
}

/*** Parameters for the IGameServersService/GetAccountPublicInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#GetAccountPublicInfo
 * @description Parameters for getting public information about a game server account.
 */
export interface GetAccountPublicInfoRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the game server account.
	 */
	steamid: string;
}

/*** The response from the IGameServersService/GetAccountPublicInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#GetAccountPublicInfo
 * @description Response containing public information about the account.
 */
export interface GetAccountPublicInfoResponse {
	response: GameServerPublicInfo;
}

/*** Parameters for the IGameServersService/QueryLoginToken/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#QueryLoginToken
 * @description Parameters for querying the status of a login token.
 */
export interface QueryLoginTokenRequest {
	key: string;
	/**
	 * @description The login token to query.
	 */
	login_token: string;
}

/*** The response from the IGameServersService/QueryLoginToken/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#QueryLoginToken
 * @description Response containing the status of the queried login token.
 */
export interface QueryLoginTokenResponse {
	response: LoginTokenInfo;
}

/*** Parameters for the IGameServersService/GetServerSteamIDsByIP/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#GetServerSteamIDsByIP
 * @description Parameters for retrieving server SteamIDs by their IP addresses.
 */
export interface GetServerSteamIDsByIPRequest {
	key: string;
	/**
	 * @description A comma-separated string of server IP addresses.
	 */
	server_ips: string;
}

/*** The response from the IGameServersService/GetServerSteamIDsByIP/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#GetServerSteamIDsByIP
 * @description Response containing a list of servers matching the given IPs.
 */
export interface GetServerSteamIDsByIPResponse {
	response: {
		servers: ServerIpToSteamIdMapping[];
	};
}

/*** Parameters for the IGameServersService/GetServerIPsBySteamID/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#GetServerIPsBySteamID
 * @description Parameters for retrieving server IP addresses by their SteamIDs.
 */
export interface GetServerIPsBySteamIDRequest {
	key: string;
	/**
	 * @pattern "^[0-9,]+$"
	 * @description A comma-separated list of 64-bit server SteamIDs.
	 */
	server_steamids: string;
}

/*** The response from the IGameServersService/GetServerIPsBySteamID/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameServersService#GetServerIPsBySteamID
 * @description Response containing a list of servers matching the given SteamIDs.
 */
export interface GetServerIPsBySteamIDResponse {
	response: {
		servers: ServerIpToSteamIdMapping[];
	};
}
