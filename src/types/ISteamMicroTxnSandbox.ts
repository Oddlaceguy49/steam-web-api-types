/***
 * JSDoc type definitions for the Steam Web API's ISteamMicroTxnSandbox.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox
 * @description This interface is the testing/sandbox version of ISteamMicroTxn. Its methods, parameters, and responses are identical to the production version. It should be used for development and testing of your in-game store.
 */

// ---- Helper Interfaces (Shared with ISteamMicroTxn) ----

/*** Represents an item within a microtransaction.
 * @description Details of a single item in a purchase or subscription agreement.
 */
export interface TransactionItem {
	/**
	 * @minimum 1
	 * @description The item definition ID.
	 */
	itemid: number;
	/**
	 * @minimum 1
	 * @description The quantity of the item.
	 */
	qty: number;
	/**
	 * @pattern "^-?[0-9]+$"
	 * @description The cost of the items in the user's wallet currency. Represented as a string.
	 */
	amount: string;
	/**
	 * @pattern "^-?[0-9]+$"
	 * @description The VAT/tax portion of the item's cost. Represented as a string.
	 */
	vat: string;
	/**
	 * @pattern "^[a-z]+$"
	 * @description The status of the item within the transaction (e.g., "committed").
	 */
	itemstatus: string;
}

/*** Represents the full details of a microtransaction.
 * @description A comprehensive object containing all information about a transaction's state.
 */
export interface TransactionDetails {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The unique 64-bit order ID for the transaction.
	 */
	orderid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The unique 64-bit transaction ID.
	 */
	transid: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @pattern "^[A-Z][a-z]+$"
	 * @description The status of the transaction (e.g., "Approved", "Succeeded", "Failed").
	 */
	status: string;
	/**
	 * @pattern "^[A-Z]{3}$"
	 * @description The 3-letter ISO 4217 currency code of the transaction.
	 */
	currency: string;
	/**
	 * @description The timestamp of the transaction in "YYYY-MM-DD HH:MM:SS" format.
	 */
	time: string;
	/**
	 * @pattern "^[A-Z]{2}$"
	 * @description The 2-letter ISO 3166 country code of the user.
	 */
	country: string;
	/**
	 * @pattern "^[A-Z]{2}$"
	 * @description The user's US state, if applicable.
	 */
	usstate?: string;
	/**
	 * @description An array of items included in this transaction.
	 */
	items: TransactionItem[];
}

/*** Represents a user's recurring billing agreement (subscription).
 * @description Contains all details about a user's subscription status for an item.
 */
export interface UserAgreement {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The unique 64-bit ID for the agreement.
	 */
	agreementid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The item ID of the subscription plan.
	 */
	itemid: string;
	/**
	 * @pattern "^[A-Z][a-z]+$"
	 * @description The status of the agreement (e.g., "Active", "Canceled").
	 */
	status: string;
	/**
	 * @pattern "^[a-z]+$"
	 * @description The billing period (e.g., "month", "year").
	 */
	period: string;
	/**
	 * @minimum 1
	 * @description The frequency of billing per period.
	 */
	frequency: number;
	/**
	 * @description The start date of the agreement in "YYYY-MM-DD HH:MM:SS" format.
	 */
	startdate: string;
	/**
	 * @description The end date of the agreement in "YYYY-MM-DD HH:MM:SS" format.
	 */
	enddate: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The recurring cost in the smallest unit of the currency. Represented as a string.
	 */
	recurringamt: string;
	/**
	 * @pattern "^[A-Z]{3}$"
	 * @description The 3-letter ISO 4217 currency code.
	 */
	currency: string;
	/**
	 * @description The time the agreement was created in "YYYY-MM-DD HH:MM:SS" format.
	 */
	timecreated: string;
	/**
	 * @description The next scheduled payment time in "YYYY-MM-DD HH:MM:SS" format.
	 */
	nextpayment: string;
	/**
	 * @description The last successful payment time in "YYYY-MM-DD HH:MM:SS" format.
	 */
	lastpayment: string;
	/**
	 * @minimum 0
	 * @description The amount of outstanding balance.
	 */
	outstanding: number;
	/**
	 * @minimum 0
	 * @description The number of consecutive failed payment attempts.
	 */
	failcount: number;
}

// ---- API Endpoints ----

/*** Parameters for the ISteamMicroTxnSandbox/InitTxn/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#InitTxn
 * @description Parameters for initializing a new microtransaction.
 * @remarks The API expects item arrays to be formatted as `itemid[0]=123&qty[0]=1&amount[0]=99`. A helper function may be needed to format the request.
 */
export interface InitTxnRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A unique 64-bit ID for this order, chosen by the developer.
	 */
	orderid: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user making the purchase.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The number of items in this purchase.
	 */
	itemcount: number;
	/**
	 * @description An array of item definition IDs.
	 */
	itemid: number[];
	/**
	 * @description An array of quantities for each corresponding item.
	 */
	qty: number[];
	/**
	 * @description An array of prices for each corresponding item. Prices are per-item and in the smallest unit of the currency.
	 */
	amount: number[];
	/**
	 * @pattern "^[A-Z]{3}$"
	 * @description The 3-letter ISO 4217 currency code for the prices.
	 */
	currency: string;
	/**
	 * @description The language for localization of item names in the UI.
	 */
	language: string;
}

/*** The response from the ISteamMicroTxnSandbox/InitTxn/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#InitTxn
 * @description Response containing the transaction and order IDs after initialization.
 */
export interface InitTxnResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @description An error message if the result is not "OK".
		 */
		errormessage?: string;
		params: {
			/**
			 * @pattern "^[0-9]+$"
			 * @description The unique 64-bit order ID for the transaction.
			 */
			orderid: string;
			/**
			 * @pattern "^[0-9]+$"
			 * @description The unique 64-bit transaction ID generated by Steam.
			 */
			transid: string;
		};
	};
}

/*** Parameters for the ISteamMicroTxnSandbox/FinalizeTxn/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#FinalizeTxn
 * @description Parameters for finalizing a transaction after user approval.
 */
export interface FinalizeTxnRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The order ID of the transaction to finalize.
	 */
	orderid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
}

/*** The response from the ISteamMicroTxnSandbox/FinalizeTxn/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#FinalizeTxn
 * @description Response containing the final details of the transaction.
 */
export interface FinalizeTxnResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @description An error message if the result is not "OK".
		 */
		errormessage?: string;
		/**
		 * @description The detailed information about the finalized transaction.
		 */
		params?: TransactionDetails;
	};
}

/*** Parameters for the ISteamMicroTxnSandbox/QueryTxn/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#QueryTxn
 * @description Parameters for querying the status of a transaction.
 */
export interface QueryTxnRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The order ID to query.
	 */
	orderid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The transaction ID to query. Optional, can be used instead of orderid.
	 */
	transid?: string;
}

// QueryTxn has the same response structure as FinalizeTxn
export type QueryTxnResponse = FinalizeTxnResponse;

/*** Parameters for the ISteamMicroTxnSandbox/GetReport/v3 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#GetReport
 * @description Parameters for generating a financial report.
 */
export interface GetReportRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID for the report.
	 */
	appid: number;
	/**
	 * @description The start time for the report in "YYYY-MM-DD HH:MM" format.
	 */
	time: string;
	/**
	 * @pattern "^(G|S)$"
	 * @description The type of report ('G' for game sales, 'S' for Steam store sales).
	 */
	type: string;
	/**
	 * @minimum 1
	 * @maximum 1000
	 * @description The maximum number of results to return.
	 */
	maxresults?: number;
}

/*** The response from the ISteamMicroTxnSandbox/GetReport/v3 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#GetReport
 * @description Response containing a list of transaction orders for the report.
 */
export interface GetReportResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @description An error message if the result is not "OK".
		 */
		errormessage?: string;
		params: {
			/**
			 * @minimum 0
			 * @description The total number of orders matching the criteria.
			 */
			total: number;
			/**
			 * @minimum 0
			 * @description The starting index of the returned orders.
			 */
			startindex: number;
		};
		/**
		 * @description An array of transaction orders.
		 */
		orders: TransactionDetails[];
	};
}

/*** Parameters for the ISteamMicroTxnSandbox/GetUserInfo/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#GetUserInfo
 * @description Parameters for getting a user's purchasing status.
 */
export interface GetUserInfoRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @format ip
	 * @description The user's IP address.
	 */
	ipaddress: string;
}

/*** The response from the ISteamMicroTxnSandbox/GetUserInfo/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#GetUserInfo
 * @description Response containing details about a user's purchasing eligibility.
 */
export interface GetUserInfoResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @description An error message if the result is not "OK".
		 */
		errormessage?: string;
		params: {
			/**
			 * @pattern "^[A-Z][a-z]+$"
			 * @description The user's account status (e.g., "Active", "Trusted").
			 */
			status: string;
			/**
			 * @pattern "^[A-Z]{2}$"
			 * @description The user's country code.
			 */
			country: string;
			/**
			 * @pattern "^[A-Z]{3}$"
			 * @description The user's wallet currency code.
			 */
			currency: string;
		};
	};
}

/*** Parameters for the ISteamMicroTxnSandbox/AdjustAgreement/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#AdjustAgreement
 * @description Parameters for adjusting a recurring billing agreement (subscription).
 */
export interface AdjustAgreementRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the agreement to adjust.
	 */
	agreementid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description The next process date for the agreement in "YYYY-MM-DD HH:MM:SS" format.
	 */
	nextprocessdate: string;
}

/*** The response from the ISteamMicroTxnSandbox/AdjustAgreement/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#AdjustAgreement
 * @description Response containing the new state of the adjusted agreement.
 */
export interface AdjustAgreementResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @description An error message if the result is not "OK".
		 */
		errormessage?: string;
		/**
		 * @description The details of the adjusted agreement.
		 */
		params?: UserAgreement;
	};
}

/*** Parameters for the ISteamMicroTxnSandbox/GetUserAgreementInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#GetUserAgreementInfo
 * @description Parameters for retrieving a user's subscription agreement information.
 */
export interface GetUserAgreementInfoRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
}

/*** The response from the ISteamMicroTxnSandbox/GetUserAgreementInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#GetUserAgreementInfo
 * @description Response containing the user's agreement details.
 */
export interface GetUserAgreementInfoResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @description The details of the user's agreement.
		 */
		params: UserAgreement;
	};
}

/*** Parameters for the ISteamMicroTxnSandbox/ProcessAgreement/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#ProcessAgreement
 * @description Parameters for immediately processing a recurring billing payment.
 */
export interface ProcessAgreementRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A unique 64-bit order ID for this specific charge.
	 */
	orderid: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the agreement to process.
	 */
	agreementid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description The amount to charge, in the smallest unit of the currency.
	 */
	amount: number;
	/**
	 * @pattern "^[A-Z]{3}$"
	 * @description The 3-letter ISO 4217 currency code for the amount.
	 */
	currency: string;
}

/*** The response from the ISteamMicroTxnSandbox/ProcessAgreement/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox#ProcessAgreement
 * @description Response containing the transaction details for the processed payment.
 */
export interface ProcessAgreementResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @description An error message if the result is not "OK".
		 */
		errormessage?: string;
		params: {
			/**
			 * @pattern "^[0-9]+$"
			 * @description The unique 64-bit order ID for the charge.
			 */
			orderid: string;
			/**
			 * @pattern "^[0-9]+$"
			 * @description The unique 64-bit transaction ID generated by Steam.
			 */
			transid: string;
		};
	};
}
