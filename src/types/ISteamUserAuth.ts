/*** Parameters for the ISteamUserAuth/AuthenticateUserTicket/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket
 * @description Parameters for authenticating a user ticket.
 */
export interface AuthenticateUserTicketRequest {
	/**
	 * @minLength 1
	 * @description Your Steamworks Web API publisher authentication key.
	 */
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minLength 1
	 * @description The hexadecimal string representation of the binary ticket data.
	 */
	ticket: string;
	/**
	 * @minLength 1
	 * @description Optional: A string identifier for the remote service.
	 */
	identity?: string;
}

/**
 * The parameters object returned on a successful ticket authentication.
 */
export interface AuthenticateUserTicketSuccessParams {
	/**
	 * @description A string indicating the success of the request. Always "OK".
	 * @example "OK"
	 */
	result: "OK";

	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user playing the game. If the game is family-shared, this is the ID of the borrower.
	 */
	steamid: string;

	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the original owner of the game. Will be the same as `steamid` unless the game is family-shared.
	 */
	ownersteamid: string;

	/**
	 * @description True if the user has a VAC ban for this AppID on record.
	 */
	vacbanned: boolean;

	/**
	 * @description True if the user has been banned from this AppID by the publisher.
	 */
	publisherbanned: boolean;
}

/**
 * The error object returned on a failed ticket authentication.
 */
export interface AuthenticateUserTicketError {
	/**
	 * @description The numeric code for the error.
	 * @example 101
	 */
	errorcode: number;

	/**
	 * @description A string description of the error.
	 * @example "Invalid ticket"
	 */
	errordesc: string;
}

/**
 * The full response from the ISteamUserAuth/AuthenticateUserTicket/v1 endpoint.
 * The response will contain EITHER a `params` object on success OR an `error` object on failure.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket
 * @description Response from authenticating a user ticket.
 */
export interface AuthenticateUserTicketResponse {
	response: {
		params?: AuthenticateUserTicketSuccessParams;
		error?: AuthenticateUserTicketError;
	};
}
