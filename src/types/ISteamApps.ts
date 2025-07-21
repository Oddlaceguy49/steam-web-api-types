/***
 * JSDoc type definitions for the Steam Web API's ISteamApps.
 * @see https://partner.steamgames.com/doc/webapi/ISteamApps
 */

// ---- Helper Interfaces ----

/*** Represents an application in the master list.
 * @description A lightweight summary of a Steam application.
 */
export interface App {
	/**
	 * @minimum 1
	 * @description The unique AppID of the application.
	 */
	appid: number;
	/**
	 * @description The official name of the application.
	 */
	name: string;
}

/*** Represents a game server returned by GetServersAtAddress.
 * @description Detailed information about a specific game server instance.
 */
export interface ServerInfo {
	/**
	 * @description The IP address and query port of the server.
	 */
	addr: string;
	/**
	 * @minimum 1
	 * @description The game server index.
	 */
	gmsindex: number;
	/**
	 * @minimum 1
	 * @description The AppID of the game the server is running.
	 */
	appid: number;
	/**
	 * @description The directory of the game.
	 */
	gamedir: string;
	/**
	 * @minimum -1
	 * @description The region code where the server is located.
	 */
	region: number;
	/**
	 * @description True if the server is VAC-secured.
	 */
	secure: boolean;
	/**
	 * @description True if the server is a LAN server.
	 */
	lan: boolean;
	/**
	 * @minimum 1
	 * @description The game port of the server.
	 */
	gameport: number;
	/**
	 * @minimum 1
	 * @description The spectator port of the server, if any.
	 */
	specport: number;
}

// ---- API Endpoints ----

/*** The response from the ISteamApps/GetAppList/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamApps#GetAppList
 * @description Response containing a list of all public Steam applications. This endpoint requires no parameters.
 */
export interface GetAppListResponse {
	applist: {
		apps: App[];
	};
}

/*** Parameters for the ISteamApps/GetServersAtAddress/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamApps#GetServersAtAddress
 * @description Parameters for getting game server information by IP address.
 */
export interface GetServersAtAddressRequest {
	/**
	 * @format ip
	 * @description The IP address to query. Can also be a hostname.
	 */
	addr: string;
}

/*** The response from the ISteamApps/GetServersAtAddress/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamApps#GetServersAtAddress
 * @description Response containing a list of game servers at a given address.
 */
export interface GetServersAtAddressResponse {
	response: {
		/**
		 * @description True if the request was successful and servers were found.
		 */
		success: boolean;
		/**
		 * @description An array of server information objects. May be omitted on failure.
		 */
		servers?: ServerInfo[];
		/**
		 * @description An error message, if `success` is false.
		 */
		message?: string;
	};
}

/*** Parameters for the ISteamApps/UpToDateCheck/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamApps#UpToDateCheck
 * @description Parameters for checking if a game version is the latest.
 */
export interface UpToDateCheckRequest {
	/**
	 * @minimum 1
	 * @description The AppID of the game to check.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The version number to check.
	 */
	version: number;
}

/*** The response from the ISteamApps/UpToDateCheck/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamApps#UpToDateCheck
 * @description Response indicating if a game version is current.
 */
export interface UpToDateCheckResponse {
	response: {
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
		/**
		 * @description True if the provided version is the latest.
		 */
		up_to_date: boolean;
		/**
		 * @description True if the provided version is a public, listable version.
		 */
		version_is_listable: boolean;
		/**
		 * @minimum 1
		 * @description The latest version, if `up_to_date` is false.
		 */
		required_version?: number;
		/**
		 * @description A message describing the status.
		 */
		message?: string;
	};
}
