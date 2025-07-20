// THIS FILE IS AUTO-GENERATED FOR TYPEBOX. DO NOT EDIT.

import { Type, Static } from "@sinclair/typebox";

export type AuthenticateUserTicketRequest = Static<
	typeof AuthenticateUserTicketRequest
>;
export const AuthenticateUserTicketRequest = Type.Object(
	{
		key: Type.String({
			minLength: 1,
			description: "Your Steamworks Web API publisher authentication key.",
		}),
		appid: Type.Number({ minimum: 1, description: "The AppID of the game." }),
		ticket: Type.String({
			minLength: 1,
			description:
				"The hexadecimal string representation of the binary ticket data.",
		}),
		identity: Type.Optional(
			Type.String({
				minLength: 1,
				description: "Optional: A string identifier for the remote service.",
			})
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket",
		description: "Parameters for authenticating a user ticket.",
	}
);

export type AuthenticateUserTicketResponse_properties_response_properties_error =
	Static<
		typeof AuthenticateUserTicketResponse_properties_response_properties_error
	>;
export const AuthenticateUserTicketResponse_properties_response_properties_error =
	Type.Object({
		errorcode: Type.Number(),
		errordesc: Type.String({
			minLength: 1,
			description: "Error description if authentication fails.",
		}),
	});

export type AuthenticateUserTicketResponse_properties_response = Static<
	typeof AuthenticateUserTicketResponse_properties_response
>;
export const AuthenticateUserTicketResponse_properties_response = Type.Object({
	steamid: Type.Optional(
		Type.String({ pattern: "^[0-9]{17}$", description: "The user's 64" })
	),
	error: Type.Optional(
		AuthenticateUserTicketResponse_properties_response_properties_error
	),
});

export type AuthenticateUserTicketResponse = Static<
	typeof AuthenticateUserTicketResponse
>;
export const AuthenticateUserTicketResponse = Type.Object(
	{
		response: AuthenticateUserTicketResponse_properties_response,
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket",
		description: "Response from authenticating a user ticket.",
	}
);
