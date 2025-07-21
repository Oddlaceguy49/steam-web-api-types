/***
 * JSDoc type definitions for the Steam Web API's ISteamEconomy.
 * @see https://partner.steamgames.com/doc/webapi/ISteamEconomy
 */

// ---- Helper Interfaces ----

/*** Represents a descriptive tag for an asset class.
 * @description Provides metadata about an item, like its quality or type.
 */
export interface AssetTag {
	/**
	 * @description The internal, non-localized name of the tag category (e.g., "Quality").
	 */
	internal_name: string;
	/**
	 * @description The localized display name of the tag (e.g., "Unique").
	 */
	name: string;
	/**
	 * @description The internal name of the category (e.g., "quality").
	 */
	category: string;
	/**
	 * @description The localized display name of the category.
	 */
	category_name: string;
	/**
	 * @description A hex color code associated with the tag. Optional.
	 */
	color?: string;
}

/*** Represents a single line of description for an asset class.
 * @description A part of an item's description, which can be plain text or HTML.
 */
export interface AssetDescriptionEntry {
	/**
	 * @description The type of the description, e.g., "html".
	 */
	type: string;
	/**
	 * @description The description text itself.
	 */
	value: string;
	/**
	 * @description A hex color code for the description text. Optional.
	 */
	color?: string;
	/**
	 * @description Game-specific data associated with the description line.
	 */
	app_data?: Record<string, string | number>;
}

/*** Represents a clickable action for an asset class.
 * @description An action that can be performed on an item, like "Inspect in Game...".
 */
export interface AssetAction {
	/**
	 * @description The localized name of the action.
	 */
	name: string;
	/**
	 * @format url
	 * @description The URL link for the action.
	 */
	link: string;
}

/*** Represents the full definition of an asset class.
 * @description Contains all static information about a type of item, such as its name, appearance, and properties.
 */
export interface AssetClass {
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
	 * @description The localized name of the item.
	 */
	name: string;
	/**
	 * @description The "market hash name" used to group items on the Community Market.
	 */
	market_hash_name: string;
	/**
	 * @description The localized display name on the Community Market.
	 */
	market_name: string;
	/**
	 * @description A hex color code for the item's name, indicating rarity.
	 */
	name_color: string;
	/**
	 * @description A hex color code for the item's background.
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
	 * @description Whether the item is a commodity (stackable and not individually distinguished).
	 */
	commodity: boolean;
	/**
	 * @minimum 0
	 * @description The number of days after acquisition before the item can be traded on the market.
	 */
	market_tradable_restriction: number;
	/**
	 * @minimum 0
	 * @description The number of days after acquisition before the item is marketable at all.
	 */
	market_marketable_restriction: number;
	/**
	 * @description An array of description lines for the item.
	 */
	descriptions: AssetDescriptionEntry[];
	/**
	 * @description An array of actions that can be performed on the item.
	 */
	actions: AssetAction[];
	/**
	 * @description An array of tags categorizing the item.
	 */
	tags: AssetTag[];
	/**
	 * @description Game-specific data, such as a definition index.
	 */
	app_data?: Record<string, string | number>;
}

/*** Represents the price information for an asset.
 * @description Contains the prices of an item in various currencies.
 */
export interface AssetPrice {
	/**
	 * @description A dictionary of prices, where keys are 3-letter ISO 4217 currency codes (e.g., "USD") and values are the price in the smallest unit (e.g., cents).
	 */
	prices: Record<string, number>;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The class ID of the asset.
	 */
	classid: string;
	/**
	 * @description The asset class definitions for this item.
	 */
	class: AssetClass[];
}

// ---- API Endpoints ----

/*** Parameters for the ISteamEconomy/GetAssetClassInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamEconomy#GetAssetClassInfo
 * @description Parameters for retrieving asset class definitions.
 * @remarks The API expects array parameters like `classids` to be formatted as `classid[0]=123&classid[1]=456`. A helper function may be needed to format the request and to set `class_count`.
 */
export interface GetAssetClassInfoRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description An array of class IDs to look up.
	 */
	classids: string[];
	/**
	 * @description An array of instance IDs corresponding to each class ID. Optional.
	 */
	instanceids?: string[];
	/**
	 * @description The language for localization of names and descriptions.
	 */
	language?: string;
}

/*** The response from the ISteamEconomy/GetAssetClassInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamEconomy#GetAssetClassInfo
 * @description Response containing a dictionary of asset class definitions.
 */
export interface GetAssetClassInfoResponse {
	result: Record<string, AssetClass> & {
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
	};
}

/*** Parameters for the ISteamEconomy/GetAssetPrices/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamEconomy#GetAssetPrices
 * @description Parameters for retrieving the prices of assets.
 */
export interface GetAssetPricesRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[A-Z]{3}$"
	 * @description The 3-letter ISO 4217 currency code to get prices in. Optional.
	 */
	currency?: string;
	/**
	 * @description The language for localization of names. Optional.
	 */
	language?: string;
}

/*** The response from the ISteamEconomy/GetAssetPrices/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamEconomy#GetAssetPrices
 * @description Response containing the prices for assets in an app.
 */
export interface GetAssetPricesResponse {
	result: {
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
		/**
		 * @description An array of assets with their pricing information.
		 */
		assets: AssetPrice[];
	};
}
