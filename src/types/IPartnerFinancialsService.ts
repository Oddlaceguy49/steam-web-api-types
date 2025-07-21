/***
 * JSDoc type definitions for the Steam Web API's IPartnerFinancialService.
 * @see https://partner.steamgames.com/doc/webapi/IPartnerFinancialService
 */

// ---- Helper Interfaces ----

/*** Represents a financial summary for a given time period.
 * @description Contains aggregated financial data for an application.
 */
export interface FinancialSummary {
	/**
	 * @minimum 1
	 * @description The AppID the summary is for.
	 */
	appid: number;
	/**
	 * @minimum 0
	 * @description The total number of transactions in the time period.
	 */
	numtransactions: number;
	/**
	 * @minimum 0
	 * @description The gross revenue from sales in US cents.
	 */
	sum_us_sales_cents: number;
	/**
	 * @minimum 0
	 * @description The total tax collected in US cents.
	 */
	sum_us_tax_cents: number;
	/**
	 * @minimum 0
	 * @description The total fees paid to Steam in US cents.
	 */
	sum_steam_fee_cents: number;
	/**
	 * @minimum 0
	 * @description The developer's share of the revenue in US cents.
	 */
	sum_developer_share_cents: number;
	/**
	 * @minimum 0
	 * @description The net revenue after taxes and fees in US cents.
	 */
	sum_net_sales_cents: number;
}

// ---- API Endpoint ----

/*** Parameters for the IPartnerFinancialService/GetFinancialSummary/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPartnerFinancialService#GetFinancialSummary
 * @description Parameters for retrieving a financial summary for an app.
 */
export interface GetFinancialSummaryRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID to retrieve financial data for.
	 */
	appid: number;
	/**
	 * @format unix-timestamp
	 * @description The beginning of the time range for the report (Unix timestamp).
	 */
	fromtime: number;
	/**
	 * @format unix-timestamp
	 * @description The end of the time range for the report (Unix timestamp).
	 */
	totime: number;
}

/*** The response from the IPartnerFinancialService/GetFinancialSummary/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPartnerFinancialService#GetFinancialSummary
 * @description Response containing the financial summary for an app.
 */
export interface GetFinancialSummaryResponse {
	response: {
		/**
		 * @description The detailed financial summary object.
		 */
		financial_summary: FinancialSummary;
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
	};
}
