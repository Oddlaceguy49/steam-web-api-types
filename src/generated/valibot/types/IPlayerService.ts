// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

export type GetRecentlyPlayedGamesRequest = v.InferOutput<
	typeof GetRecentlyPlayedGamesRequest
>;
export const GetRecentlyPlayedGamesRequest = v.object({
	steamid: v.string(),
	count: v.optional(v.pipe(v.number(), v.minValue(0))),
});

export type RecentlyPlayedGame = v.InferOutput<typeof RecentlyPlayedGame>;
export const RecentlyPlayedGame = v.object({
	appid: v.pipe(v.number(), v.minValue(1)),
	name: v.string(),
	playtime_2weeks: v.pipe(v.number(), v.minValue(0)),
	playtime_forever: v.pipe(v.number(), v.minValue(0)),
	img_icon_url: v.string(),
	img_logo_url: v.string(),
	has_community_visible_stats: v.boolean(),
});

export type GetRecentlyPlayedGamesResponse_properties_response = v.InferOutput<
	typeof GetRecentlyPlayedGamesResponse_properties_response
>;
export const GetRecentlyPlayedGamesResponse_properties_response = v.object({
	total_count: v.pipe(v.number(), v.minValue(0)),
	games: v.array(RecentlyPlayedGame),
});

export type GetRecentlyPlayedGamesResponse = v.InferOutput<
	typeof GetRecentlyPlayedGamesResponse
>;
export const GetRecentlyPlayedGamesResponse = v.object({
	response: GetRecentlyPlayedGamesResponse_properties_response,
});
