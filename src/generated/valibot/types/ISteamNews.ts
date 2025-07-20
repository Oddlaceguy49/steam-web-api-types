// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

/**
 * Parameters for retrieving news for a specific app.
 */
export const GetNewsForAppRequest = v.strictObject({
	appid: v.pipe(v.number(), v.minValue(1)),
	maxlength: v.optional(v.pipe(v.number(), v.minValue(0))),
	enddate: v.optional(v.number()),
	count: v.optional(v.pipe(v.number(), v.minValue(0))),
	feeds: v.optional(v.string()),
	tags: v.optional(v.string()),
});

/**
 * A single news item for a Steam app.
 */
export const NewsItem = v.strictObject({
	gid: v.pipe(v.string(), v.regex(/^[0-9]+$/)),
	title: v.string(),
	url: v.pipe(v.string(), v.url()),
	is_external_url: v.boolean(),
	author: v.string(),
	contents: v.string(),
	feedlabel: v.string(),
	date: v.number(),
	feedname: v.string(),
	feed_type: v.number(),
	appid: v.pipe(v.number(), v.minValue(1)),
});

/**
 * Response containing news items for a specific app.
 */
export const GetNewsForAppResponse = v.strictObject({
	appnews: v.strictObject({
		appid: v.pipe(v.number(), v.minValue(1)),
		newsitems: v.array(
			v.strictObject({
				gid: v.pipe(v.string(), v.regex(/^[0-9]+$/)),
				title: v.string(),
				url: v.pipe(v.string(), v.url()),
				is_external_url: v.boolean(),
				author: v.string(),
				contents: v.string(),
				feedlabel: v.string(),
				date: v.number(),
				feedname: v.string(),
				feed_type: v.number(),
				appid: v.pipe(v.number(), v.minValue(1)),
			})
		),
	}),
});
