// THIS FILE IS AUTO-GENERATED FOR EFFECT. DO NOT EDIT.

import { Schema as ET } from "@effect/schema/Schema";
import { Schema as ES } from "@effect/schema";

export type GetNewsForAppRequest = ET.Type<typeof GetNewsForAppRequest>;
export const GetNewsForAppRequest = ES.Struct({
	appid: ES.Number.pipe(ES.greaterThanOrEqualTo(1)),
	maxlength: ES.optional(ES.Number.pipe(ES.greaterThanOrEqualTo(0))),
	enddate: ES.optional(ES.Number),
	count: ES.optional(ES.Number.pipe(ES.greaterThanOrEqualTo(0))),
	feeds: ES.optional(ES.String),
	tags: ES.optional(ES.String),
});

export type NewsItem_properties_title = ET.Type<
	typeof NewsItem_properties_title
>;
export const NewsItem_properties_title = ES.String;

export type NewsItem_properties_url = ET.Type<typeof NewsItem_properties_url>;
export const NewsItem_properties_url = ES.String;

export type NewsItem_properties_is_external_url = ET.Type<
	typeof NewsItem_properties_is_external_url
>;
export const NewsItem_properties_is_external_url = ES.Boolean;

export type NewsItem_properties_author = ET.Type<
	typeof NewsItem_properties_author
>;
export const NewsItem_properties_author = ES.String;

export type NewsItem_properties_contents = ET.Type<
	typeof NewsItem_properties_contents
>;
export const NewsItem_properties_contents = ES.String;

export type NewsItem_properties_feedlabel = ET.Type<
	typeof NewsItem_properties_feedlabel
>;
export const NewsItem_properties_feedlabel = ES.String;

export type NewsItem_properties_date = ET.Type<typeof NewsItem_properties_date>;
export const NewsItem_properties_date = ES.Number;

export type NewsItem_properties_feedname = ET.Type<
	typeof NewsItem_properties_feedname
>;
export const NewsItem_properties_feedname = ES.String;

export type NewsItem_properties_feed_type = ET.Type<
	typeof NewsItem_properties_feed_type
>;
export const NewsItem_properties_feed_type = ES.Number;

export type NewsItem_properties_appid = ET.Type<
	typeof NewsItem_properties_appid
>;
export const NewsItem_properties_appid = ES.Number.pipe(
	ES.greaterThanOrEqualTo(1)
);

export type GetNewsForAppResponse_properties_appnews_properties_appid = ET.Type<
	typeof GetNewsForAppResponse_properties_appnews_properties_appid
>;
export const GetNewsForAppResponse_properties_appnews_properties_appid =
	ES.Number.pipe(ES.greaterThanOrEqualTo(1));

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	ES.String;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	ES.String;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	ES.Boolean;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	ES.String;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	ES.String;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	ES.String;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	ES.Number;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	ES.String;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	ES.Number;

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	ET.Type<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	ES.Number.pipe(ES.greaterThanOrEqualTo(1));
