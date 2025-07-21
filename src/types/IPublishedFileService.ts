/***
 * JSDoc type definitions for the Steam Web API's IPublishedFileService.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService
 */

// ---- Helper Interfaces ----

/*** Represents a tag on a published file.
 * @description A key-value pair representing a tag, used for categorization and filtering.
 */
export interface PublishedFileTag {
	/**
	 * @description The raw tag string.
	 */
	tag: string;
	/**
	 * @description The user-friendly, localized display name for the tag. Optional.
	 */
	display_name?: string;
}

/*** Represents voting data for a published file.
 * @description Aggregated voting results for a Workshop item.
 */
export interface PublishedFileVoteData {
	/**
	 * @description The item's score, typically a value between 0 and 1.
	 */
	score: number;
	/**
	 * @minimum 0
	 * @description The number of 'up' votes.
	 */
	votes_up: number;
	/**
	 * @minimum 0
	 * @description The number of 'down' votes.
	 */
	votes_down: number;
}

/*** Represents the full details of a published file (e.g., a Workshop item).
 * @description A comprehensive object containing all metadata for a single published file.
 */
export interface PublishedFileDetails {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The unique 64-bit ID of the published file.
	 */
	publishedfileid: string;
	/**
	 * @minimum 1
	 * @description The result code for this specific file in a query.
	 */
	result: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who created the file.
	 */
	creator: string;
	/**
	 * @minimum 1
	 * @description The AppID of the application that created the file.
	 */
	creator_app_id: number;
	/**
	 * @minimum 1
	 * @description The AppID of the application that will consume the file.
	 */
	consumer_app_id: number;
	/**
	 * @description The original filename of the content.
	 */
	filename: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The size of the file in bytes.
	 */
	file_size: string;
	/**
	 * @format url
	 * @description A time-limited URL for downloading the file content.
	 */
	file_url: string;
	/**
	 * @format url
	 * @description A time-limited URL for downloading the preview image.
	 */
	preview_url: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A handle to the file content in Steam's content delivery network.
	 */
	hcontent_file: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A handle to the preview image content.
	 */
	hcontent_preview: string;
	/**
	 * @description The title of the published file.
	 */
	title: string;
	/**
	 * @description The description of the published file.
	 */
	description: string;
	/**
	 * @format unix-timestamp
	 * @description The time the file was created.
	 */
	time_created: number;
	/**
	 * @format unix-timestamp
	 * @description The time the file was last updated.
	 */
	time_updated: number;
	/**
	 * @minimum 0
	 * @maximum 2
	 * @description The visibility state of the file (0: Public, 1: Friends Only, 2: Private).
	 */
	visibility: number;
	/**
	 * @description True if the item is banned.
	 */
	banned: boolean;
	/**
	 * @description The reason the item was banned, if applicable.
	 */
	ban_reason: string;
	/**
	 * @minimum 0
	 * @description The number of current subscribers.
	 */
	subscriptions: number;
	/**
	 * @minimum 0
	 * @description The number of users who have favorited this item.
	 */
	favorited: number;
	/**
	 * @minimum 0
	 * @description The number of lifetime subscribers.
	 */
	lifetime_subscriptions: number;
	/**
	 * @minimum 0
	 * @description The number of lifetime favorites.
	 */
	lifetime_favorited: number;
	/**
	 * @minimum 0
	 * @description The number of times the item has been viewed.
	 */
	views: number;
	/**
	 * @description An array of tags associated with the file.
	 */
	tags: PublishedFileTag[];
	/**
	 * @description Voting data for the item. Only present if requested.
	 */
	vote_data?: PublishedFileVoteData;
	/**
	 * @description Developer-specific metadata. Only present if requested.
	 */
	metadata?: string;
}

/*** Represents a key-value pair for tagging workshop items.
 * @description Used in the `required_kv_tags` parameter for QueryFiles.
 */
export interface KVTag {
	key: string;
	value: string;
}

// ---- API Endpoints ----

/*** Parameters for the IPublishedFileService/QueryFiles/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#QueryFiles
 * @description Parameters for searching and filtering published files.
 */
export interface QueryFilesRequest {
	key: string;
	/**
	 * @minimum 0
	 * @description The type of query to perform (e.g., 0: rank by vote, 9: creator's files).
	 */
	query_type: number;
	/**
	 * @minimum 1
	 * @description The current page of results.
	 */
	page?: number;
	/**
	 * @pattern "^\*|[a-zA-Z0-9+=/]+$"
	 * @description A cursor for paging through results. Use '*' for the first page.
	 */
	cursor?: string;
	/**
	 * @minimum 1
	 * @description The number of results to return per page.
	 */
	numperpage?: number;
	/**
	 * @minimum 1
	 * @description The AppID of the app that created the items.
	 */
	creator_appid: number;
	/**
	 * @minimum 1
	 * @description The AppID of the app that is consuming the items.
	 */
	appid: number;
	/**
	 * @description A comma-separated list of tags that all results must have.
	 */
	requiredtags?: string;
	/**
	 * @description A comma-separated list of tags that all results must not have.
	 */
	excludedtags?: string;
	/**
	 * @description If true, results must match all `requiredtags`. Defaults to true.
	 */
	match_all_tags?: boolean;
	/**
	 * @description A comma-separated list of required flags.
	 */
	required_flags?: string;
	/**
	 * @description A comma-separated list of omitted flags.
	 */
	omitted_flags?: string;
	/**
	 * @description Text to match in the title or description.
	 */
	search_text?: string;
	/**
	 * @minimum 0
	 * @description The type of file to search for (e.g., 0: Community, 5: Screenshot).
	 */
	filetype?: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description Return files that are children of this file ID.
	 */
	child_publishedfileid?: string;
	/**
	 * @minimum 1
	 * @description The number of days to get trending items from (for some query types).
	 */
	days?: number;
	/**
	 * @description If true, only returns votes from the past `days`.
	 */
	include_recent_votes_only?: boolean;
	/**
	 * @minimum 0
	 * @description The maximum age of cached results to be returned, in seconds.
	 */
	cache_max_age_seconds?: number;
	/**
	 * @description A JSON-encoded string representing an array of `KVTag` objects to match.
	 */
	required_kv_tags?: string;
	/**
	 * @description True to return voting data.
	 */
	return_vote_data?: boolean;
	/**
	 * @description True to return tags.
	 */
	return_tags?: boolean;
	/**
	 * @description True to return key-value tags.
	 */
	return_kv_tags?: boolean;
	/**
	 * @description True to return preview images and videos.
	 */
	return_previews?: boolean;
	/**
	 * @description True to return child item IDs.
	 */
	return_children?: boolean;
	/**
	 * @description True to return the short description.
	 */
	return_short_description?: boolean;
	/**
	 * @description True to return item-for-sale data.
	 */
	return_for_sale_data?: boolean;
	/**
	 * @description True to return developer metadata.
	 */
	return_metadata?: boolean;
	/**
	 * @description True to return playtime stats.
	 */
	return_playtime_stats?: boolean;
}

/*** The response from the IPublishedFileService/QueryFiles/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#QueryFiles
 * @description Response containing a list of published files matching the query.
 */
export interface QueryFilesResponse {
	response: {
		/**
		 * @minimum 0
		 * @description The total number of matching files.
		 */
		total: number;
		/**
		 * @description An array of published file details.
		 */
		publishedfiledetails: PublishedFileDetails[];
		/**
		 * @description The cursor to use for the next page of results. Only present if there are more results.
		 */
		next_cursor?: string;
	};
}

/*** Parameters for the IPublishedFileService/GetDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#GetDetails
 * @description Parameters for getting details for specific published files.
 * @remarks The API expects array parameters to be formatted as `publishedfileids[0]=123&publishedfileids[1]=456`. A helper function may be needed to format the request.
 */
export interface GetDetailsRequest {
	/**
	 * @description An array of published file IDs to retrieve details for.
	 */
	publishedfileids: string[];
	/**
	 * @description True to include tags in the response.
	 */
	includetags?: boolean;
	/**
	 * @description True to include additional previews (images/videos).
	 */
	includeadditionalpreviews?: boolean;
	/**
	 * @description True to include child item IDs.
	 */
	includechildren?: boolean;
	/**
	 * @description True to include key-value tags.
	 */
	includekvtags?: boolean;
	/**
	 * @description True to include voting data.
	 */
	includevotes?: boolean;
	/**
	 * @description True to return the short description instead of the full one.
	 */
	short_description?: boolean;
	/**
	 * @description True to return item-for-sale data.
	 */
	includeforsaledata?: boolean;
	/**
	 * @description True to return developer metadata.
	 */
	includemetadata?: boolean;
}

/*** The response from the IPublishedFileService/GetDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#GetDetails
 * @description Response containing details for the requested published files.
 */
export interface GetDetailsResponse {
	response: {
		/**
		 * @minimum 0
		 * @description The number of results returned.
		 */
		result_count: number;
		/**
		 * @description An array of published file details.
		 */
		publishedfiledetails: PublishedFileDetails[];
	};
}

/*** Parameters for the IPublishedFileService/Subscribe/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#Subscribe
 * @description Parameters for subscribing a user to a published file.
 */
export interface SubscribeRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user to subscribe.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the published file to subscribe to.
	 */
	publishedfileid: string;
}

/*** The response from the IPublishedFileService/Subscribe/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#Subscribe
 * @description An empty response on success.
 */
export interface SubscribeResponse {
	response: {};
}

/*** Parameters for the IPublishedFileService/Unsubscribe/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#Unsubscribe
 * @description Parameters for unsubscribing a user from a published file.
 */
export interface UnsubscribeRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user to unsubscribe.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid?: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the published file to unsubscribe from.
	 */
	publishedfileid: string;
}

/*** The response from the IPublishedFileService/Unsubscribe/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#Unsubscribe
 * @description An empty response on success.
 */
export interface UnsubscribeResponse {
	response: {};
}

/*** Parameters for the IPublishedFileService/SetDeveloperMetadata/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#SetDeveloperMetadata
 * @description Parameters for setting developer-only metadata on a published file.
 */
export interface SetDeveloperMetadataRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the published file.
	 */
	publishedfileid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @maxLength 5000
	 * @description The metadata string to set.
	 */
	metadata: string;
}

/*** The response from the IPublishedFileService/SetDeveloperMetadata/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#SetDeveloperMetadata
 * @description An empty response on success.
 */
export interface SetDeveloperMetadataResponse {
	response: {};
}

/*** Parameters for the IPublishedFileService/UpdateTags/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#UpdateTags
 * @description Parameters for adding or removing tags from a published file.
 * @remarks The API expects array parameters to be formatted as `add_tags[0]=tag1&remove_tags[0]=tag2`. A helper function may be needed.
 */
export interface UpdateTagsRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the published file.
	 */
	publishedfileid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description An array of tags to add.
	 */
	add_tags: string[];
	/**
	 * @description An array of tags to remove.
	 */
	remove_tags: string[];
}

/*** The response from the IPublishedFileService/UpdateTags/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#UpdateTags
 * @description An empty response on success.
 */
export interface UpdateTagsResponse {
	response: {};
}

/*** Parameters for the IPublishedFileService/UpdateBanStatus/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#UpdateBanStatus
 * @description Parameters for changing the ban status of a published file.
 */
export interface UpdateBanStatusRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The ID of the published file.
	 */
	publishedfileid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description The new ban status.
	 */
	banned: boolean;
	/**
	 * @description The reason for the ban. Required if `banned` is true.
	 */
	ban_reason: string;
}

/*** The response from the IPublishedFileService/UpdateBanStatus/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IPublishedFileService#UpdateBanStatus
 * @description An empty response on success.
 */
export interface UpdateBanStatusResponse {
	response: {};
}
