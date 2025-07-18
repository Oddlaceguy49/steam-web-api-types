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

export type AuthenticateUserTicketResponse = Static<
	typeof AuthenticateUserTicketResponse
>;
export const AuthenticateUserTicketResponse = Type.Object(
	{
		response: Type.Object(
			{
				steamid: Type.Optional(
					Type.String({ pattern: "^[0", description: "The user's 64" })
				),
				error: Type.Optional(
					Type.Object(
						{
							errorcode: Type.Number({
								description: "Error code if authentication fails.",
							}),
							errordesc: Type.String({
								minLength: 1,
								description: "Error description if authentication fails.",
							}),
						},
						{ description: "Error code if authentication fails." }
					)
				),
			},
			{ pattern: "^[0", description: "The user's 64" }
		),
	},
	{
		see: "https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket",
		description: "Response from authenticating a user ticket.",
	}
);
