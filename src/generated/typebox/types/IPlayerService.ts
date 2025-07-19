// THIS FILE IS AUTO-GENERATED FOR TYPEBOX. DO NOT EDIT.

import { Type, Static } from "@sinclair/typebox";

export type GetRecentlyPlayedGamesRequest = Static<
	typeof GetRecentlyPlayedGamesRequest
>;
export const GetRecentlyPlayedGamesRequest = Type.Object(
	{
		steamid: Type.String({ pattern: "^[0", description: "The 64" }),
		count: Type.Optional(
			Type.Number({
				minimum: 0,
				description: "The number of games to return (0 to 100).",
			})
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames",
		description: "Parameters for retrieving recently played games for a user.",
	}
);

export type RecentlyPlayedGame = Static<typeof RecentlyPlayedGame>;
export const RecentlyPlayedGame = Type.Object(
	{
		appid: Type.Number({ minimum: 1, description: "The AppID of the game." }),
		name: Type.String({ description: "The name of the game." }),
		playtime_2weeks: Type.Number({
			minimum: 0,
			description: "Total playtime in the last 2 weeks, in minutes.",
		}),
		playtime_forever: Type.Number({
			minimum: 0,
			description: "Total playtime forever, in minutes.",
		}),
		img_icon_url: Type.String({
			format: "url",
			description: "The URL to the game's icon.",
		}),
		img_logo_url: Type.String({
			format: "url",
			description: "The URL to the game's logo.",
		}),
		has_community_visible_stats: Type.Boolean({
			description: "True if the game has community visible stats.",
		}),
	},
	{ description: "Information about a recently played game." }
);

export type GetRecentlyPlayedGamesResponse = Static<
	typeof GetRecentlyPlayedGamesResponse
>;
export const GetRecentlyPlayedGamesResponse = Type.Object(
	{
		response: Type.Object(
			{
				total_count: Type.Number({
					minimum: 0,
					description: "The total number of games.",
				}),
				games: Type.Array(RecentlyPlayedGame),
			},
			{ minimum: 0, description: "The total number of games." }
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/IPlayerService#GetRecentlyPlayedGames",
		description: "Response containing recently played games for a user.",
	}
);
