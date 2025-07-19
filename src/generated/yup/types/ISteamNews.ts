// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as yup from "yup";

export const GetNewsForAppRequestSchema = yup
	.object({
		appid: yup.number().min(1).required(),
		maxlength: yup.number().min(0),
		enddate: yup.number().integer(),
		count: yup.number().min(0),
		feeds: yup.string(),
		tags: yup.string(),
	})
	.required();

export const NewsItemSchema = yup
	.object({
		gid: yup
			.string()
			.matches(/^[0-9]+$/)
			.required(),
		title: yup.string().required(),
		url: yup.string().url().required(),
		is_external_url: yup.boolean().required(),
		author: yup.string().required(),
		contents: yup.string().required(),
		feedlabel: yup.string().required(),
		date: yup.number().integer().required(),
		feedname: yup.string().required(),
		feed_type: yup.number().required(),
		appid: yup.number().min(1).required(),
	})
	.required();

export const GetNewsForAppResponseSchema = yup
	.object({
		appnews: yup
			.object({
				appid: yup.number().min(1).required(),
				newsitems: yup
					.array()
					.of(
						yup.object({
							gid: yup
								.string()
								.matches(/^[0-9]+$/)
								.required(),
							title: yup.string().required(),
							url: yup.string().url().required(),
							is_external_url: yup.boolean().required(),
							author: yup.string().required(),
							contents: yup.string().required(),
							feedlabel: yup.string().required(),
							date: yup.number().integer().required(),
							feedname: yup.string().required(),
							feed_type: yup.number().required(),
							appid: yup.number().min(1).required(),
						})
					)
					.required(),
			})
			.required(),
	})
	.required();
