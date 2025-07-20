// THIS FILE IS AUTO-GENERATED FOR ARKTYPE. DO NOT EDIT.

import { scope, type } from "arktype";

export const types = scope({
	AuthenticateUserTicketRequest: type({
		key: "string>=1",
		appid: "number>=1",
		ticket: "string>=1",
		"identity?": "string>=1",
	}),
	AuthenticateUserTicketResponse_properties_response_properties_error: type({
		errorcode: "number",
		errordesc: "string>=1",
	}),
}).export();

export type AuthenticateUserTicketRequest =
	typeof AuthenticateUserTicketRequest.infer;
export const AuthenticateUserTicketRequest =
	types.AuthenticateUserTicketRequest;
export type AuthenticateUserTicketResponse_properties_response_properties_error =
	typeof AuthenticateUserTicketResponse_properties_response_properties_error.infer;
export const AuthenticateUserTicketResponse_properties_response_properties_error =
	types.AuthenticateUserTicketResponse_properties_response_properties_error;
