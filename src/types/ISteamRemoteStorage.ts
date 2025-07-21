/***
 * JSDoc type definitions for the Steam Web API's ISteamRemoteStorage.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage
 */

// ---- Helper Interfaces ----

/*** Represents a tag on a published file.
 * @description A key-value pair used for categorization.
 */
export interface PublishedFileTag {
	/**
	 * @description The raw tag string.
	 */
	tag: string;
}

/*** Represents the full details of a published file (e.g., a Workshop item).
 * @description A comprehensive object containing all metadata for a single published file. Not all fields are returned by all endpoints.
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
	 * @description The size of the file in bytes, as a string.
	 */
	file_size: string;
	/**
	 * @format url
	 * @description A time-limited URL for downloading the file content.
	 */
	file_url?: string;
	/**
	 * @format url
	 * @description A time-limited URL for downloading the preview image.
	 */
	preview_url?: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A handle to the file content in Steam's content delivery network.
	 */
	hcontent_file?: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A handle to the preview image content.
	 */
	hcontent_preview?: string;
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
}

/*** Represents a child item within a collection.
 * @description Contains the ID and sort order of a child item in a Workshop collection.
 */
export interface CollectionChild {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the child published file.
	 */
	publishedfileid: string;
	/**
	 * @minimum 0
	 * @description The sort order of this item within the collection.
	 */
	sortorder: number;
}

/*** Represents the details of a Workshop collection.
 * @description A container for a collection's ID and its child items.
 */
export interface CollectionDetails {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the collection.
	 */
	publishedfileid: string;
	/**
	 * @minimum 1
	 * @description The result code for this specific collection in a query.
	 */
	result: number;
	/**
	 * @description An array of child items within the collection.
	 */
	children: CollectionChild[];
}

/*** Represents the details of a UGC (User Generated Content) file.
 * @description Contains download information for a raw UGC file, such as a screenshot.
 */
export interface UGCFileDetails {
	/**
	 * @description The name of the file.
	 */
	filename: string;
	/**
	 * @format url
	 * @description A time-limited URL to download the file.
	 */
	url: string;
	/**
	 * @minimum 0
	 * @description The size of the file in bytes.
	 */
	size: number;
}

/*** Represents a file a user is subscribed to.
 * @description A summary of a subscribed item, including when the user subscribed.
 */
export interface SubscribedFile {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the published file.
	 */
	publishedfileid: string;
	/**
	 * @format unix-timestamp
	 * @description The time the user subscribed to the item.
	 */
	time_subscribed: number;
	/**
	 * @minimum 1
	 * @description The AppID of the application that created the file.
	 */
	creator_appid: number;
	/**
	 * @minimum 1
	 * @description The AppID of the application that is consuming the file.
	 */
	consumer_appid: number;
}

// ---- API Endpoints ----

/*** Parameters for the ISteamRemoteStorage/GetCollectionDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#GetCollectionDetails
 * @description Parameters for retrieving the contents of a Workshop collection.
 * @remarks The API expects the `publishedfileids` array to be formatted as `publishedfileids[0]=123&publishedfileids[1]=456`. A helper function may be needed.
 */
export interface GetCollectionDetailsRequest {
	/**
	 * @minimum 1
	 * @description The number of collection IDs being requested. Must match the length of `publishedfileids`.
	 */
	collectioncount: number;
	/**
	 * @description An array of published file IDs that are collections.
	 */
	publishedfileids: string[];
}

/*** The response from the ISteamRemoteStorage/GetCollectionDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#GetCollectionDetails
 * @description Response containing the details for one or more collections.
 */
export interface GetCollectionDetailsResponse {
	response: {
		/**
		 * @minimum 1
		 * @description A result code for the overall request.
		 */
		result: number;
		/**
		 * @minimum 0
		 * @description The number of collections returned.
		 */
		resultcount: number;
		/**
		 * @description An array of collection details.
		 */
		collectiondetails: CollectionDetails[];
	};
}

/*** Parameters for the ISteamRemoteStorage/GetPublishedFileDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#GetPublishedFileDetails
 * @description Parameters for retrieving details about one or more published files.
 * @remarks The API expects the `publishedfileids` array to be formatted as `publishedfileids[0]=123&publishedfileids[1]=456`. A helper function may be needed.
 */
export interface GetPublishedFileDetailsRequest {
	/**
	 * @minimum 1
	 * @description The number of file IDs being requested. Must match the length of `publishedfileids`.
	 */
	itemcount: number;
	/**
	 * @description An array of published file IDs to retrieve details for.
	 */
	publishedfileids: string[];
}

/*** The response from the ISteamRemoteStorage/GetPublishedFileDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#GetPublishedFileDetails
 * @description Response containing details for the requested published files.
 */
export interface GetPublishedFileDetailsResponse {
	response: {
		/**
		 * @minimum 1
		 * @description A result code for the overall request.
		 */
		result: number;
		/**
		 * @minimum 0
		 * @description The number of files returned.
		 */
		resultcount: number;
		/**
		 * @description An array of published file details.
		 */
		publishedfiledetails: PublishedFileDetails[];
	};
}

/*** Parameters for the ISteamRemoteStorage/GetUGCFileDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#GetUGCFileDetails
 * @description Parameters for retrieving metadata for a single UGC file.
 */
export interface GetUGCFileDetailsRequest {
	key?: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who owns the file. Required if not using a key.
	 */
	steamid?: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the UGC file.
	 */
	ugcid: string;
	/**
	 * @minimum 1
	 * @description The AppID the file is associated with.
	 */
	appid: number;
}

/*** The response from the ISteamRemoteStorage/GetUGCFileDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#GetUGCFileDetails
 * @description Response containing the metadata for a UGC file.
 */
export interface GetUGCFileDetailsResponse {
	/**
	 * @description An object containing the file's metadata.
	 */
	data: UGCFileDetails;
	status: {
		/**
		 * @minimum 1
		 * @description A result code for the request.
		 */
		code: number;
	};
}

/*** Parameters for the ISteamRemoteStorage/EnumerateUserPublishedFiles/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#EnumerateUserPublishedFiles
 * @description Parameters for listing the files published by a specific user.
 */
export interface EnumerateUserPublishedFilesRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID to query for.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The page number of the results, for pagination.
	 */
	page?: number;
}

/*** The response from the ISteamRemoteStorage/EnumerateUserPublishedFiles/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#EnumerateUserPublishedFiles
 * @description Response containing a paginated list of a user's published files.
 */
export interface EnumerateUserPublishedFilesResponse {
	response: {
		/**
		 * @minimum 1
		 * @description A result code for the overall request.
		 */
		result: number;
		/**
		 * @minimum 0
		 * @description The total number of files published by the user.
		 */
		total: number;
		/**
		 * @description An array of published file details.
		 */
		publishedfiledetails: PublishedFileDetails[];
	};
}

/*** Parameters for the ISteamRemoteStorage/EnumerateUserSubscribedFiles/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#EnumerateUserSubscribedFiles
 * @description Parameters for listing the files a user is subscribed to.
 */
export interface EnumerateUserSubscribedFilesRequest {
	key: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The AppID to query for.
	 */
	appid: number;
	/**
	 * @minimum 1
	 * @description The page number of the results, for pagination.
	 */
	page?: number;
	/**
	 * @minimum 0
	 * @description The type of list to return.
	 */
	list_type?: number;
}

/*** The response from the ISteamRemoteStorage/EnumerateUserSubscribedFiles/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage#EnumerateUserSubscribedFiles
 * @description Response containing a paginated list of a user's subscribed files.
 */
export interface EnumerateUserSubscribedFilesResponse {
	response: {
		/**
		 * @minimum 1
		 * @description A result code for the overall request.
		 */
		result: number;
		/**
		 * @minimum 0
		 * @description The total number of files the user is subscribed to.
		 */
		total: number;
		/**
		 * @description An array of subscribed file summaries.
		 */
		subscribed: SubscribedFile[];
	};
}
