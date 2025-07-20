/*** Parameters for the ISteamNews/GetNewsForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp
 * @description Parameters for retrieving news for a specific app.
 */
export interface GetNewsForAppRequest {
	/**
	 * @minimum 1
	 * @description The AppID of the game for which to retrieve news.
	 */
	appid: number;
	/**
	 * @minimum 0
	 * @description Maximum length for the content to return. If 0, the full content is returned; if less than the full content, a blurb is generated.
	 */
	maxlength?: number;
	/**
	 * @format unix-timestamp
	 * @description Retrieve posts earlier than this Unix epoch timestamp.
	 */
	enddate?: number;
	/**
	 * @minimum 0
	 * @description Number of posts to retrieve (default is 20).
	 */
	count?: number;
	/**
	 * @description Comma-separated list of feed names to return news for.
	 */
	feeds?: string;
	/**
	 * @description Comma-separated list of tags to filter by (e.g., 'patchnodes').
	 */
	tags?: string;
}

/*** Represents a single news item.
 * @description A single news item for a Steam app.
 */
export interface NewsItem {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The unique ID of the news item.
	 */
	gid: string;
	/**
	 * @description The title of the news item.
	 */
	title: string;
	/**
	 * @format url
	 * @description The URL to the news item.
	 */
	url: string;
	/**
	 * @description True if the URL is external, false otherwise.
	 */
	is_external_url: boolean;
	/**
	 * @description The author of the news item. Can be an empty string.
	 */
	author: string;
	/**
	 * @description The full content of the news item.
	 */
	contents: string;
	/**
	 * @description The label of the news feed.
	 */
	feedlabel: string;
	/**
	 * @format unix-timestamp
	 * @description The Unix timestamp of when the news item was published.
	 */
	date: number;
	/**
	 * @description The name of the news feed.
	 */
	feedname: string;
	/**
	 * @description The type of the news feed.
	 */
	feed_type: number;
	/**
	 * @minimum 1
	 * @description The AppID associated with the news item.
	 */
	appid: number;
	/**
	 * @description An array of tags associated with the news item (e.g., 'patchnotes'). May be omitted if no tags are present.
	 */
	tags?: string[];
}

/*** The response from the ISteamNews/GetNewsForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp
 * @description Response containing news items for a specific app.
 */
export interface GetNewsForAppResponse {
	appnews?: {
		/**
		 * @minimum 1
		 * @description The AppID of the game.
		 */
		appid: number;
		newsitems: NewsItem[];
		/**
		 * @description The total number of news items available.
		 */
		count: number;
	};
}

/*** Parameters for the ISteamNews/GetNewsForAppAuthed/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForAppAuthed
 * @description Authenticated parameters for retrieving news for a specific app.
 */
export interface GetNewsForAppAuthedRequest {
	/**
	 * @minLength 1
	 * @description Your Steamworks Web API authentication key.
	 */
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game for which to retrieve news.
	 */
	appid: number;
	/**
	 * @minimum 0
	 * @description Maximum length for the content to return.
	 */
	maxlength?: number;
	/**
	 * @format unix-timestamp
	 * @description Retrieve posts earlier than this Unix epoch timestamp.
	 */
	enddate?: number;
	/**
	 * @minimum 0
	 * @description Number of posts to retrieve.
	 */
	count?: number;
	/**
	 * @description Comma-separated list of feed names to return news for.
	 */
	feeds?: string;
}

/**
 * The response from the ISteamNews/GetNewsForAppAuthed/v1 endpoint.
 * The structure is identical to GetNewsForAppResponse.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForAppAuthed
 */
export type GetNewsForAppAuthedResponse = GetNewsForAppResponse;
