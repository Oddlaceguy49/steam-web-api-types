/***
 * JSDoc type definitions for the Steam Web API's ISteamGameServerStats.
 * @see https://partner.steamgames.com/doc/webapi/ISteamGameServerStats
 */

// ---- Helper Interfaces ----

/*** Represents a single statistic for a player.
 * @description The name and value of a player's game statistic.
 */
export interface GameServerStat {
	/**
	 * @description The API name of the statistic.
	 */
	name: string;
	/**
	 * @description The value of the statistic.
	 */
	value: number;
}

/*** Represents a single achievement for a player.
 * @description The name and achieved status of a player's game achievement.
 */
export interface GameServerAchievement {
	/**
	 * @description The API name of the achievement.
	 */
	name: string;
	/**
	 * @minimum 0
	 * @maximum 1
	 * @description Whether the player has unlocked the achievement (1 for true, 0 for false).
	 */
	achieved: number;
}

// ---- API Endpoint ----

/*** Parameters for the ISteamGameServerStats/GetGameServerPlayerStatsForGame/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamGameServerStats#GetGameServerPlayerStatsForGame
 * @description Parameters for retrieving a user's stats for a game from a game server.
 * @remarks The API expects array parameters like `statname` to be formatted as `statname[0]=name1&statname[1]=name2`. A helper function may be needed.
 */
export interface GetGameServerPlayerStatsForGameRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user to get stats for.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The GameID of the game (for mods). This is a 64-bit value.
	 */
	gameid: string;
	/**
	 * @description An array of stat names to retrieve.
	 */
	statname: string[];
	/**
	 * @format unix-timestamp
	 * @description The start of the date range for aggregate stats. Optional.
	 */
	startdate?: number;
	/**
	 * @format unix-timestamp
	 * @description The end of the date range for aggregate stats. Optional.
	 */
	enddate?: number;
}

/*** The response from the ISteamGameServerStats/GetGameServerPlayerStatsForGame/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamGameServerStats#GetGameServerPlayerStatsForGame
 * @description Response containing a player's stats and achievements for a specific game.
 */
export interface GetGameServerPlayerStatsForGameResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @description An error message if the result is not "OK".
		 */
		message?: string;
		/**
		 * @pattern "^[0-9]{17}$"
		 * @description The 64-bit SteamID of the player.
		 */
		steamID?: string;
		/**
		 * @description The name of the game.
		 */
		gameName?: string;
		/**
		 * @description An array of the player's stats.
		 */
		stats?: GameServerStat[];
		/**
		 * @description An array of the player's achievements.
		 */
		achievements?: GameServerAchievement[];
	};
}
