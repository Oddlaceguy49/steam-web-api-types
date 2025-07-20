// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as yup from "yup";

export const AuthenticateUserTicketRequest = yup
	.object({
		key: yup.string().min(1).required(),
		appid: yup.number().min(1).required(),
		ticket: yup.string().min(1).required(),
		identity: yup.string().min(1),
	})
	.required();

export type AuthenticateUserTicketRequest = yup.InferType<
	typeof AuthenticateUserTicketRequest
>;

export const AuthenticateUserTicketResponse = yup
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

export type AuthenticateUserTicketResponse = yup.InferType<
	typeof AuthenticateUserTicketResponse
>;
