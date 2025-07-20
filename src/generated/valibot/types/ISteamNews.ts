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

export type NewsItem = v.InferOutput<typeof NewsItem>;
export const NewsItem = v.object({
	gid: v.string(),
	title: v.string(),
	url: v.string(),
	is_external_url: v.boolean(),
	author: v.string(),
	contents: v.string(),
	feedlabel: v.string(),
	date: v.number(),
	feedname: v.string(),
	feed_type: v.number(),
	appid: v.pipe(v.number(), v.minValue(1)),
});

export type GetNewsForAppResponse_properties_appnews = v.InferOutput<
	typeof GetNewsForAppResponse_properties_appnews
>;
export const GetNewsForAppResponse_properties_appnews = v.object({
	appid: v.pipe(v.number(), v.minValue(1)),
	newsitems: v.array(NewsItem),
});

export type GetNewsForAppResponse = v.InferOutput<typeof GetNewsForAppResponse>;
export const GetNewsForAppResponse = v.object({
	appnews: GetNewsForAppResponse_properties_appnews,
});
