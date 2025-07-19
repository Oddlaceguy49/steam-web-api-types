// THIS FILE IS AUTO-GENERATED FOR ZOD. DO NOT EDIT.

import { z } from "zod";

export type GetNewsForAppRequest = z.infer<typeof GetNewsForAppRequest>;
export const GetNewsForAppRequest = z.object({
	appid: z.number().min(1),
	maxlength: z.number().min(0).optional(),
	enddate: z.number().optional(),
	count: z.number().min(0).optional(),
	feeds: z.string().optional(),
	tags: z.string().optional(),
});

export type NewsItem_properties_title = z.infer<
	typeof NewsItem_properties_title
>;
export const NewsItem_properties_title = z.string();

export type NewsItem_properties_url = z.infer<typeof NewsItem_properties_url>;
export const NewsItem_properties_url = z.string();

export type NewsItem_properties_is_external_url = z.infer<
	typeof NewsItem_properties_is_external_url
>;
export const NewsItem_properties_is_external_url = z.boolean();

export type NewsItem_properties_author = z.infer<
	typeof NewsItem_properties_author
>;
export const NewsItem_properties_author = z.string();

export type NewsItem_properties_contents = z.infer<
	typeof NewsItem_properties_contents
>;
export const NewsItem_properties_contents = z.string();

export type NewsItem_properties_feedlabel = z.infer<
	typeof NewsItem_properties_feedlabel
>;
export const NewsItem_properties_feedlabel = z.string();

export type NewsItem_properties_date = z.infer<typeof NewsItem_properties_date>;
export const NewsItem_properties_date = z.number();

export type NewsItem_properties_feedname = z.infer<
	typeof NewsItem_properties_feedname
>;
export const NewsItem_properties_feedname = z.string();

export type NewsItem_properties_feed_type = z.infer<
	typeof NewsItem_properties_feed_type
>;
export const NewsItem_properties_feed_type = z.number();

export type NewsItem_properties_appid = z.infer<
	typeof NewsItem_properties_appid
>;
export const NewsItem_properties_appid = z.number().min(1);

export type GetNewsForAppResponse_properties_appnews_properties_appid = z.infer<
	typeof GetNewsForAppResponse_properties_appnews_properties_appid
>;
export const GetNewsForAppResponse_properties_appnews_properties_appid = z
	.number()
	.min(1);

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	z.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	z.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	z.boolean();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	z.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	z.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	z.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	z.number();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	z.string();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	z.number();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	z.infer<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	z.number().min(1);
