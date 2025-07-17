/*** Parameters for the ISteamNews/GetNewsForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp
 */
export interface GetNewsForAppRequest {
  /** @minimum 1 */
  appid: number;
  /** @minimum 0 */
  maxlength?: number;
  /** @format unix-timestamp */
  enddate?: number;
  /** @minimum 0 */
  count?: number;
  feeds?: string;
  tags?: string;
}

/*** Represents a single news item.
 */
export interface NewsItem {
  /** @pattern ^[0-9]+$ */
  gid: string;
  title: string;
  /** @format url */
  url: string;
  is_external_url: boolean;
  author: string;
  contents: string;
  feedlabel: string;
  /** @format unix-timestamp */
  date: number;
  feedname: string;
  feed_type: number;
  /** @minimum 1 */
  appid: number;
}

/*** The response from the ISteamNews/GetNewsForApp/v2 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp
 */
export interface GetNewsForAppResponse {
  appnews: {
    /** @minimum 1 */
    appid: number;
    newsitems: NewsItem[];
  };
}