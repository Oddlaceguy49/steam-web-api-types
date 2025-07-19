// THIS FILE IS AUTO-GENERATED FOR TYPES. DO NOT EDIT.

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

/*** The response from the ISteamUserAuth/AuthenticateUserTicket/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket
 * @description Response from authenticating a user ticket.
 */
export interface AuthenticateUserTicketResponse {
	response: {
		/**
		 * @pattern ^[0-9]{17}$
		 * @description The user's 64-bit SteamID if the ticket is valid.
		 */
		steamid?: string;
		error?: {
			/**
			 * @description Error code if authentication fails.
			 */
			errorcode: number;
			/**
			 * @minLength 1
			 * @description Error description if authentication fails.
			 */
			errordesc: string;
		};
	};
}
