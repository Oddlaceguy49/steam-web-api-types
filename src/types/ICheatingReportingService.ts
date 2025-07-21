/***
 * JSDoc type definitions for the Steam Web API's ICheatingReportingService.
 * @see https://partner.steamgames.com/doc/webapi/ICheatingReportingService
 */

/*** Parameters for the ICheatingReportingService/ReportPlayerCheating/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICheatingReportingService#ReportPlayerCheating
 * @description Parameters for reporting a player for cheating.
 */
export interface ReportPlayerCheatingRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user reporting the cheating.
	 */
	steamid: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user being reported.
	 */
	steamid_cheater: string;
	/**
	 * @minimum 1
	 * @description The process ID of the running game.
	 */
	app_process_id: number;
	/**
	 * @minLength 1
	 * @description A string containing the binary cheating report data.
	 */
	cheating_report: string;
}

/*** The response from the ICheatingReportingService/ReportPlayerCheating/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICheatingReportingService#ReportPlayerCheating
 * @description Response after submitting a cheating report.
 */
export interface ReportPlayerCheatingResponse {
	response: {
		/**
		 * @pattern "^[0-9]{17}$"
		 * @description The 64-bit SteamID of the reported cheater.
		 */
		steamid: string;
		/**
		 * @description The result code for the operation.
		 */
		result: number;
		/**
		 * @description True if the user is already banned.
		 */
		banned: boolean;
		/**
		 * @pattern "^[0-9]+$"
		 * @description A unique ID for this cheating report.
		 */
		report_id: string;
	};
}
