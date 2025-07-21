/***
 * JSDoc type definitions for the Steam Web API's ISiteLicenseService.
 * @see https://partner.steamgames.com/doc/webapi/ISiteLicenseService
 */

// ---- Helper Interfaces ----

/*** Represents the information for a specific site license.
 * @description Details about a PC Cafe site license.
 */
export interface SiteLicenseInfo {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the site.
	 */
	siteid: string;
	/**
	 * @description The name of the site.
	 */
	sitename: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the site owner.
	 */
	site_owner_steamid: string;
}

// ---- API Endpoints ----

/*** Parameters for the ISiteLicenseService/GetSiteLicenseInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISiteLicenseService#GetSiteLicenseInfo
 * @description Parameters for retrieving information about a site license.
 */
export interface GetSiteLicenseInfoRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the site (site license SteamID).
	 */
	siteid: string;
	/**
	 * @description The site license key.
	 */
	sitelicensekey: string;
}

/*** The response from the ISiteLicenseService/GetSiteLicenseInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISiteLicenseService#GetSiteLicenseInfo
 * @description Response containing information about a site license.
 */
export interface GetSiteLicenseInfoResponse {
	response: {
		/**
		 * @description An object containing the site's details.
		 */
		siteinfo: SiteLicenseInfo;
	};
}

/*** Parameters for the ISiteLicenseService/RemoveSiteLicense/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISiteLicenseService#RemoveSiteLicense
 * @description Parameters for removing a site license.
 */
export interface RemoveSiteLicenseRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the site to remove.
	 */
	siteid: string;
	/**
	 * @description The site license key.
	 */
	sitelicensekey: string;
}

/*** The response from the ISiteLicenseService/RemoveSiteLicense/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISiteLicenseService#RemoveSiteLicense
 * @description An empty response on success.
 */
export interface RemoveSiteLicenseResponse {
	response: {};
}
