// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as y from "yup";

export type GetNewsForAppRequest = y.InferType<typeof GetNewsForAppRequest>;
export const GetNewsForAppRequest = y.object({
	appid: y.number().required().min(1),
	maxlength: y.number().required().min(0).optional(),
	enddate: y.number().required().optional(),
	count: y.number().required().min(0).optional(),
	feeds: y.string().required().optional(),
	tags: y.string().required().optional(),
});

export type NewsItem_properties_title = y.InferType<
	typeof NewsItem_properties_title
>;
export const NewsItem_properties_title = y.string().required();

export type NewsItem_properties_url = y.InferType<
	typeof NewsItem_properties_url
>;
export const NewsItem_properties_url = y.string().required();

export type NewsItem_properties_is_external_url = y.InferType<
	typeof NewsItem_properties_is_external_url
>;
export const NewsItem_properties_is_external_url = y.boolean().required();

export type NewsItem_properties_author = y.InferType<
	typeof NewsItem_properties_author
>;
export const NewsItem_properties_author = y.string().required();

export type NewsItem_properties_contents = y.InferType<
	typeof NewsItem_properties_contents
>;
export const NewsItem_properties_contents = y.string().required();

export type NewsItem_properties_feedlabel = y.InferType<
	typeof NewsItem_properties_feedlabel
>;
export const NewsItem_properties_feedlabel = y.string().required();

export type NewsItem_properties_date = y.InferType<
	typeof NewsItem_properties_date
>;
export const NewsItem_properties_date = y.number().required();

export type NewsItem_properties_feedname = y.InferType<
	typeof NewsItem_properties_feedname
>;
export const NewsItem_properties_feedname = y.string().required();

export type NewsItem_properties_feed_type = y.InferType<
	typeof NewsItem_properties_feed_type
>;
export const NewsItem_properties_feed_type = y.number().required();

export type NewsItem_properties_appid = y.InferType<
	typeof NewsItem_properties_appid
>;
export const NewsItem_properties_appid = y.number().required().min(1);

export type GetNewsForAppResponse_properties_appnews_properties_appid =
	y.InferType<typeof GetNewsForAppResponse_properties_appnews_properties_appid>;
export const GetNewsForAppResponse_properties_appnews_properties_appid = y
	.number()
	.required()
	.min(1);

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_title =
	y.string().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_url =
	y.string().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_is_external_url =
	y.boolean().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_author =
	y.string().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_contents =
	y.string().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedlabel =
	y.string().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_date =
	y.number().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feedname =
	y.string().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_feed_type =
	y.number().required();

export type GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	y.InferType<
		typeof GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid
	>;
export const GetNewsForAppResponse_properties_appnews_properties_newsitems_items_properties_appid =
	y.number().required().min(1);
