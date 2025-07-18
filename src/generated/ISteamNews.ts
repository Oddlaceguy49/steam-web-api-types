import { type Static, Type } from "@sinclair/typebox";

export type GetNewsForAppRequest = Static<typeof GetNewsForAppRequest>;
export const GetNewsForAppRequest = Type.Object(
	{
		appid: Type.Number({
			minimum: 1,
			description: "The AppID of the game for which to retrieve news.",
		}),
		maxlength: Type.Optional(
			Type.Number({
				minimum: 0,
				description:
					"Maximum length for the content to return. If 0, the full content is returned; if less than the full content, a blurb is generated.",
			})
		),
		enddate: Type.Optional(
			Type.Number({
				format: "unix",
				description: "Retrieve posts earlier than this Unix epoch timestamp.",
			})
		),
		count: Type.Optional(
			Type.Number({
				minimum: 0,
				description: "Number of posts to retrieve (default is 20).",
			})
		),
		feeds: Type.Optional(Type.String({ description: "Comma" })),
		tags: Type.Optional(Type.String({ description: "Comma" })),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp",
		description: "Parameters for retrieving news for a specific app.",
	}
);

export type NewsItem = Static<typeof NewsItem>;
export const NewsItem = Type.Object(
	{
		gid: Type.String({
			pattern: "^[0",
			description: "The unique ID of the news item.",
		}),
		title: Type.String({ description: "The title of the news item." }),
		url: Type.String({
			format: "url",
			description: "The URL to the news item.",
		}),
		is_external_url: Type.Boolean({
			description: "True if the URL is external, false otherwise.",
		}),
		author: Type.String({ description: "The author of the news item." }),
		contents: Type.String({
			description: "The full content of the news item.",
		}),
		feedlabel: Type.String({ description: "The label of the news feed." }),
		date: Type.Number({
			format: "unix",
			description: "The Unix timestamp of when the news item was published.",
		}),
		feedname: Type.String({ description: "The name of the news feed." }),
		feed_type: Type.Number({ description: "The type of the news feed." }),
		appid: Type.Number({
			minimum: 1,
			description: "The AppID associated with the news item.",
		}),
	},
	{ description: "A single news item for a Steam app." }
);

export type GetNewsForAppResponse = Static<typeof GetNewsForAppResponse>;
export const GetNewsForAppResponse = Type.Object(
	{
		appnews: Type.Object(
			{
				appid: Type.Number({
					minimum: 1,
					description: "The AppID of the game.",
				}),
				newsitems: Type.Array(NewsItem),
			},
			{ minimum: 1, description: "The AppID of the game." }
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamNews#GetNewsForApp",
		description: "Response containing news items for a specific app.",
	}
);
