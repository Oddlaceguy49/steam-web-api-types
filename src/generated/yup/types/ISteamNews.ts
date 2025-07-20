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

export type NewsItem = y.InferType<typeof NewsItem>;
export const NewsItem = y.object({
	gid: y.string().required(),
	title: y.string().required(),
	url: y.string().required(),
	is_external_url: y.boolean().required(),
	author: y.string().required(),
	contents: y.string().required(),
	feedlabel: y.string().required(),
	date: y.number().required(),
	feedname: y.string().required(),
	feed_type: y.number().required(),
	appid: y.number().required().min(1),
});

export type GetNewsForAppResponse_properties_appnews = y.InferType<
	typeof GetNewsForAppResponse_properties_appnews
>;
export const GetNewsForAppResponse_properties_appnews = y.object({
	appid: y.number().required().min(1),
	newsitems: y.array(NewsItem),
});

export type GetNewsForAppResponse = y.InferType<typeof GetNewsForAppResponse>;
export const GetNewsForAppResponse = y.object({
	appnews: GetNewsForAppResponse_properties_appnews,
});
