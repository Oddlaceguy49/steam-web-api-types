/***
 * JSDoc type definitions for the Steam Web API's IGameInventory.
 * @see https://partner.steamgames.com/doc/webapi/IGameInventory
 */

/*** Parameters for the IGameInventory/GetItemDefArchive/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameInventory#GetItemDefArchive
 * @description Parameters for retrieving the game's item definition archive.
 */
export interface GetItemDefArchiveRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The application ID for the game.
	 */
	appid: number;
	/**
	 * @description A SHA1 digest of the current item definition archive. If this digest matches the server's current digest, an empty item_json will be returned.
	 */
	digest?: string;
}

/*** The response from the IGameInventory/GetItemDefArchive/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameInventory#GetItemDefArchive
 * @description Response containing the item definition archive for a game.
 */
export interface GetItemDefArchiveResponse {
	response: {
		/**
		 * @description A JSON string representing an array of item definitions. This will be an empty string if the provided `digest` matches the server's digest. The client is expected to parse this string.
		 */
		item_json: string;
		/**
		 * @description The SHA1 digest of the returned item definition archive. This can be used in subsequent calls to check for changes.
		 */
		digest: string;
	};
}

/*** Represents the pricing information for a specific item.
 * @description Contains the prices for requested dynamic properties of an item.
 */
export interface ItemPrice {
	/**
	 * @minimum 0
	 * @description The item definition ID.
	 */
	itemdefid: number;
	/**
	 * @description A dictionary of prices for the requested properties. Prices are in the smallest unit of the specified currency (e.g., cents, pence).
	 */
	prices: Record<string, number>;
}

/*** Parameters for the IGameInventory/GetItemPriceInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameInventory#GetItemPriceInfo
 * @description Parameters for retrieving item price information.
 * @remarks The API expects array parameters to be formatted as `itemdefid[0]=123&itemdefid[1]=456`. A helper function may be needed to format the request.
 */
export interface GetItemPriceInfoRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The application ID for the game.
	 */
	appid: number;
	/**
	 * @description An array of item definition IDs for which to get prices.
	 */
	itemdefid: number[];
	/**
	 * @description An array of dynamic property names for which to get prices.
	 */
	propertyname: string[];
	/**
	 * @pattern "^[A-Z]{3}$"
	 * @description The three-letter ISO 4217 currency code for the prices (e.g., "USD", "GBP").
	 */
	currency: string;
}

/*** The response from the IGameInventory/GetItemPriceInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameInventory#GetItemPriceInfo
 * @description Response containing pricing information for the requested items.
 */
export interface GetItemPriceInfoResponse {
	response: {
		/**
		 * @description An array of objects, each containing the pricing info for a requested itemdefid.
		 */
		items: ItemPrice[];
	};
}
