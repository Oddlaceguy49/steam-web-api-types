/***
 * JSDoc type definitions for the Steam Web API's ISteamWebAPIUtil.
 * @see https://partner.steamgames.com/doc/webapi/ISteamWebAPIUtil
 */

// ---- Helper Interfaces for GetSupportedAPIList ----

/*** Represents a single parameter for an API method.
 * @description Defines the name, type, and other properties of a method parameter.
 */
export interface APIParameter {
	/**
	 * @description The name of the parameter.
	 */
	name: string;
	/**
	 * @description The data type of the parameter (e.g., "string", "uint64", "bool").
	 */
	type: string;
	/**
	 * @description True if the parameter is optional for the call.
	 */
	optional: boolean;
	/**
	 * @description A description of what the parameter is for.
	 */
	description: string;
}

/*** Represents a single method within an API interface.
 * @description Defines the name, version, and parameters of a specific API method.
 */
export interface APIMethod {
	/**
	 * @description The name of the method.
	 */
	name: string;
	/**
	 * @minimum 1
	 * @description The version of the method.
	 */
	version: number;
	/**
	 * @pattern "^(GET|POST)$"
	 * @description The HTTP method used to call this API method.
	 */
	httpmethod: string;
	/**
	 * @description An array of parameters that this method accepts.
	 */
	parameters: APIParameter[];
}

/*** Represents a single API interface and its available methods.
 * @description A container for an API interface and all of its supported methods.
 */
export interface APIInterface {
	/**
	 * @description The name of the interface (e.g., "ISteamUserStats").
	 */
	name: string;
	/**
	 * @description An array of methods available in this interface.
	 */
	methods: APIMethod[];
}

// ---- API Endpoints ----

/*** The response from the ISteamWebAPIUtil/GetServerInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamWebAPIUtil#GetServerInfo
 * @description Response containing the Steam server's time. This endpoint takes no parameters.
 */
export interface GetServerInfoResponse {
	response: {
		/**
		 * @format unix-timestamp
		 * @description The current Steam server time as a Unix timestamp.
		 */
		servertime: number;
		/**
		 * @description A string representation of the Steam server time.
		 * @example "Thu Jan 01 00:00:00 1970"
		 */
		servertimestring: string;
	};
}

/*** Parameters for the ISteamWebAPIUtil/GetSupportedAPIList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamWebAPIUtil#GetSupportedAPIList
 * @description Parameters for retrieving the list of all supported API commands.
 */
export interface GetSupportedAPIListRequest {
	/**
	 * @description Your Web API key. Optional, but including it may show private methods accessible to your key.
	 */
	key?: string;
}

/*** The response from the ISteamWebAPIUtil/GetSupportedAPIList/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamWebAPIUtil#GetSupportedAPIList
 * @description Response containing a comprehensive list of all interfaces, methods, and parameters in the Web API.
 */
export interface GetSupportedAPIListResponse {
	apilist: {
		/**
		 * @description An array of all available API interfaces.
		 */
		interfaces: APIInterface[];
	};
}
