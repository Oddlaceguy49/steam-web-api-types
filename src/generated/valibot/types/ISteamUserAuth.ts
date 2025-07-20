// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

export type AuthenticateUserTicketRequest = v.InferOutput<
	typeof AuthenticateUserTicketRequest
>;
export const AuthenticateUserTicketRequest = v.object({
	key: v.pipe(v.string(), v.minLength(1)),
	appid: v.pipe(v.number(), v.minValue(1)),
	ticket: v.pipe(v.string(), v.minLength(1)),
	identity: v.optional(v.pipe(v.string(), v.minLength(1))),
});

export type AuthenticateUserTicketResponse_properties_response_properties_error =
	v.InferOutput<
		typeof AuthenticateUserTicketResponse_properties_response_properties_error
	>;
export const AuthenticateUserTicketResponse_properties_response_properties_error =
	v.object({
		errorcode: v.number(),
		errordesc: v.pipe(v.string(), v.minLength(1)),
	});

export type AuthenticateUserTicketResponse_properties_response = v.InferOutput<
	typeof AuthenticateUserTicketResponse_properties_response
>;
export const AuthenticateUserTicketResponse_properties_response = v.object({
	steamid: v.optional(v.string()),
	error: v.optional(
		AuthenticateUserTicketResponse_properties_response_properties_error
	),
});

export type AuthenticateUserTicketResponse = v.InferOutput<
	typeof AuthenticateUserTicketResponse
>;
export const AuthenticateUserTicketResponse = v.object({
	response: AuthenticateUserTicketResponse_properties_response,
});
