/***
 * JSDoc type definitions for the Steam Web API's ISteamCommunity.
 * @see https://partner.steamgames.com/doc/webapi/ISteamCommunity
 */

// ---- Helper Interfaces for Rich Presence ----

/*** Represents a localized rich presence string.
 * @description A key-value pair for a rich presence token and its localized text.
 */
export interface RichPresenceToken {
	/**
	 * @description The name of the rich presence token (e.g., "#Status_Playing").
	 */
	name: string;
	/**
	 * @description The localized text for the token.
	 */
	value: string;
}

/*** Represents a list of rich presence tokens for a specific language.
 * @description A container for all rich presence tokens for a given language.
 */
export interface TokenList {
	/**
	 * @description The language of this token list (e.g., "english").
	 */
	language: string;
	/**
	 * @description An array of rich presence tokens.
	 */
	tokens: RichPresenceToken[];
}

// ---- API Endpoints ----

/*** Parameters for the ISteamCommunity/ReportAbuse/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamCommunity#ReportAbuse
 * @description Parameters for reporting abusive user-generated content.
 */
export interface ReportAbuseRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user filing the report.
	 */
	steamid_actor: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who created the content.
	 */
	steamid_target: string;
	/**
	 * @minimum 1
	 * @description The AppID the content is associated with.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The type of abuse being reported (e.g., 1: Offensive, 2: Harassment).
	 */
	abuse_type: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the content being reported.
	 */
	content_id: string;
	/**
	 * @description An optional detailed description of the abuse.
	 */
	description?: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The GID of the content, if applicable (e.g., for UGC).
	 */
	gid?: string;
}

/*** The response from the ISteamCommunity/ReportAbuse/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamCommunity#ReportAbuse
 * @description Response containing the result of the abuse report.
 */
export interface ReportAbuseResponse {
	response: {
		/**
		 * @description True if the report was successfully submitted.
		 */
		success: boolean;
		/**
		 * @pattern "^[0-9]+$"
		 * @description A unique ID for the created report.
		 */
		report_id: string;
	};
}

/*** Parameters for the ISteamCommunity/GetAppRichPresenceLocalization/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamCommunity#GetAppRichPresenceLocalization
 * @description Parameters for retrieving localized rich presence strings.
 */
export interface GetAppRichPresenceLocalizationRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID to get rich presence data for.
	 */
	appid: number;
	/**
	 * @description The language for the localization (e.g., "english", "french").
	 */
	language?: string;
}

/*** The response from the ISteamCommunity/GetAppRichPresenceLocalization/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamCommunity#GetAppRichPresenceLocalization
 * @description Response containing the localized rich presence strings for an app.
 */
export interface GetAppRichPresenceLocalizationResponse {
	response: {
		/**
		 * @description An array of token lists, one for each requested language.
		 */
		token_lists: TokenList[];
	};
}
