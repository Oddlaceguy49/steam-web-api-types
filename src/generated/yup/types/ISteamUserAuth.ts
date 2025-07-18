// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as y from "yup";

export type AuthenticateUserTicketRequest = y.InferType<
	typeof AuthenticateUserTicketRequest
>;
export const AuthenticateUserTicketRequest = y.object({
	key: y.string().required().min(1),
	appid: y.number().required().min(1),
	ticket: y.string().required().min(1),
	identity: y.string().required().min(1).optional(),
});

export type AuthenticateUserTicketResponse_properties_response_properties_error =
	y.InferType<
		typeof AuthenticateUserTicketResponse_properties_response_properties_error
	>;
export const AuthenticateUserTicketResponse_properties_response_properties_error =
	y.object({
		errorcode: y.number().required(),
		errordesc: y.string().required().min(1),
	});
