// THIS FILE IS AUTO-GENERATED FOR TYPES. DO NOT EDIT.

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
	 * @description The author of the news item.
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
}

export interface GetNewsForAppResponse_properties_appnews {
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	newsitems: NewsItem[];
}

/*** The response from the ISteamNews/GetNewsForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp
 * @description Response containing news items for a specific app.
 */
export interface GetNewsForAppResponse {
	appnews: GetNewsForAppResponse_properties_appnews;
}
