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
		$id: "AuthenticateUserTicketResponse_properties_response_properties_error",
		type: "object",
		properties: {
			errorcode: {
				type: "number",
			},
			errordesc: {
				minLength: 1,
				description: "Error description if authentication fails.",
				type: "string",
			},
		},
		required: ["errorcode", "errordesc"],
	};
export const AuthenticateUserTicketResponse_properties_response = {
	$id: "AuthenticateUserTicketResponse_properties_response",
	type: "object",
	properties: {
		steamid: {
			pattern: "^[0-9]{17}$",
			description: "The user's 64",
			type: "string",
		},
		error: {
			$id: "AuthenticateUserTicketResponse_properties_response_properties_error",
			type: "object",
			properties: {
				errorcode: {
					type: "number",
				},
				errordesc: {
					minLength: 1,
					description: "Error description if authentication fails.",
					type: "string",
				},
			},
			required: ["errorcode", "errordesc"],
		},
	},
};
export const AuthenticateUserTicketResponse = {
	see: "https://partner.steamgames.com/doc/webapi/ISteamUserAuth#AuthenticateUserTicket",
	description: "Response from authenticating a user ticket.",
	$id: "AuthenticateUserTicketResponse",
	type: "object",
	properties: {
		response: {
			$id: "AuthenticateUserTicketResponse_properties_response",
			type: "object",
			properties: {
				steamid: {
					pattern: "^[0-9]{17}$",
					description: "The user's 64",
					type: "string",
				},
				error: {
					$id: "AuthenticateUserTicketResponse_properties_response_properties_error",
					type: "object",
					properties: {
						errorcode: {
							type: "number",
						},
						errordesc: {
							minLength: 1,
							description: "Error description if authentication fails.",
							type: "string",
						},
					},
					required: ["errorcode", "errordesc"],
				},
			},
		},
	},
	required: ["response"],
};
