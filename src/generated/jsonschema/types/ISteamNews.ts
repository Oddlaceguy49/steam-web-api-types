// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export const GetNewsForAppRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp",
	description: "Parameters for retrieving news for a specific app.",
	$id: "GetNewsForAppRequest",
	type: "object",
	properties: {
		appid: {
			minimum: 1,
			description: "The AppID of the game for which to retrieve news.",
			type: "number",
		},
		maxlength: {
			minimum: 0,
			description:
				"Maximum length for the content to return. If 0, the full content is returned; if less than the full content, a blurb is generated.",
			type: "number",
		},
		enddate: {
			format: "unix",
			description: "Retrieve posts earlier than this Unix epoch timestamp.",
			type: "number",
		},
		count: {
			minimum: 0,
			description: "Number of posts to retrieve (default is 20).",
			type: "number",
		},
		feeds: {
			description: "Comma",
			type: "string",
		},
		tags: {
			description: "Comma",
			type: "string",
		},
	},
	required: ["appid"],
};
export const NewsItem_properties_title = {
	description: "The title of the news item.",
	type: "string",
	$id: "NewsItem_properties_title",
};
export const NewsItem_properties_url = {
	format: "url",
	description: "The URL to the news item.",
	type: "string",
	$id: "NewsItem_properties_url",
};
export const NewsItem_properties_is_external_url = {
	description: "True if the URL is external, false otherwise.",
	type: "boolean",
	$id: "NewsItem_properties_is_external_url",
};
export const NewsItem_properties_author = {
	description: "The author of the news item.",
	type: "string",
	$id: "NewsItem_properties_author",
};
export const NewsItem_properties_contents = {
	description: "The full content of the news item.",
	type: "string",
	$id: "NewsItem_properties_contents",
};
export const NewsItem_properties_feedlabel = {
	description: "The label of the news feed.",
	type: "string",
	$id: "NewsItem_properties_feedlabel",
};
export const NewsItem_properties_date = {
	format: "unix",
	description: "The Unix timestamp of when the news item was published.",
	type: "number",
	$id: "NewsItem_properties_date",
};
export const NewsItem_properties_feedname = {
	description: "The name of the news feed.",
	type: "string",
	$id: "NewsItem_properties_feedname",
};
export const NewsItem_properties_feed_type = {
	description: "The type of the news feed.",
	type: "number",
	$id: "NewsItem_properties_feed_type",
};
export const NewsItem_properties_appid = {
	minimum: 1,
	description: "The AppID associated with the news item.",
	type: "number",
	$id: "NewsItem_properties_appid",
};
export const GetNewsForAppResponse_properties_appnews_properties_appid = {
	minimum: 1,
	description: "The AppID of the game.",
	type: "number",
	$id: "GetNewsForAppResponse_properties_appnews_properties_appid",
};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	{
		description: "The title of the news item.",
		type: "string",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	{
		format: "url",
		description: "The URL to the news item.",
		type: "string",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	{
		description: "True if the URL is external, false otherwise.",
		type: "boolean",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	{
		description: "The author of the news item.",
		type: "string",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	{
		description: "The full content of the news item.",
		type: "string",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	{
		description: "The label of the news feed.",
		type: "string",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	{
		format: "unix",
		description: "The Unix timestamp of when the news item was published.",
		type: "number",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	{
		description: "The name of the news feed.",
		type: "string",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	{
		description: "The type of the news feed.",
		type: "number",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type",
	};
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	{
		minimum: 1,
		description: "The AppID associated with the news item.",
		type: "number",
		$id: "GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid",
	};
