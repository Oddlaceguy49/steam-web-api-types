// THIS FILE IS AUTO-GENERATED FOR ARKTYPE. DO NOT EDIT.

import { type } from "arktype";

export const GetRecentlyPlayedGamesRequest = type({
	steamid: /^[0-9]{17}$/,
	"count?": "number>=0",
});
export type GetRecentlyPlayedGamesRequestType =
	typeof GetRecentlyPlayedGamesRequest.infer;

export const RecentlyPlayedGame = type({
	appid: "number>=1",
	name: "string",
	playtime_2weeks: "number>=0",
	playtime_forever: "number>=0",
	img_icon_url: "string.url",
	img_logo_url: "string.url",
	has_community_visible_stats: "boolean",
});
export type RecentlyPlayedGameType = typeof RecentlyPlayedGame.infer;

export const GetRecentlyPlayedGamesResponse = type({
	response: {
		total_count: "number>=0",
		games: {
			appid: "number>=1",
			name: "string",
			playtime_2weeks: "number>=0",
			playtime_forever: "number>=0",
			img_icon_url: "string.url",
			img_logo_url: "string.url",
			has_community_visible_stats: "boolean",
		},
	},
});
export type GetRecentlyPlayedGamesResponseType =
	typeof GetRecentlyPlayedGamesResponse.infer;
