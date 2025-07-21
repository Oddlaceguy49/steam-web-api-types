/***
 * JSDoc type definitions for the Steam Web API's IEconService.
 * @see https://partner.steamgames.com/doc/webapi/IEconService
 */

/*** Represents a descriptive entry for an asset class.
 * @description Provides detailed, localized information about an item's type, appearance, and properties.
 */
export interface AssetDescription {
	/**
	 * @minimum 1
	 * @description The AppID of the game this asset belongs to.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The class ID of the asset.
	 */
	classid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The instance ID of the asset.
	 */
	instanceid: string;
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
	 * @description The localized market name of the item.
	 */
	market_name: string;
	/**
	 * @description A hex color code for the item's name rarity.
	 */
	name_color: string;
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
}

/*** Represents a specific asset involved in a trade.
 * @description Details of an item being given or received in a trade offer or history.
 */
export interface TradedAsset {
	/**
	 * @minimum 1
	 * @description The AppID of the item.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The context ID of the item in the user's inventory.
	 */
	contextid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The asset ID of the item.
	 */
	assetid: string;
	/**
	 * @minimum 1
	 * @description The amount of this item being traded (for stackable items).
	 */
	amount: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The class ID of the item.
	 */
	classid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The instance ID of the item.
	 */
	instanceid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The new asset ID after the trade is completed.
	 */
	new_assetid?: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The new context ID after the trade is completed.
	 */
	new_contextid?: string;
}

/*** Represents a completed trade from a user's history.
 * @description Contains information about a single trade, including the partner and items exchanged.
 */
export interface Trade {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The unique ID for this trade.
	 */
	tradeid: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the other user in the trade.
	 */
	steamid_other: string;
	/**
	 * @format unix-timestamp
	 * @description The time the trade was initiated.
	 */
	time_init: number;
	/**
	 * @minimum 0
	 * @description The status of the trade. (e.g., 0 - Complete, 1 - In Progress, etc.).
	 */
	status: number;
	/**
	 * @description An array of assets the user received in this trade.
	 */
	assets_received?: TradedAsset[];
	/**
	 * @description An array of assets the user gave away in this trade.
	 */
	assets_given?: TradedAsset[];
}

/*** Represents a pending, active, or historical trade offer.
 * @description Contains all information about a trade offer, including its state, items, and participants.
 */
export interface TradeOffer {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The unique ID for this trade offer.
	 */
	tradeofferid: string;
	/**
	 * @description The 32-bit account ID of the other user in the trade.
	 */
	accountid_other: number;
	/**
	 * @description A message included with the trade offer by the sender.
	 */
	message: string;
	/**
	 * @format unix-timestamp
	 * @description The time the offer will expire.
	 */
	expiration_time: number;
	/**
	 * @minimum 1
	 * @maximum 11
	 * @description The state of the trade offer (e.g., 2: Active, 3: Accepted, 4: Countered, 5: Expired, 6: Canceled, 7: Declined, 9: CreatedNeedsConfirmation, 10: CanceledBySecondFactor, 11: InEscrow).
	 */
	trade_offer_state: number;
	/**
	 * @description An array of assets the user will give if the offer is accepted.
	 */
	items_to_give?: TradedAsset[];
	/**
	 * @description An array of assets the user will receive if the offer is accepted.
	 */
	items_to_receive?: TradedAsset[];
	/**
	 * @description True if this offer was sent by the user making the API request.
	 */
	is_our_offer: boolean;
	/**
	 * @format unix-timestamp
	 * @description The time the offer was created.
	 */
	time_created: number;
	/**
	 * @format unix-timestamp
	 * @description The time the offer was last updated.
	 */
	time_updated: number;
	/**
	 * @description True if the offer was created from a real-time trade session.
	 */
	from_real_time_trade: boolean;
	/**
	 * @format unix-timestamp
	 * @description The time the items will be released from escrow.
	 */
	escrow_end_date: number;
	/**
	 * @minimum 1
	 * @maximum 3
	 * @description The confirmation method required for this offer (1: Invalid, 2: Email, 3: Mobile App).
	 */
	confirmation_method: number;
}

/*** Parameters for the IEconService/GetTradeHistory/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#GetTradeHistory
 * @description Parameters for retrieving a user's trade history.
 */
export interface GetTradeHistoryRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The number of trades to return.
	 */
	max_trades: number;
	/**
	 * @format unix-timestamp
	 * @description The time of the last trade shown on the previous page.
	 */
	start_after_time?: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the last trade shown on the previous page.
	 */
	start_after_tradeid?: string;
	/**
	 * @description True if navigating to the previous page of results.
	 */
	navigating_back?: boolean;
	/**
	 * @description Whether to include asset descriptions.
	 */
	get_descriptions?: boolean;
	/**
	 * @description The language for the descriptions.
	 */
	language?: string;
	/**
	 * @description Whether to include failed trades.
	 */
	include_failed?: boolean;
	/**
	 * @description Whether to include the total number of trades.
	 */
	include_total?: boolean;
}

/*** The response from the IEconService/GetTradeHistory/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#GetTradeHistory
 * @description Response containing a list of historical trades.
 */
export interface GetTradeHistoryResponse {
	response: {
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
		/**
		 * @minimum 0
		 * @description The total number of trades for the user. Only present if `include_total` is true.
		 */
		total_trades?: number;
		/**
		 * @description True if there are more trades to retrieve.
		 */
		more: boolean;
		/**
		 * @description An array of trades.
		 */
		trades: Trade[];
		/**
		 * @description An array of asset descriptions. Only present if `get_descriptions` is true.
		 */
		descriptions?: AssetDescription[];
	};
}

/*** Parameters for the IEconService/GetTradeOffers/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#GetTradeOffers
 * @description Parameters for retrieving a list of trade offers.
 */
export interface GetTradeOffersRequest {
	key: string;
	/**
	 * @description Whether to get offers that the user has sent.
	 */
	get_sent_offers: boolean;
	/**
	 * @description Whether to get offers that the user has received.
	 */
	get_received_offers: boolean;
	/**
	 * @description Whether to include asset descriptions.
	 */
	get_descriptions?: boolean;
	/**
	 * @description The language for the descriptions.
	 */
	language?: string;
	/**
	 * @description If set, only returns active offers.
	 */
	active_only?: boolean;
	/**
	 * @description If set, only returns historical offers.
	 */
	historical_only?: boolean;
	/**
	 * @format unix-timestamp
	 * @description A cutoff for historical offers.
	 */
	time_historical_cutoff?: number;
}

/*** The response from the IEconService/GetTradeOffers/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#GetTradeOffers
 * @description Response containing lists of trade offers.
 */
export interface GetTradeOffersResponse {
	response: {
		/**
		 * @description A list of offers the user has sent.
		 */
		trade_offers_sent?: TradeOffer[];
		/**
		 * @description A list of offers the user has received.
		 */
		trade_offers_received?: TradeOffer[];
		/**
		 * @description An array of asset descriptions. Only present if `get_descriptions` is true.
		 */
		descriptions?: AssetDescription[];
	};
}

/*** Parameters for the IEconService/GetTradeOffer/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#GetTradeOffer
 * @description Parameters for retrieving a single trade offer.
 */
export interface GetTradeOfferRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the trade offer to retrieve.
	 */
	tradeofferid: string;
	/**
	 * @description The language for the descriptions.
	 */
	language?: string;
	/**
	 * @description Whether to include asset descriptions.
	 */
	get_descriptions?: boolean;
}

/*** The response from the IEconService/GetTradeOffer/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#GetTradeOffer
 * @description Response containing details of a single trade offer.
 */
export interface GetTradeOfferResponse {
	response: {
		/**
		 * @description The details of the requested trade offer.
		 */
		offer: TradeOffer;
		/**
		 * @description An array of asset descriptions. Only present if `get_descriptions` is true.
		 */
		descriptions?: AssetDescription[];
	};
}

/*** Parameters for the IEconService/GetTradeOffersSummary/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#GetTradeOffersSummary
 * @description Parameters for getting a summary of a user's trade offers.
 */
export interface GetTradeOffersSummaryRequest {
	key: string;
	/**
	 * @format unix-timestamp
	 * @description The time the user last checked for trade offers.
	 */
	time_last_visit: number;
}

/*** The response from the IEconService/GetTradeOffersSummary/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#GetTradeOffersSummary
 * @description Response containing counts of various trade offer states.
 */
export interface GetTradeOffersSummaryResponse {
	response: {
		/**
		 * @minimum 0
		 * @description The number of pending received offers.
		 */
		pending_received_count: number;
		/**
		 * @minimum 0
		 * @description The number of new received offers since the last visit.
		 */
		new_received_count: number;
		/**
		 * @minimum 0
		 * @description The number of updated received offers since the last visit.
		 */
		updated_received_count: number;
		/**
		 * @minimum 0
		 * @description The number of historical received offers.
		 */
		historical_received_count: number;
		/**
		 * @minimum 0
		 * @description The number of pending sent offers.
		 */
		pending_sent_count: number;
		/**
		 * @minimum 0
		 * @description The number of newly accepted sent offers.
		 */
		newly_accepted_sent_count: number;
		/**
		 * @minimum 0
		 * @description The number of received offers in escrow.
		 */
		escrow_received_count: number;
		/**
		 * @minimum 0
		 * @description The number of sent offers in escrow.
		 */
		escrow_sent_count: number;
	};
}

/*** Parameters for the IEconService/DeclineTradeOffer/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#DeclineTradeOffer
 * @description Parameters for declining a trade offer.
 */
export interface DeclineTradeOfferRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the trade offer to decline.
	 */
	tradeofferid: string;
}

/*** The response from the IEconService/DeclineTradeOffer/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#DeclineTradeOffer
 * @description An empty response on success.
 */
export interface DeclineTradeOfferResponse {
	response: {};
}

/*** Parameters for the IEconService/CancelTradeOffer/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#CancelTradeOffer
 * @description Parameters for canceling a trade offer.
 */
export interface CancelTradeOfferRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the trade offer to cancel.
	 */
	tradeofferid: string;
}

/*** The response from the IEconService/CancelTradeOffer/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IEconService#CancelTradeOffer
 * @description An empty response on success.
 */
export interface CancelTradeOfferResponse {
	response: {};
}
