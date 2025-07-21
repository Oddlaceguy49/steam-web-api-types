/***
 * JSDoc type definitions for the Steam Web API's IEconMarketService.
 * @see https://partner.steamgames.com/doc/webapi/IEconMarketService
 */

/*** Parameters for the IEconMarketService/GetMarketEligibility/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconMarketService#GetMarketEligibility
 * @description Parameters for checking a user's market eligibility.
 */
export interface GetMarketEligibilityRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user to check.
	 */
	steamid: string;
}

/*** The response from the IEconMarketService/GetMarketEligibility/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconMarketService#GetMarketEligibility
 * @description Response containing a user's market eligibility status.
 */
export interface GetMarketEligibilityResponse {
	response: {
		/**
		 * @description Whether the user is allowed to use the market.
		 */
		allowed: boolean;
		/**
		 * @minimum 1
		 * @description An enumeration representing the reason for ineligibility.
		 */
		reason?: number;
		/**
		 * @minLength 1
		 * @description A localized string explaining the reason for ineligibility.
		 */
		reason_text?: string;
		/**
		 * @format unix-timestamp
		 * @description The Unix timestamp when the user will be allowed to use the market.
		 */
		allowed_at_time?: number;
		/**
		 * @minimum 0
		 * @description The number of days Steam Guard must be active.
		 */
		steamguard_required_days: number;
		/**
		 * @minimum 0
		 * @description The number of days after a password reset during which the user is ineligible.
		 */
		sales_this_year: number;
		/**
		 * @minimum 0
		 * @description The cooldown period in days for using a new device.
		 */
		new_device_cooldown_days: number;
	};
}

/*** Parameters for the IEconMarketService/CancelAppListingsForUser/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconMarketService#CancelAppListingsForUser
 * @description Parameters for canceling all of a user's listings for a specific app.
 */
export interface CancelAppListingsForUserRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the listings to cancel.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user whose listings will be canceled.
	 */
	steamid: string;
}

/*** The response from the IEconMarketService/CancelAppListingsForUser/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconMarketService#CancelAppListingsForUser
 * @description Response indicating the number of listings canceled.
 */
export interface CancelAppListingsForUserResponse {
	response: {
		/**
		 * @minimum 0
		 * @description The number of listings that were canceled.
		 */
		num_cancelled: number;
	};
}

/*** Represents a descriptive tag for a market asset.
 * @description A tag providing metadata about an item, like its quality or type.
 */
export interface AssetTag {
	/**
	 * @description The internal, non-localized name of the tag category.
	 */
	internal_name: string;
	/**
	 * @description The localized name of the tag.
	 */
	name: string;
	/**
	 * @description The localized name of the tag's category.
	 */
	category: string;
	/**
	 * @description A hex color code associated with the tag.
	 */
	color: string;
	/**
	 * @description The localized name of the tag's category.
	 */
	category_name: string;
}

/*** Represents the detailed information about an asset class.
 * @description Contains all descriptive and functional metadata for a type of item.
 */
export interface AssetClassInfo {
	/**
	 * @format url
	 * @description The URL for the small (32x32) icon of the item.
	 */
	icon_url: string;
	/**
	 * @format url
	 * @description The URL for the large (64x64) icon of the item.
	 */
	icon_url_large: string;
	/**
	 * @description The localized display name of the item.
	 */
	name: string;
	/**
	 * @description The "market hash name" used to group items in the market.
	 */
	market_hash_name: string;
	/**
	 * @description The localized market name of the item.
	 */
	market_name: string;
	/**
	 * @description The hex color code for the item's name rarity.
	 */
	name_color: string;
	/**
	 * @description The hex color code for the item's background.
	 */
	background_color: string;
	/**
	 * @description A string describing the item's type.
	 */
	type: string;
	/**
	 * @description Whether the item is tradable.
	 */
	tradable: boolean;
	/**
	 * @description Whether the item is marketable.
	 */
	marketable: boolean;
	/**
	 * @description Whether the item is a commodity (stackable).
	 */
	commodity: boolean;
	/**
	 * @minimum 0
	 * @description The number of days the item is restricted from being traded on the market.
	 */
	market_tradable_restriction: number;
	/**
	 * @minimum 0
	 * @description The number of days the item is restricted from being traded (P2P).
	 */
	market_marketable_restriction: number;
	/**
	 * @description An array of descriptive tags for the item.
	 */
	tags: AssetTag[];
}

/*** Parameters for the IEconMarketService/GetAssetClassInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconMarketService#GetAssetClassInfo
 * @description Parameters for retrieving information about asset classes.
 * @remarks The API expects parameters named classid0, classid1, etc. A helper function should transform the `classids` array into these numbered parameters and set `class_count`.
 */
export interface GetAssetClassInfoRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID to which the assets belong.
	 */
	appid: number;
	/**
	 * @description An array of class IDs to look up.
	 */
	classids: string[];
}

/*** The response from the IEconMarketService/GetAssetClassInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconMarketService#GetAssetClassInfo
 * @description Response containing a dictionary of asset class information.
 */
export interface GetAssetClassInfoResponse {
	response: Record<string, AssetClassInfo> & {
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
	};
}
