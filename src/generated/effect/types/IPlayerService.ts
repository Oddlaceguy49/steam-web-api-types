// THIS FILE IS AUTO-GENERATED FOR EFFECT. DO NOT EDIT.

import { Schema as ET } from "@effect/schema/Schema";
import { Schema as ES } from "@effect/schema";

export type GetRecentlyPlayedGamesRequest_properties_count = ET.Type<
	typeof GetRecentlyPlayedGamesRequest_properties_count
>;
export const GetRecentlyPlayedGamesRequest_properties_count = ES.Number.pipe(
	ES.greaterThanOrEqualTo(0)
);

export type RecentlyPlayedGame = ET.Type<typeof RecentlyPlayedGame>;
export const RecentlyPlayedGame = ES.Struct({
	appid: ES.Number.pipe(ES.greaterThanOrEqualTo(1)),
	name: ES.String,
	playtime_2weeks: ES.Number.pipe(ES.greaterThanOrEqualTo(0)),
	playtime_forever: ES.Number.pipe(ES.greaterThanOrEqualTo(0)),
	img_icon_url: ES.String,
	img_logo_url: ES.String,
	has_community_visible_stats: ES.Boolean,
});

export type GetRecentlyPlayedGamesResponse = ET.Type<
	typeof GetRecentlyPlayedGamesResponse
>;
export const GetRecentlyPlayedGamesResponse = ES.Struct({
	response: ES.Struct({
		total_count: ES.Number.pipe(ES.greaterThanOrEqualTo(0)),
		games: ES.Array(RecentlyPlayedGame),
	}),
});
