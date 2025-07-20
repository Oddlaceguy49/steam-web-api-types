// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

/**
 * Parameters for retrieving recently played games for a user.
 */
export const GetRecentlyPlayedGamesRequest = v.strictObject({
	steamid: v.pipe(v.string(), v.regex(/^[0-9]{17}$/)),
	count: v.optional(v.pipe(v.number(), v.minValue(0))),
});

/**
 * Information about a recently played game.
 */
export const RecentlyPlayedGame = v.strictObject({
	appid: v.pipe(v.number(), v.minValue(1)),
	name: v.string(),
	playtime_2weeks: v.pipe(v.number(), v.minValue(0)),
	playtime_forever: v.pipe(v.number(), v.minValue(0)),
	img_icon_url: v.pipe(v.string(), v.url()),
	img_logo_url: v.pipe(v.string(), v.url()),
	has_community_visible_stats: v.boolean(),
});

/**
 * Response containing recently played games for a user.
 */
export const GetRecentlyPlayedGamesResponse = v.strictObject({
	response: v.strictObject({
		total_count: v.pipe(v.number(), v.minValue(0)),
		games: v.array(
			v.strictObject({
				appid: v.pipe(v.number(), v.minValue(1)),
				name: v.string(),
				playtime_2weeks: v.pipe(v.number(), v.minValue(0)),
				playtime_forever: v.pipe(v.number(), v.minValue(0)),
				img_icon_url: v.pipe(v.string(), v.url()),
				img_logo_url: v.pipe(v.string(), v.url()),
				has_community_visible_stats: v.boolean(),
			})
		),
	}),
});
