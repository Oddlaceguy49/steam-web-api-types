// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as yup from "yup";

export const GetRecentlyPlayedGamesRequestSchema = yup
	.object({
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
		count: yup.number().min(0),
	})
	.required();

export const RecentlyPlayedGameSchema = yup
	.object({
		appid: yup.number().min(1).required(),
		name: yup.string().required(),
		playtime_2weeks: yup.number().min(0).required(),
		playtime_forever: yup.number().min(0).required(),
		img_icon_url: yup.string().url().required(),
		img_logo_url: yup.string().url().required(),
		has_community_visible_stats: yup.boolean().required(),
	})
	.required();

export const GetRecentlyPlayedGamesResponseSchema = yup
	.object({
		response: yup
			.object({
				total_count: yup.number().min(0).required(),
				games: yup
					.array()
					.of(
						yup.object({
							appid: yup.number().min(1).required(),
							name: yup.string().required(),
							playtime_2weeks: yup.number().min(0).required(),
							playtime_forever: yup.number().min(0).required(),
							img_icon_url: yup.string().url().required(),
							img_logo_url: yup.string().url().required(),
							has_community_visible_stats: yup.boolean().required(),
						})
					)
					.required(),
			})
			.required(),
	})
	.required();
