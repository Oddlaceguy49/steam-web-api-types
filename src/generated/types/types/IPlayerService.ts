// THIS FILE IS AUTO-GENERATED FOR TYPES. DO NOT EDIT.

/*** Parameters for the IPlayerService/GetRecentlyPlayedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 * @description Parameters for retrieving recently played games for a user.
 */
export interface GetRecentlyPlayedGamesRequest {
	/**
	 * @pattern ^[0-9]{17}$
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @minimum 0
	 * @description The number of games to return (0 to 100).
	 */
	count?: number;
}

/*** Represents a recently played game.
 * @description Information about a recently played game.
 */
export interface RecentlyPlayedGame {
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description The name of the game.
	 */
	name: string;
	/**
	 * @minimum 0
	 * @description Total playtime in the last 2 weeks, in minutes.
	 */
	playtime_2weeks: number;
	/**
	 * @minimum 0
	 * @description Total playtime forever, in minutes.
	 */
	playtime_forever: number;
	/**
	 * @format url
	 * @description The URL to the game's icon.
	 */
	img_icon_url: string;
	/**
	 * @format url
	 * @description The URL to the game's logo.
	 */
	img_logo_url: string;
	/**
	 * @description True if the game has community visible stats.
	 */
	has_community_visible_stats: boolean;
}

/*** The response from the ISteamService/GetRecentlyPlayedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 * @description Response containing recently played games for a user.
 */
export interface GetRecentlyPlayedGamesResponse {
	response: GetRecentlyPlayedGamesResponse_properties_response;
}

export interface GetRecentlyPlayedGamesResponse_properties_response {
	/**
	 * @minimum 0
	 * @description The total number of games.
	 */
	total_count: number;
	games: RecentlyPlayedGame[];
}
