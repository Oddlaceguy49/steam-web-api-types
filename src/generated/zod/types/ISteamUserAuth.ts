// THIS FILE IS AUTO-GENERATED FOR ZOD. DO NOT EDIT.

import { z } from "zod";

export type AuthenticateUserTicketRequest = z.infer<
	typeof AuthenticateUserTicketRequest
>;
export const AuthenticateUserTicketRequest = z.object({
	key: z.string().min(1),
	appid: z.number().min(1),
	ticket: z.string().min(1),
	identity: z.string().min(1).optional(),
});

export type AuthenticateUserTicketResponse_properties_response_properties_error =
	z.infer<
		typeof AuthenticateUserTicketResponse_properties_response_properties_error
	>;
export const AuthenticateUserTicketResponse_properties_response_properties_error =
	z.object({
		errorcode: z.number(),
		errordesc: z.string().min(1),
	});
