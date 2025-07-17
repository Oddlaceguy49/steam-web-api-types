/*** Parameters for the ISteamUserAuth/AuthenticateUserTicket/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket
 */
export interface AuthenticateUserTicketRequest {
	key: string;
	appid: number;
	ticket: string;
	identity?: string;
}

/*** The response from the ISteamUserAuth/AuthenticateUserTicket/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket
 */
export interface AuthenticateUserTicketResponse {
	response: {
		steamid?: string;
		error?: {
			errorcode: number;
			errordesc: string;
		};
	};
}
