// THIS FILE IS AUTO-GENERATED FOR ARKTYPE. DO NOT EDIT.

import { type } from "arktype";

export const AuthenticateUserTicketRequest = type({
	key: "string>=1",
	appid: "number>=1",
	ticket: "string>=1",
	"identity?": "string>=1",
});
export type AuthenticateUserTicketRequestType =
	typeof AuthenticateUserTicketRequest.infer;

export const AuthenticateUserTicketResponse = type({
	response: {
		"steamid?": /^[0-9]{17}$/,
		"error?": {
			errorcode: "number",
			errordesc: "string>=1",
		},
	},
});
export type AuthenticateUserTicketResponseType =
	typeof AuthenticateUserTicketResponse.infer;
