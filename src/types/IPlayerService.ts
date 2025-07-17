/*** Parameters for the IPlayerService/GetRecentlyPlayedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 */
export interface GetRecentlyPlayedGamesRequest {
  /** @pattern ^[0-9]{17}$ */
  steamid: string;
  /** @minimum 0 */
  count?: number;
}

/*** Represents a recently played game.
 */
export interface RecentlyPlayedGame {
  /** @minimum 1 */
  appid: number;
  name: string;
  /** @minimum 0 */
  playtime_2weeks: number;
  /** @minimum 0 */
  playtime_forever: number;
  /** @format url */
  img_icon_url: string;
  /** @format url */
  img_logo_url: string;
  has_community_visible_stats: boolean;
}

/*** The response from the ISteamService/GetRecentlyPlayedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 */
export interface GetRecentlyPlayedGamesResponse {
  response: {
    /** @minimum 0 */
    total_count: number;
    games: RecentlyPlayedGame[];
  };
}