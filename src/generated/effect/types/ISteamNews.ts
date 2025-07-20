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

export type NewsItem = ET.Type<typeof NewsItem>;
export const NewsItem = ES.Struct({
	gid: ES.String,
	title: ES.String,
	url: ES.String,
	is_external_url: ES.Boolean,
	author: ES.String,
	contents: ES.String,
	feedlabel: ES.String,
	date: ES.Number,
	feedname: ES.String,
	feed_type: ES.Number,
	appid: ES.Number.pipe(ES.greaterThanOrEqualTo(1)),
});

export type GetNewsForAppResponse_properties_appnews = ET.Type<
	typeof GetNewsForAppResponse_properties_appnews
>;
export const GetNewsForAppResponse_properties_appnews = ES.Struct({
	appid: ES.Number.pipe(ES.greaterThanOrEqualTo(1)),
	newsitems: ES.Array(NewsItem),
});

export type GetNewsForAppResponse = ET.Type<typeof GetNewsForAppResponse>;
export const GetNewsForAppResponse = ES.Struct({
	appnews: GetNewsForAppResponse_properties_appnews,
});
