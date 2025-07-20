// THIS FILE IS AUTO-GENERATED FOR EFFECT. DO NOT EDIT.

import { Schema as ET } from "@effect/schema/Schema";
import { Schema as ES } from "@effect/schema";

export type AuthenticateUserTicketRequest = ET.Type<
	typeof AuthenticateUserTicketRequest
>;
export const AuthenticateUserTicketRequest = ES.Struct({
	key: ES.String.pipe(ES.minLength(1)),
	appid: ES.Number.pipe(ES.greaterThanOrEqualTo(1)),
	ticket: ES.String.pipe(ES.minLength(1)),
	identity: ES.optional(ES.String.pipe(ES.minLength(1))),
});

export type AuthenticateUserTicketResponse_properties_response_properties_error =
	ET.Type<
		typeof AuthenticateUserTicketResponse_properties_response_properties_error
	>;
export const AuthenticateUserTicketResponse_properties_response_properties_error =
	ES.Struct({
		errorcode: ES.Number,
		errordesc: ES.String.pipe(ES.minLength(1)),
	});

export type AuthenticateUserTicketResponse_properties_response = ET.Type<
	typeof AuthenticateUserTicketResponse_properties_response
>;
export const AuthenticateUserTicketResponse_properties_response = ES.Struct({
	steamid: ES.optional(ES.String),
	error: ES.optional(
		AuthenticateUserTicketResponse_properties_response_properties_error
	),
});

export type AuthenticateUserTicketResponse = ET.Type<
	typeof AuthenticateUserTicketResponse
>;
export const AuthenticateUserTicketResponse = ES.Struct({
	response: AuthenticateUserTicketResponse_properties_response,
});
