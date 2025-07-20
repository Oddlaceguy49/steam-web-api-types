// THIS FILE IS AUTO-GENERATED FOR ZOD. DO NOT EDIT.

import { z } from "zod";

export type GetRecentlyPlayedGamesRequest_properties_count = z.infer<
	typeof GetRecentlyPlayedGamesRequest_properties_count
>;
export const GetRecentlyPlayedGamesRequest_properties_count = z.number().min(0);

export type RecentlyPlayedGame = z.infer<typeof RecentlyPlayedGame>;
export const RecentlyPlayedGame = z.object({
	appid: z.number().min(1),
	name: z.string(),
	playtime_2weeks: z.number().min(0),
	playtime_forever: z.number().min(0),
	img_icon_url: z.string(),
	img_logo_url: z.string(),
	has_community_visible_stats: z.boolean(),
});

export type GetRecentlyPlayedGamesResponse_properties_response = z.infer<
	typeof GetRecentlyPlayedGamesResponse_properties_response
>;
export const GetRecentlyPlayedGamesResponse_properties_response = z.object({
	total_count: z.number().min(0),
	games: z.array(RecentlyPlayedGame),
});
