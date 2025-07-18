// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as y from "yup";

export type GetRecentlyPlayedGamesRequest_properties_count = y.InferType<
	typeof GetRecentlyPlayedGamesRequest_properties_count
>;
export const GetRecentlyPlayedGamesRequest_properties_count = y
	.number()
	.required()
	.min(0);

export type RecentlyPlayedGame = y.InferType<typeof RecentlyPlayedGame>;
export const RecentlyPlayedGame = y.object({
	appid: y.number().required().min(1),
	name: y.string().required(),
	playtime_2weeks: y.number().required().min(0),
	playtime_forever: y.number().required().min(0),
	img_icon_url: y.string().required(),
	img_logo_url: y.string().required(),
	has_community_visible_stats: y.boolean().required(),
});

export type GetRecentlyPlayedGamesResponse = y.InferType<
	typeof GetRecentlyPlayedGamesResponse
>;
export const GetRecentlyPlayedGamesResponse = y.object({
	response: y.object({
		total_count: y.number().required().min(0),
		games: y.array(RecentlyPlayedGame),
	}),
});
