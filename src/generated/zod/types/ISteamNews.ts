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

export type NewsItem = z.infer<typeof NewsItem>;
export const NewsItem = z.object({
	gid: z.string(),
	title: z.string(),
	url: z.string(),
	is_external_url: z.boolean(),
	author: z.string(),
	contents: z.string(),
	feedlabel: z.string(),
	date: z.number(),
	feedname: z.string(),
	feed_type: z.number(),
	appid: z.number().min(1),
});

export type GetNewsForAppResponse_properties_appnews = z.infer<
	typeof GetNewsForAppResponse_properties_appnews
>;
export const GetNewsForAppResponse_properties_appnews = z.object({
	appid: z.number().min(1),
	newsitems: z.array(NewsItem),
});

export type GetNewsForAppResponse = z.infer<typeof GetNewsForAppResponse>;
export const GetNewsForAppResponse = z.object({
	appnews: GetNewsForAppResponse_properties_appnews,
});
