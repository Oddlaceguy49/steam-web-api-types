/*** Parameters for the ISteamNews/GetNewsForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp
 */
export interface GetNewsForAppRequest {
	appid: number;
	maxlength?: number;
	enddate?: number;
	count?: number;
	feeds?: string;
	tags?: string;
}

/*** Represents a single news item.
 */
export interface NewsItem {
	gid: string;
	title: string;
	url: string;
	is_external_url: boolean;
	author: string;
	contents: string;
	feedlabel: string;
	date: number;
	feedname: string;
	feed_type: number;
	appid: number;
}

/*** The response from the ISteamNews/GetNewsForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp
 */
export interface GetNewsForAppResponse {
	appnews: {
		appid: number;
		newsitems: NewsItem[];
	};
}
