// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

export type GetNewsForAppRequest = v.InferOutput<typeof GetNewsForAppRequest>;
export const GetNewsForAppRequest = v.object({
	appid: v.pipe(v.number(), v.minValue(1)),
	maxlength: v.optional(v.pipe(v.number(), v.minValue(0))),
	enddate: v.optional(v.number()),
	count: v.optional(v.pipe(v.number(), v.minValue(0))),
	feeds: v.optional(v.string()),
	tags: v.optional(v.string()),
});

export type NewsItem_properties_title = v.InferOutput<
	typeof NewsItem_properties_title
>;
export const NewsItem_properties_title = v.string();

export type NewsItem_properties_url = v.InferOutput<
	typeof NewsItem_properties_url
>;
export const NewsItem_properties_url = v.string();

export type NewsItem_properties_is_external_url = v.InferOutput<
	typeof NewsItem_properties_is_external_url
>;
export const NewsItem_properties_is_external_url = v.boolean();

export type NewsItem_properties_author = v.InferOutput<
	typeof NewsItem_properties_author
>;
export const NewsItem_properties_author = v.string();

export type NewsItem_properties_contents = v.InferOutput<
	typeof NewsItem_properties_contents
>;
export const NewsItem_properties_contents = v.string();

export type NewsItem_properties_feedlabel = v.InferOutput<
	typeof NewsItem_properties_feedlabel
>;
export const NewsItem_properties_feedlabel = v.string();

export type NewsItem_properties_date = v.InferOutput<
	typeof NewsItem_properties_date
>;
export const NewsItem_properties_date = v.number();

export type NewsItem_properties_feedname = v.InferOutput<
	typeof NewsItem_properties_feedname
>;
export const NewsItem_properties_feedname = v.string();

export type NewsItem_properties_feed_type = v.InferOutput<
	typeof NewsItem_properties_feed_type
>;
export const NewsItem_properties_feed_type = v.number();

export type NewsItem_properties_appid = v.InferOutput<
	typeof NewsItem_properties_appid
>;
export const NewsItem_properties_appid = v.pipe(v.number(), v.minValue(1));

export type GetNewsForAppResponse_properties_appnews_properties_appid =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_appid
	>;
export const GetNewsForAppResponse_properties_appnews_properties_appid = v.pipe(
	v.number(),
	v.minValue(1)
);

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	v.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	v.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	v.boolean();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	v.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	v.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	v.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	v.number();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	v.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	v.number();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	v.InferOutput<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	v.pipe(v.number(), v.minValue(1));
