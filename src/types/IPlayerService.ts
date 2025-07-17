/*** Parameters for the IPlayerService/GetRecentlyPlayedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 */
export interface GetRecentlyPlayedGamesRequest {
	steamid: string;
	count?: number;
}

/*** Represents a recently played game.
 */
export interface RecentlyPlayedGame {
	appid: number;
	name: string;
	playtime_2weeks: number;
	playtime_forever: number;
	img_icon_url: string;
	img_logo_url: string;
	has_community_visible_stats: boolean;
}

/*** The response from the IPlayerService/GetRecentlyPlayedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 */
export interface GetRecentlyPlayedGamesResponse {
	response: {
		total_count: number;
		games: RecentlyPlayedGame[];
	};
}
