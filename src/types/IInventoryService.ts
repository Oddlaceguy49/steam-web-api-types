/***
 * JSDoc type definitions for the Steam Web API's IInventoryService.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService
 */

// ---- Helper Interfaces ----

/*** Represents a specific item instance in a user's inventory.
 * @description Detailed information about a single item owned by a user.
 */
export interface InventoryItem {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The unique 64-bit ID for this item instance.
	 */
	itemid: string;
	/**
	 * @minimum 0
	 * @description The item definition ID that this item is an instance of.
	 */
	itemdefid: number;
	/**
	 * @minimum 1
	 * @description The number of items in this stack.
	 */
	quantity: number;
	/**
	 * @format unix-timestamp
	 * @description The time the item was acquired.
	 */
	acquiretime: number;
	/**
	 * @pattern "^(|traded|market|craft|gift|support|promo|other|deleted)$"
	 * @description The state of the item (e.g., "traded").
	 */
	state: string;
	/**
	 * @format unix-timestamp
	 * @description The time the item's state was last changed.
	 */
	state_changed_timestamp: number;
	/**
	 * @pattern "^(market|trade|craft|gift|support|promo|other)$"
	 * @description How the item was originally acquired.
	 */
	origin: string;
	/**
	 * @description A JSON-encoded string of dynamic properties attached to this item instance.
	 */
	dynamic_props: string;
}

/*** Represents the definition of an item type in the game.
 * @description Contains all the static properties and metadata for a type of item.
 */
export interface ItemDefinition {
	/**
	 * @minimum 0
	 * @description The unique definition ID for this item type.
	 */
	itemdefid: number;
	/**
	 * @pattern "^(item|bundle|generator|playtimegenerator)$"
	 * @description The type of the item.
	 */
	type: string;
	/**
	 * @description The localized name of the item.
	 */
	name: string;
	/**
	 * @description The localized description of the item.
	 */
	description: string;
	/**
	 * @format url
	 * @description The URL for the item's icon.
	 */
	icon_url: string;
	/**
	 * @format url
	 * @description The URL for the item's large icon.
	 */
	icon_url_large: string;
	/**
	 * @description True if the item can be traded.
	 */
	tradable: boolean;
	/**
	 * @description True if the item can be sold on the Steam Community Market.
	 */
	marketable: boolean;
	/**
	 * @description True if the item is a commodity (stackable and not individually distinguished).
	 */
	commodity: boolean;
	/**
	 * @description A JSON-encoded string defining the exchange schema for this item.
	 */
	exchange: string;
	/**
	 * @description A JSON-encoded string defining the bundle contents of this item.
	 */
	bundle: string;
	/**
	 * @description A JSON-encoded string defining the promotional rules for this item.
	 */
	promo: string;
	/**
	 * @description A semicolon-separated string of 'category:tag' values.
	 */
	tags: string;
}

/*** Represents an update to be applied to an item's properties.
 * @description Used in the ModifyItems endpoint to change an item's state.
 */
export interface ItemUpdate {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the item to modify.
	 */
	itemid: string;
	/**
	 * @minimum 0
	 * @description The new quantity for the item. If 0, the item is destroyed.
	 */
	quantity: number;
	/**
	 * @minimum 0
	 * @description The new item definition ID for the item.
	 */
	itemdefid?: number;
	/**
	 * @description The name of the dynamic property to modify.
	 */
	property_name?: string;
	/**
	 * @description The new value for the dynamic property.
	 */
	property_value?: string;
}

// ---- API Endpoints ----

/*** Parameters for the IInventoryService/GetInventory/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#GetInventory
 * @description Parameters for retrieving a user's inventory for your game.
 */
export interface GetInventoryRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
}

/*** The response from the IInventoryService/GetInventory/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#GetInventory
 * @description Response containing the user's inventory items and definitions.
 */
export interface GetInventoryResponse {
	response: {
		/**
		 * @description A JSON-encoded string representing an array of `ItemDefinition` objects.
		 */
		item_json: string;
		/**
		 * @format unix-timestamp
		 * @description The last time the item definitions were modified.
		 */
		itemdef_last_modified: number;
	};
}

/*** Parameters for the IInventoryService/GetItemDefs/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#GetItemDefs
 * @description Parameters for retrieving the item definitions for your game.
 */
export interface GetItemDefsRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
}

/*** The response from the IInventoryService/GetItemDefs/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#GetItemDefs
 * @description Response containing the item definitions for the game.
 */
export interface GetItemDefsResponse {
	response: ItemDefinition[];
}

/*** Parameters for the IInventoryService/AddItem/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#AddItem
 * @description Parameters for adding one or more new items to a user's inventory.
 */
export interface AddItemRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description An array of item definition IDs to grant.
	 */
	itemdefid: number[];
	/**
	 * @description True if the user should receive a notification for the new item.
	 */
	notify?: boolean;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A unique 64-bit request ID to prevent duplicate grants.
	 */
	requestid?: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @description If true, applies the default trade restriction to the new items.
	 */
	trade_restriction?: boolean;
	/**
	 * @description If true, applies the default market restriction to the new items.
	 */
	market_restriction?: boolean;
	/**
	 * @description A JSON-encoded string of dynamic properties to apply to the new items.
	 */
	dynamic_props?: string;
}

/*** Parameters for the IInventoryService/Consolidate/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#Consolidate
 * @description Parameters for combining stacks of items.
 */
export interface ConsolidateRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @description An array of item definition IDs to consolidate.
	 */
	itemdefid: number[];
	/**
	 * @description If true, will consolidate items even if it means exceeding the normal stack size.
	 */
	force?: boolean;
}

/*** Parameters for the IInventoryService/ModifyItems/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#ModifyItems
 * @description Parameters for modifying properties of existing items.
 */
export interface ModifyItemsRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @description A JSON-encoded string representing an array of `ItemUpdate` objects.
	 */
	updates: string;
}

/*** The response for item modification/creation endpoints.
 * @description The common response structure for endpoints that create or modify items, returning the state of the affected items.
 */
export interface ItemModificationResponse {
	response: {
		/**
		 * @description A JSON-encoded string representing an array of `InventoryItem` objects that were created or modified.
		 */
		item_json: string;
	};
}

// Re-use the common response type for endpoints that return item_json
export type AddItemResponse = ItemModificationResponse;
export type ConsolidateResponse = ItemModificationResponse;
export type ModifyItemsResponse = ItemModificationResponse;
export type ExchangeItemResponse = ItemModificationResponse;
export type SplitItemStackResponse = ItemModificationResponse;
export type CombineItemStacksResponse = ItemModificationResponse;

/*** Parameters for the IInventoryService/ExchangeItem/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#ExchangeItem
 * @description Parameters for crafting items using a defined exchange recipe.
 * @deprecated This method is deprecated in favor of server-side recipe calculation.
 */
export interface ExchangeItemRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @description An array of item IDs to be consumed as materials.
	 */
	materialsitemid: string[];
	/**
	 * @description An array of quantities for each corresponding material item.
	 */
	materialsquantity: number[];
	/**
	 * @minimum 0
	 * @description The item definition ID of the item to be created.
	 */
	outputitemdefid: number;
}

/*** Parameters for the IInventoryService/SplitItemStack/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#SplitItemStack
 * @description Parameters for splitting a stack of items.
 */
export interface SplitItemStackRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the item stack to split.
	 */
	itemid: string;
	/**
	 * @minimum 1
	 * @description The quantity to remove from the original stack and place in the new stack.
	 */
	quantity: number;
	/**
	 * @minimum 0
	 * @description The item definition ID for the newly created stack.
	 */
	itemdefid_new?: number;
}

/*** Parameters for the IInventoryService/CombineItemStacks/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IInventoryService#CombineItemStacks
 * @description Parameters for combining multiple item stacks into one.
 */
export interface CombineItemStacksRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @description An array of item IDs to be consumed and combined.
	 */
	fromitemid: string[];
	/**
	 * @pattern "^[0-9]+$"
	 * @description The destination item ID. The `fromitemid` stacks will be merged into this stack.
	 */
	destitemid: string;
	/**
	 * @minimum 1
	 * @description The total quantity from the `fromitemid` stacks to be merged.
	 */
	quantity: number;
}
