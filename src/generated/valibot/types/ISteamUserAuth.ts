// THIS FILE IS AUTO-GENERATED FOR VALIBOT. DO NOT EDIT.

import * as v from "valibot";

/**
 * Parameters for authenticating a user ticket.
 */
export const AuthenticateUserTicketRequest = v.strictObject({
	key: v.pipe(v.string(), v.minLength(1)),
	appid: v.pipe(v.number(), v.minValue(1)),
	ticket: v.pipe(v.string(), v.minLength(1)),
	identity: v.optional(v.pipe(v.string(), v.minLength(1))),
});

/**
 * Response from authenticating a user ticket.
 */
export const AuthenticateUserTicketResponse = v.strictObject({
	response: v.strictObject({
		steamid: v.optional(v.pipe(v.string(), v.regex(/^[0-9]{17}$/))),
		error: v.optional(
			v.strictObject({
				errorcode: v.number(),
				errordesc: v.pipe(v.string(), v.minLength(1)),
			})
		),
	}),
});
