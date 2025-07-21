/***
 * JSDoc type definitions for the Steam Web API's ISteamPublishedItemVoting.
 * @see https://partner.steamgames.com/doc/webapi/ISteamPublishedItemVoting
 */

// ---- Helper Interfaces ----

/*** Represents a user's specific vote on a single published item.
 * @description Details a user's voting and reporting status for an item.
 */
export interface UserVote {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the published file.
	 */
	publishedfileid: string;
	/**
	 * @description True if the user voted 'up' for this item.
	 */
	vote_for: boolean;
	/**
	 * @description True if the user voted 'down' for this item.
	 */
	vote_against: boolean;
	/**
	 * @description True if the user reported this item as inappropriate.
	 */
	report_inappropriate: boolean;
}

/*** Represents the aggregate voting summary for a single published item.
 * @description Contains the total vote counts and score for an item.
 */
export interface ItemVote {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the published file.
	 */
	publishedfileid: string;
	/**
	 * @minimum 0
	 * @description The total number of 'up' votes.
	 */
	votes_for: number;
	/**
	 * @minimum 0
	 * @description The total number of 'down' votes.
	 */
	votes_against: number;
	/**
	 * @minimum 0
	 * @description The total number of times the item has been reported.
	 */
	reports: number;
	/**
	 * @description The calculated score for the item, typically between 0 and 1.
	 */
	score: number;
}

// ---- API Endpoints ----

/*** Parameters for the ISteamPublishedItemVoting/UserVoteSummary/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamPublishedItemVoting#UserVoteSummary
 * @description Parameters for retrieving a user's votes on a set of published files.
 * @remarks The API expects the `publishedfileids` array to be formatted as `publishedfileids[0]=123&publishedfileids[1]=456`. A helper function may be needed.
 */
export interface UserVoteSummaryRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user whose votes are being queried.
	 */
	steamid: string;
	/**
	 * @description An array of published file IDs to get the user's vote summary for.
	 */
	publishedfileids: string[];
}

/*** The response from the ISteamPublishedItemVoting/UserVoteSummary/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamPublishedItemVoting#UserVoteSummary
 * @description Response containing the user's voting status for the requested items.
 */
export interface UserVoteSummaryResponse {
	response: {
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
		/**
		 * @description An array of vote summaries for the user.
		 */
		votes: UserVote[];
	};
}

/*** Parameters for the ISteamPublishedItemVoting/ItemVoteSummary/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamPublishedItemVoting#ItemVoteSummary
 * @description Parameters for retrieving the aggregate vote summary for a set of published files.
 * @remarks The API expects the `publishedfileids` array to be formatted as `publishedfileids[0]=123&publishedfileids[1]=456`. A helper function may be needed.
 */
export interface ItemVoteSummaryRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user making the request.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID the items belong to.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The number of items being queried. Must match the length of `publishedfileids`.
	 */
	count: number;
	/**
	 * @description An array of published file IDs to get the aggregate vote summary for.
	 */
	publishedfileids: string[];
}

/*** The response from the ISteamPublishedItemVoting/ItemVoteSummary/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamPublishedItemVoting#ItemVoteSummary
 * @description Response containing the aggregate vote summaries for the requested items.
 */
export interface ItemVoteSummaryResponse {
	response: {
		/**
		 * @description True if the request was successful.
		 */
		success: boolean;
		/**
		 * @description An array of aggregate vote summaries for the items.
		 */
		votes: ItemVote[];
	};
}
