// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as yup from "yup";

export const AuthenticateUserTicketRequestSchema = yup
	.object({
		key: yup.string().min(1).required(),
		appid: yup.number().min(1).required(),
		ticket: yup.string().min(1).required(),
		identity: yup.string().min(1),
	})
	.required();

export const AuthenticateUserTicketResponseSchema = yup
	.object({
		response: yup
			.object({
				steamid: yup.string().matches(/^[0-9]{17}$/),
				error: yup.object({
					errorcode: yup.number().required(),
					errordesc: yup.string().min(1).required(),
				}),
			})
			.required(),
	})
	.required();
