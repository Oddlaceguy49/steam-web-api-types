// THIS FILE IS AUTO-GENERATED FOR JSONSCHEMA. DO NOT EDIT.

export const AuthenticateUserTicketRequest = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket",
	description: "Parameters for authenticating a user ticket.",
	$id: "AuthenticateUserTicketRequest",
	type: "object",
	properties: {
		key: {
			minLength: 1,
			description: "Your Steamworks Web API publisher authentication key.",
			type: "string",
		},
		appid: {
			minimum: 1,
			description: "The AppID of the game.",
			type: "number",
		},
		ticket: {
			minLength: 1,
			description:
				"The hexadecimal string representation of the binary ticket data.",
			type: "string",
		},
		identity: {
			minLength: 1,
			description: "Optional: A string identifier for the remote service.",
			type: "string",
		},
	},
	required: ["key", "appid", "ticket"],
};
export const AuthenticateUserTicketResponse_properties_response_properties_error =
	{
		description: "Error code if authentication fails.",
		type: "object",
		properties: {
			errorcode: {
				description: "Error code if authentication fails.",
				type: "number",
			},
			errordesc: {
				minLength: 1,
				description: "Error description if authentication fails.",
				type: "string",
			},
		},
		required: ["errorcode", "errordesc"],
		$id: "AuthenticateUserTicketResponse_properties_response_properties_error",
	};
