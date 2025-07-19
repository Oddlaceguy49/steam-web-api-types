// THIS FILE IS AUTO-GENERATED FOR ARKTYPE. DO NOT EDIT.

import { type } from "arktype";

export const GetNewsForAppRequest = type({
	appid: "number>=1",
	"maxlength?": "number>=0",
	"enddate?": "number.epoch",
	"count?": "number>=0",
	"feeds?": "string",
	"tags?": "string",
});
export type GetNewsForAppRequestType = typeof GetNewsForAppRequest.infer;

export const NewsItem = type({
	gid: /^[0-9]+$/,
	title: "string",
	url: "string.url",
	is_external_url: "boolean",
	author: "string",
	contents: "string",
	feedlabel: "string",
	date: "number.epoch",
	feedname: "string",
	feed_type: "number",
	appid: "number>=1",
});
export type NewsItemType = typeof NewsItem.infer;

export const GetNewsForAppResponse = type({
	appnews: {
		appid: "number>=1",
		newsitems: {
			gid: /^[0-9]+$/,
			title: "string",
			url: "string.url",
			is_external_url: "boolean",
			author: "string",
			contents: "string",
			feedlabel: "string",
			date: "number.epoch",
			feedname: "string",
			feed_type: "number",
			appid: "number>=1",
		},
	},
});
export type GetNewsForAppResponseType = typeof GetNewsForAppResponse.infer;
