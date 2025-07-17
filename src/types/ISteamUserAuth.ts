/*** Parameters for the ISteamUserAuth/AuthenticateUserTicket/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket
 */
export interface AuthenticateUserTicketRequest {
  /** @minLength 1 */
  key: string;
  /** @minimum 1 */
  appid: number;
  /** @minLength 1 */
  ticket: string;
  /** @minLength 1 */
  identity?: string;
}

/*** The response from the ISteamUserAuth/AuthenticateUserTicket/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket
 */
export interface AuthenticateUserTicketResponse {
  response: {
    /** @pattern ^[0-9]{17}$ */
    steamid?: string;
    error?: {
      errorcode: number;
      /** @minLength 1 */
      errordesc: string;
    };
  };
}