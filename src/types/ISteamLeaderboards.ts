/***
 * JSDoc type definitions for the Steam Web API's ISteamLeaderboards.
 * @see https://partner.steamgames.com/doc/webapi/ISteamLeaderboards
 */

// ---- Helper Interfaces ----

/*** Represents a single entry on a leaderboard.
 * @description Contains the score, rank, and other details for a user's entry.
 */
export interface LeaderboardEntry {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @description The score for this entry.
	 */
	score: number;
	/**
	 * @minimum 1
	 * @description The rank of this entry on the leaderboard.
	 */
	rank: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A handle to the UGC (User Generated Content) associated with this entry.
	 */
	ugcid: string;
	/**
	 * @description A byte array of up to 64 bytes, represented as a string, containing extra data for this entry.
	 */
	details: string;
}

// ---- API Endpoints ----

/*** Parameters for the ISteamLeaderboards/FindOrCreateLeaderboard/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamLeaderboards#FindOrCreateLeaderboard
 * @description Parameters for finding an existing leaderboard or creating a new one.
 */
export interface FindOrCreateLeaderboardRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minLength 1
	 * @description The name of the leaderboard.
	 */
	name: string;
	/**
	 * @pattern "^(asc|desc)$"
	 * @description The sort method for the leaderboard ('asc' for ascending, 'desc' for descending).
	 */
	sortmethod: string;
	/**
	 * @pattern "^(numeric|time_seconds|time_milliseconds)$"
	 * @description The display type for the scores ('numeric', 'time_seconds', or 'time_milliseconds').
	 */
	displaytype: string;
	/**
	 * @description If true, creates the leaderboard if it does not exist. Defaults to true.
	 */
	createifnotfound?: boolean;
	/**
	 * @description If true, scores can only be written by trusted sources (via SetLeaderboardScore). Defaults to false.
	 */
	onlytrustedwrites?: boolean;
}

/*** The response from the ISteamLeaderboards/FindOrCreateLeaderboard/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamLeaderboards#FindOrCreateLeaderboard
 * @description Response containing the details of the found or created leaderboard.
 */
export interface FindOrCreateLeaderboardResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @minimum 1
		 * @description The numeric ID of the leaderboard.
		 */
		leaderboard_id: number;
		/**
		 * @minimum 0
		 * @description The total number of entries on the leaderboard.
		 */
		entry_count: number;
		/**
		 * @description The numeric representation of the sort method (e.g., 1 for Ascending, 2 for Descending).
		 */
		sort_method: number;
		/**
		 * @description The numeric representation of the display type (e.g., 1 for Numeric, 2 for TimeSeconds).
		 */
		display_type: number;
		/**
		 * @description The name of the leaderboard.
		 */
		leaderboard_name: string;
	};
}

/*** Parameters for the ISteamLeaderboards/GetLeaderboardEntries/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamLeaderboards#GetLeaderboardEntries
 * @description Parameters for retrieving a range of entries from a leaderboard.
 */
export interface GetLeaderboardEntriesRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The numeric ID of the leaderboard to retrieve entries from.
	 */
	leaderboardid: number;
	/**
	 * @pattern "^(RequestGlobal|RequestGlobalAroundUser|RequestFriends)$"
	 * @description The type of data request (e.g., global top, around the user, or user's friends).
	 */
	datarequest: string;
	/**
	 * @minimum 1
	 * @description The starting index of the range to retrieve.
	 */
	rangestart: number;
	/**
	 * @minimum 1
	 * @description The ending index of the range to retrieve. The maximum range is 100 entries.
	 */
	rangeend: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user. Required for `RequestGlobalAroundUser` and `RequestFriends`.
	 */
	steamid?: string;
}

/*** The response from the ISteamLeaderboards/GetLeaderboardEntries/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamLeaderboards#GetLeaderboardEntries
 * @description Response containing a list of leaderboard entries.
 */
export interface GetLeaderboardEntriesResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @minimum 1
		 * @description The ID of the leaderboard.
		 */
		leaderboard_id: number;
		/**
		 * @minimum 0
		 * @description The total number of entries on the leaderboard.
		 */
		entry_count: number;
		/**
		 * @description An array of leaderboard entries.
		 */
		entries: LeaderboardEntry[];
	};
}

/*** Parameters for the ISteamLeaderboards/SetLeaderboardScore/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamLeaderboards#SetLeaderboardScore
 * @description Parameters for setting a user's score on a leaderboard.
 */
export interface SetLeaderboardScoreRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The numeric ID of the leaderboard.
	 */
	leaderboardid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user whose score is being set.
	 */
	steamid: string;
	/**
	 * @description The score to set.
	 */
	score: number;
	/**
	 * @pattern "^(KeepBest|ForceUpdate)$"
	 * @description The method for setting the score ('KeepBest' only updates if the new score is better, 'ForceUpdate' always updates).
	 */
	scoremethod: string;
	/**
	 * @description A byte array of up to 64 bytes, represented as a string, to attach to the score.
	 */
	details?: string;
}

/*** The response from the ISteamLeaderboards/SetLeaderboardScore/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamLeaderboards#SetLeaderboardScore
 * @description Response containing the result of the score submission.
 */
export interface SetLeaderboardScoreResponse {
	response: {
		/**
		 * @pattern "^(OK)$"
		 * @description The result of the request. "OK" on success.
		 */
		result: string;
		/**
		 * @minimum 1
		 * @description The ID of the leaderboard.
		 */
		leaderboard_id: number;
		/**
		 * @description The submitted score.
		 */
		score: number;
		/**
		 * @minimum 0
		 * @description The new total number of entries on the leaderboard.
		 */
		leaderboard_entry_count: number;
		/**
		 * @minimum 0
		 * @description The new rank of the user on the leaderboard.
		 */
		leaderboard_rank: number;
		/**
		 * @description True if the user's score was actually changed.
		 */
		score_changed: boolean;
	};
}
