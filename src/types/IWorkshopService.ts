/***
 * JSDoc type definitions for the Steam Web API's IWorkshopService.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService
 */

// ---- Helper Interfaces ----

/*** Represents a single payment rule for a contributor to an item.
 * @description Defines what percentage of revenue a specific workshop file contributor receives.
 */
export interface WorkshopItemPaymentRule {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the workshop file this rule applies to.
	 */
	workshop_file_id: string;
	/**
	 * @minimum 0
	 * @maximum 1
	 * @description The percentage of revenue this contributor receives (e.g., 0.5 for 50%).
	 */
	revenue_percentage: number;
	/**
	 * @description A description of the payment rule.
	 */
	rule_description: string;
}

/*** Represents an action taken on a workshop file.
 * @description A mapping of a workshop file to a specific action type.
 */
export interface WorkshopFileAction {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the workshop file.
	 */
	publishedfileid: string;
	/**
	 * @description The type of action (e.g., "play", "voteup").
	 */
	action: string;
}

/*** Represents a finalized contributor and their revenue share.
 * @description Details a contributor's final agreed-upon revenue percentage for a game item.
 */
export interface FinalizedContributor {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the contributor.
	 */
	steamid: string;
	/**
	 * @minimum 0
	 * @maximum 1
	 * @description The percentage of revenue this contributor receives (e.g., 0.75 for 75%).
	 */
	revenue_percentage: number;
}

/*** Represents the revenue for a single day.
 * @description Contains the date and financial totals for an item's daily revenue.
 */
export interface DailyRevenue {
	/**
	 * @description The date in "YYYY-MM-DD" format.
	 */
	date: string;
	/**
	 * @description The total revenue for this day, in US cents.
	 */
	revenue_usd: number;
	/**
	 * @description The portion of the revenue paid out as royalties, in US cents.
	 */
	royalty_payments_usd: number;
}

/*** Represents a localized description for an item.
 * @description A language and its corresponding description text.
 */
export interface ItemDescriptionLanguage {
	/**
	 * @description The language code (e.g., "english", "french").
	 */
	language: string;
	/**
	 * @description The localized description text.
	 */
	description: string;
}

/*** A container for a game item and its various localized descriptions.
 * @description Used in the `PopulateItemDescriptions` endpoint to update item descriptions.
 */
export interface ItemDescriptionBlock {
	/**
	 * @minimum 1
	 * @description The game item's unique ID.
	 */
	gameitemid: number;
	/**
	 * @description A JSON-encoded string representing an array of `ItemDescriptionLanguage` objects.
	 */
	item_description: string;
}

// ---- API Endpoints ----

/*** Parameters for the IWorkshopService/SetItemPaymentRules/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService#SetItemPaymentRules
 * @description Parameters for setting the payment rules for a workshop item that is sold in-game.
 * @remarks The `associated_workshop_files` and `partner_accounts` parameters must be JSON-encoded strings.
 */
export interface SetItemPaymentRulesRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The ID of the game item being sold.
	 */
	gameitemid: number;
	/**
	 * @description A JSON-encoded string representing an array of `WorkshopFileAction` objects.
	 */
	associated_workshop_files: string;
	/**
	 * @description A JSON-encoded string representing an array of `WorkshopItemPaymentRule` objects.
	 */
	partner_accounts: string;
}

/*** The response from the IWorkshopService/SetItemPaymentRules/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService#SetItemPaymentRules
 * @description An empty response on success.
 */
export interface SetItemPaymentRulesResponse {
	response: {};
}

/*** Parameters for the IWorkshopService/GetFinalizedContributors/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService#GetFinalizedContributors
 * @description Parameters for retrieving the list of finalized contributors and their revenue shares for an item.
 */
export interface GetFinalizedContributorsRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The ID of the game item.
	 */
	gameitemid: number;
}

/*** The response from the IWorkshopService/GetFinalizedContributors/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService#GetFinalizedContributors
 * @description Response containing the list of finalized contributors for an item.
 */
export interface GetFinalizedContributorsResponse {
	response: {
		/**
		 * @minimum 1
		 * @description A result code for the request.
		 */
		result: number;
		/**
		 * @description An array of finalized contributors.
		 */
		contributors: FinalizedContributor[];
	};
}

/*** Parameters for the IWorkshopService/GetItemDailyRevenue/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService#GetItemDailyRevenue
 * @description Parameters for retrieving daily revenue information for a specific item.
 */
export interface GetItemDailyRevenueRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The ID of the game item.
	 */
	item_id: number;
	/**
	 * @format unix-timestamp
	 * @description The start date of the report range (inclusive).
	 */
	date_start: number;
	/**
	 * @format unix-timestamp
	 * @description The end date of the report range (inclusive).
	 */
	date_end: number;
}

/*** The response from the IWorkshopService/GetItemDailyRevenue/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService#GetItemDailyRevenue
 * @description Response containing a breakdown of daily revenue for an item.
 */
export interface GetItemDailyRevenueResponse {
	response: {
		/**
		 * @minimum 1
		 * @description A result code for the request.
		 */
		result: number;
		/**
		 * @description The total revenue for the item in the date range, in US cents.
		 */
		total_revenue_usd: number;
		/**
		 * @description The total royalty payments for the item in the date range, in US cents.
		 */
		total_royalty_payments_usd: number;
		/**
		 * @description An array of daily revenue breakdowns.
		 */
		daily_revenue: DailyRevenue[];
	};
}

/*** Parameters for the IWorkshopService/PopulateItemDescriptions/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService#PopulateItemDescriptions
 * @description Parameters for populating localized descriptions for a set of game items.
 * @remarks The `item_descriptions` parameter is a JSON-encoded string representing an array of `ItemDescriptionBlock` objects. Each of these objects itself contains another JSON-encoded string.
 */
export interface PopulateItemDescriptionsRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description A JSON-encoded string representing an array of `ItemDescriptionBlock` objects.
	 */
	item_descriptions: string;
}

/*** The response from the IWorkshopService/PopulateItemDescriptions/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IWorkshopService#PopulateItemDescriptions
 * @description Response indicating the result of the operation.
 */
export interface PopulateItemDescriptionsResponse {
	response: {
		/**
		 * @minimum 1
		 * @description A result code for the request.
		 */
		result: number;
	};
}
