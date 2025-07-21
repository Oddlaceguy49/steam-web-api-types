/***
 * JSDoc type definitions for the Steam Web API's ISteamUserStats.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats
 */

// ---- Helper Interfaces ----

/*** Represents a player's achievement status for a game.
 * @description Contains the achievement's name, whether it's unlocked, and when it was unlocked.
 */
export interface PlayerAchievement {
	/**
	 * @description The API name of the achievement.
	 */
	apiname: string;
	/**
	 * @minimum 0
	 * @maximum 1
	 * @description Whether the player has unlocked the achievement (1 for true, 0 for false).
	 */
	achieved: number;
	/**
	 * @format unix-timestamp
	 * @description The Unix timestamp when the achievement was unlocked.
	 */
	unlocktime: number;
}

/*** Represents a player's statistic for a game.
 * @description The name and value of a single player statistic.
 */
export interface PlayerStat {
	/**
	 * @description The API name of the statistic.
	 */
	name: string;
	/**
	 * @description The current value of the statistic.
	 */
	value: number;
}

/*** Represents a global achievement's unlock percentage.
 * @description Contains the achievement's name and its global unlock percentage.
 */
export interface GlobalAchievement {
	/**
	 * @description The API name of the achievement.
	 */
	name: string;
	/**
	 * @description The global unlock percentage for this achievement.
	 */
	percent: number;
}

/*** Represents the schema definition for a single statistic.
 * @description Contains metadata for a game statistic as defined in the game's schema.
 */
export interface StatDefinition {
	/**
	 * @description The API name of the statistic.
	 */
	name: string;
	/**
	 * @description The default value of the statistic.
	 */
	defaultvalue: number;
	/**
	 * @description The localized display name of the statistic.
	 */
	displayName: string;
}

/*** Represents the schema definition for a single achievement.
 * @description Contains metadata for a game achievement as defined in the game's schema.
 */
export interface AchievementDefinition {
	/**
	 * @description The API name of the achievement.
	 */
	name: string;
	/**
	 * @description The localized display name of the achievement.
	 */
	displayName: string;
	/**
	 * @minimum 0
	 * @maximum 1
	 * @description Whether the achievement is hidden (1 for true, 0 for false).
	 */
	hidden: number;
	/**
	 * @description The localized description of the achievement.
	 */
	description: string;
	/**
	 * @format url
	 * @description The URL for the achievement's colored icon.
	 */
	icon: string;
	/**
	 * @format url
	 * @description The URL for the achievement's grayscale icon (for when it's locked).
	 */
	icongray: string;
}

// ---- API Endpoints ----

/*** Parameters for the ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetGlobalAchievementPercentagesForApp
 * @description Parameters for retrieving the global unlock percentages for all achievements in a game.
 */
export interface GetGlobalAchievementPercentagesForAppRequest {
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	gameid: number;
}

/*** The response from the ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetGlobalAchievementPercentagesForApp
 * @description Response containing a list of all achievements and their global unlock percentages.
 */
export interface GetGlobalAchievementPercentagesForAppResponse {
	achievementpercentages: {
		achievements: GlobalAchievement[];
	};
}

/*** Parameters for the ISteamUserStats/GetGlobalStatsForGame/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetGlobalStatsForGame
 * @description Parameters for retrieving global stats for a game.
 * @remarks The API expects the `name` array to be formatted as `name[0]=stat1&name[1]=stat2`. A helper function may be needed.
 */
export interface GetGlobalStatsForGameRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The number of stat names being requested. Must match the length of `name`.
	 */
	count: number;
	/**
	 * @description An array of the API names of the stats to retrieve.
	 */
	name: string[];
	/**
	 * @format unix-timestamp
	 * @description The start date for the query. Optional.
	 */
	startdate?: number;
	/**
	 * @format unix-timestamp
	 * @description The end date for the query. Optional.
	 */
	enddate?: number;
}

/*** The response from the ISteamUserStats/GetGlobalStatsForGame/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetGlobalStatsForGame
 * @description Response containing the total values for the requested global stats.
 */
export interface GetGlobalStatsForGameResponse {
	response: {
		/**
		 * @minimum 1
		 * @description A result code for the request.
		 */
		result: number;
		/**
		 * @description A dictionary where keys are the requested stat names and values are objects containing the total.
		 */
		globalstats: Record<
			string,
			{
				/**
				 * @pattern "^[0-9]+$"
				 * @description The total aggregate value of the stat, returned as a string.
				 */
				total: string;
			}
		>;
	};
}

/*** Parameters for the ISteamUserStats/GetNumberOfCurrentPlayers/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetNumberOfCurrentPlayers
 * @description Parameters for retrieving the current number of players for a game.
 */
export interface GetNumberOfCurrentPlayersRequest {
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
}

/*** The response from the ISteamUserStats/GetNumberOfCurrentPlayers/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetNumberOfCurrentPlayers
 * @description Response containing the current player count.
 */
export interface GetNumberOfCurrentPlayersResponse {
	response: {
		/**
		 * @minimum 0
		 * @description The current number of players in the game.
		 */
		player_count: number;
		/**
		 * @minimum 1
		 * @description A result code for the request.
		 */
		result: number;
	};
}

/*** Parameters for the ISteamUserStats/GetPlayerAchievements/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetPlayerAchievements
 * @description Parameters for retrieving a user's achievements for a game.
 */
export interface GetPlayerAchievementsRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description The language for localization. Optional.
	 */
	l?: string;
}

/*** The response from the ISteamUserStats/GetPlayerAchievements/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetPlayerAchievements
 * @description Response containing a user's achievements for a game.
 */
export interface GetPlayerAchievementsResponse {
	playerstats: {
		/**
		 * @pattern "^[0-9]{17}$"
		 * @description The 64-bit SteamID of the user.
		 */
		steamID: string;
		/**
		 * @description The name of the game.
		 */
		gameName: string;
		/**
		 * @description An array of the player's achievements. May be omitted if the profile is private.
		 */
		achievements?: PlayerAchievement[];
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
		/**
		 * @description An error message, if `success` is false.
		 */
		message?: string;
	};
}

/*** Parameters for the ISteamUserStats/GetSchemaForGame/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetSchemaForGame
 * @description Parameters for retrieving the official game schema (stats and achievements).
 */
export interface GetSchemaForGameRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description The language for localization. Optional.
	 */
	l?: string;
}

/*** The response from the ISteamUserStats/GetSchemaForGame/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetSchemaForGame
 * @description Response containing the game's defined stats and achievements.
 */
export interface GetSchemaForGameResponse {
	game: {
		/**
		 * @description The name of the game.
		 */
		gameName: string;
		/**
		 * @description The current version of the game's schema.
		 */
		gameVersion: string;
		availableGameStats: {
			/**
			 * @description An array of stat definitions.
			 */
			stats: StatDefinition[];
			/**
			 * @description An array of achievement definitions.
			 */
			achievements: AchievementDefinition[];
		};
	};
}

/*** Parameters for the ISteamUserStats/GetUserStatsForGame/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetUserStatsForGame
 * @description Parameters for retrieving a user's stats for a game.
 */
export interface GetUserStatsForGameRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
}

/*** The response from the ISteamUserStats/GetUserStatsForGame/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetUserStatsForGame
 * @description Response containing a user's stats for a game.
 */
export interface GetUserStatsForGameResponse {
	playerstats: {
		/**
		 * @pattern "^[0-9]{17}$"
		 * @description The 64-bit SteamID of the user.
		 */
		steamID: string;
		/**
		 * @description The name of the game.
		 */
		gameName: string;
		/**
		 * @description An array of the player's stats. May be omitted if the profile is private.
		 */
		stats?: PlayerStat[];
	};
}
