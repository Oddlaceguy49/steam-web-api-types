// THIS FILE IS AUTO-GENERATED FOR ARKTYPE. DO NOT EDIT.

import { scope, type } from "arktype";

export const types = scope({
	GetRecentlyPlayedGamesRequest_properties_count: "number>=0",
	RecentlyPlayedGame: type({
		appid: "number>=1",
		name: "string",
		playtime_2weeks: "number>=0",
		playtime_forever: "number>=0",
		img_icon_url: "string",
		img_logo_url: "string",
		has_community_visible_stats: "boolean",
	}),
	GetRecentlyPlayedGamesResponse: type({
		response: type({
			total_count: "number>=0",
			games: "RecentlyPlayedGame[]",
		}),
	}),
}).export();

export type GetRecentlyPlayedGamesRequest_properties_count =
	typeof GetRecentlyPlayedGamesRequest_properties_count.infer;
export const GetRecentlyPlayedGamesRequest_properties_count =
	types.GetRecentlyPlayedGamesRequest_properties_count;
export type RecentlyPlayedGame = typeof RecentlyPlayedGame.infer;
export const RecentlyPlayedGame = types.RecentlyPlayedGame;
export type GetRecentlyPlayedGamesResponse =
	typeof GetRecentlyPlayedGamesResponse.infer;
export const GetRecentlyPlayedGamesResponse =
	types.GetRecentlyPlayedGamesResponse;
