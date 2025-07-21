/***
 * JSDoc type definitions for the Steam Web API's IPlayerService.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService
 */

/*** Parameters for the IPlayerService/GetRecentlyPlayedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 * @description Parameters for retrieving recently played games for a user.
 */
export interface GetRecentlyPlayedGamesRequest {
	/**
	 * @pattern "^[0-9]{17}$"
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
	 * @description Total playtime in the last 2 weeks, in minutes. Can be absent if not played recently.
	 */
	playtime_2weeks?: number;
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
	 * @description True if the game has community visible stats. This field may be absent if stats are private.
	 */
	has_community_visible_stats?: boolean;
	/**
	 * @minimum 0
	 * @description The total playtime on Windows, in minutes.
	 */
	playtime_windows_forever?: number;
	/**
	 * @minimum 0
	 * @description The total playtime on macOS, in minutes.
	 */
	playtime_mac_forever?: number;
	/**
	 * @minimum 0
	 * @description The total playtime on Linux, in minutes.
	 */
	playtime_linux_forever?: number;
}

/*** The response from the IPlayerService/GetRecentlyPlayedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames
 * @description Response containing recently played games for a user.
 */
export interface GetRecentlyPlayedGamesResponse {
	response: {
		/**
		 * @minimum 0
		 * @description The total number of games recorded for the user.
		 */
		total_count: number;
		/**
		 * @description The list of recently played games. This array may be omitted if the user has no recent playtime.
		 */
		games?: RecentlyPlayedGame[];
	};
}

/*** Parameters for the IPlayerService/GetOwnedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetOwnedGames
 * @description Parameters for retrieving a user's owned games.
 */
export interface GetOwnedGamesRequest {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @description Whether to include additional details (name, icon) for each game.
	 */
	include_appinfo?: boolean;
	/**
	 * @description Whether to include playtime for free-to-play games.
	 */
	include_played_free_games?: boolean;
	/**
	 * @description An array of AppIDs to filter the results to. If not provided, all games are returned.
	 */
	appids_filter?: number[];
}

/*** Represents a single game owned by a user.
 * @description Information about a single owned game.
 */
export interface OwnedGame {
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description The name of the game. Only present if `include_appinfo` was true in the request.
	 */
	name?: string;
	/**
	 * @minimum 0
	 * @description Total playtime forever, in minutes.
	 */
	playtime_forever: number;
	/**
	 * @format url
	 * @description The URL for the game's icon. Only present if `include_appinfo` was true.
	 */
	img_icon_url?: string;
	/**
	 * @format url
	 * @description The URL for the game's logo. Only present if `include_appinfo` was true.
	 */
	img_logo_url?: string;
	/**
	 * @description True if the game has community-visible stats. Only present if `include_appinfo` was true.
	 */
	has_community_visible_stats?: boolean;
	/**
	 * @minimum 0
	 * @description Total playtime in the last 2 weeks, in minutes. May be omitted if not played recently.
	 */
	playtime_2weeks?: number;
	/**
	 * @minimum 0
	 * @description The total playtime on Windows, in minutes.
	 */
	playtime_windows_forever?: number;
	/**
	 * @minimum 0
	 * @description The total playtime on macOS, in minutes.
	 */
	playtime_mac_forever?: number;
	/**
	 * @minimum 0
	 * @description The total playtime on Linux, in minutes.
	 */
	playtime_linux_forever?: number;
	/**
	 * @format unix-timestamp
	 * @description The Unix timestamp of the last time the user played this game.
	 */
	rtime_last_played?: number; // CORRECTED: Added this missing optional field.
	/**
	 * @description Indicates if the game is a free weekend or other temporary subscription.
	 */
	has_free_sub?: boolean; // CORRECTED: Added this missing optional field.
}

/*** The response from the IPlayerService/GetOwnedGames/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetOwnedGames
 * @description Response containing a user's list of owned games.
 */
export interface GetOwnedGamesResponse {
	response: {
		/**
		 * @minimum 0
		 * @description The total number of games the user owns.
		 */
		game_count?: number;
		/**
		 * @description The list of games owned by the user. May be omitted if the profile is private.
		 */
		games?: OwnedGame[];
	};
}

/*** Parameters for the IPlayerService/GetSteamLevel/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetSteamLevel
 * @description Parameters for retrieving a user's Steam level.
 */
export interface GetSteamLevelRequest {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
}

/*** The response from the IPlayerService/GetSteamLevel/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetSteamLevel
 * @description Response containing a user's Steam level.
 */
export interface GetSteamLevelResponse {
	response?: {
		/**
		 * @minimum 0
		 * @description The user's Steam level.
		 */
		player_level: number;
	};
}

/*** Parameters for the IPlayerService/GetBadges/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetBadges
 * @description Parameters for retrieving a user's badges.
 */
export interface GetBadgesRequest {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
}

/*** Represents a single badge earned by a user.
 * @description Information about a single badge.
 */
export interface Badge {
	/**
	 * @description The ID of the badge.
	 */
	badgeid: number;
	/**
	 * @description The level of the badge.
	 */
	level: number;
	/**
	 * @format unix-timestamp
	 * @description The Unix timestamp when the badge was completed.
	 */
	completion_time: number;
	/**
	 * @description The amount of XP the badge is worth.
	 */
	xp: number;
	/**
	 * @description The scarcity or rarity of the badge.
	 */
	scarcity: number;
	/**
	 * @minimum 1
	 * @description The AppID associated with the badge, if applicable (e.g., for game-specific badges).
	 */
	appid?: number;
	/**
	 * @description The ID of the community item that awarded this badge, if applicable.
	 */
	communityitemid?: string; // CORRECTED: Added this missing optional field.
	/**
	 * @minimum 0
	 * @description The border color of the badge. Only present for some foil badges.
	 */
	border_color?: number;
}

/*** The response from the IPlayerService/GetBadges/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetBadges
 * @description Response containing a user's badge information.
 */
export interface GetBadgesResponse {
	response?: {
		badges: Badge[];
		player_xp: number;
		player_level: number;
		player_xp_needed_to_level_up: number;
		player_xp_needed_current_level: number;
	};
}

/*** Parameters for the IPlayerService/GetCommunityBadgeProgress/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetCommunityBadgeProgress
 * @description Parameters for retrieving a user's progress toward a community badge.
 */
export interface GetCommunityBadgeProgressRequest {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @description The badge ID to check progress for.
	 */
	badgeid?: number;
}

/*** Represents a single quest for a community badge.
 * @description Information about a single quest's completion status.
 */
export interface Quest {
	questid: number;
	completed: boolean;
}

/*** The response from the IPlayerService/GetCommunityBadgeProgress/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPlayerService#GetCommunityBadgeProgress
 * @description Response containing a user's progress toward a community badge.
 */
export interface GetCommunityBadgeProgressResponse {
	response?: {
		/**
		 * @description A list of quests and their completion status. May be omitted if the user has a private profile or no progress.
		 */
		quests?: Quest[];
	};
}
