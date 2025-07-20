// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as yup from "yup";

export const PlayerSummary = yup
	.object({
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
		communityvisibilitystate: yup.number().min(0).max(5).required(),
		profilestate: yup.number().min(0).max(1),
		personaname: yup.string().min(1).max(32).required(),
		lastlogoff: yup.number().integer().required(),
		profileurl: yup.string().url().required(),
		avatar: yup.string().url().required(),
		avatarmedium: yup.string().url().required(),
		avatarfull: yup.string().url().required(),
		personastate: yup.number().min(0).max(6).required(),
		primaryclanid: yup.string().matches(/^[0-9]{17}$/),
		timecreated: yup.number().integer(),
		realname: yup.string().min(1),
		loccountrycode: yup.string().min(2).max(2),
		locstatecode: yup.string().min(2).max(2),
		loccityid: yup.number(),
	})
	.required();

export type PlayerSummary = yup.InferType<typeof PlayerSummary>;

export const GetPlayerSummariesResponse = yup
	.object({
		response: yup
			.object({
				players: yup
					.array()
					.of(
						yup.object({
							steamid: yup
								.string()
								.matches(/^[0-9]{17}$/)
								.required(),
							communityvisibilitystate: yup.number().min(0).max(5).required(),
							profilestate: yup.number().min(0).max(1),
							personaname: yup.string().min(1).max(32).required(),
							lastlogoff: yup.number().integer().required(),
							profileurl: yup.string().url().required(),
							avatar: yup.string().url().required(),
							avatarmedium: yup.string().url().required(),
							avatarfull: yup.string().url().required(),
							personastate: yup.number().min(0).max(6).required(),
							primaryclanid: yup.string().matches(/^[0-9]{17}$/),
							timecreated: yup.number().integer(),
							realname: yup.string().min(1),
							loccountrycode: yup.string().min(2).max(2),
							locstatecode: yup.string().min(2).max(2),
							loccityid: yup.number(),
						})
					)
					.required(),
			})
			.required(),
	})
	.required();

export type GetPlayerSummariesResponse = yup.InferType<
	typeof GetPlayerSummariesResponse
>;

export const CheckAppOwnershipRequest = yup
	.object({
		key: yup.string().required(),
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
		appid: yup.number().min(1).required(),
	})
	.required();

export type CheckAppOwnershipRequest = yup.InferType<
	typeof CheckAppOwnershipRequest
>;

export const CheckAppOwnershipResponse = yup
	.object({
		appownership: yup
			.object({
				ownsApp: yup.boolean().required(),
				timeAcquired: yup.number().integer().required(),
				ownerSteamID: yup
					.string()
					.matches(/^[0-9]{17}$/)
					.required(),
				sitelicense: yup.boolean(),
			})
			.required(),
	})
	.required();

export type CheckAppOwnershipResponse = yup.InferType<
	typeof CheckAppOwnershipResponse
>;

export const GetDeletedSteamIDsRequest = yup
	.object({
		key: yup.string().required(),
		rowversion: yup
			.string()
			.matches(/^[0-9]+$/)
			.required(),
	})
	.required();

export type GetDeletedSteamIDsRequest = yup.InferType<
	typeof GetDeletedSteamIDsRequest
>;

export const DeletedSteamID = yup
	.object({
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
	})
	.required();

export type DeletedSteamID = yup.InferType<typeof DeletedSteamID>;

export const GetDeletedSteamIDsResponse = yup
	.object({
		response: yup
			.object({
				deletedids: yup
					.array()
					.of(
						yup.object({
							steamid: yup
								.string()
								.matches(/^[0-9]{17}$/)
								.required(),
						})
					)
					.required(),
				rowversion: yup
					.string()
					.matches(/^[0-9]+$/)
					.required(),
			})
			.required(),
	})
	.required();

export type GetDeletedSteamIDsResponse = yup.InferType<
	typeof GetDeletedSteamIDsResponse
>;

export const GetUserGroupListRequest = yup
	.object({
		key: yup.string().required(),
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
	})
	.required();

export type GetUserGroupListRequest = yup.InferType<
	typeof GetUserGroupListRequest
>;

export const UserGroup = yup
	.object({
		gid: yup
			.string()
			.matches(/^[0-9]+$/)
			.required(),
	})
	.required();

export type UserGroup = yup.InferType<typeof UserGroup>;

export const GetUserGroupListResponse = yup
	.object({
		response: yup
			.object({
				success: yup.boolean().required(),
				groups: yup
					.array()
					.of(
						yup.object({
							gid: yup
								.string()
								.matches(/^[0-9]+$/)
								.required(),
						})
					)
					.required(),
			})
			.required(),
	})
	.required();

export type GetUserGroupListResponse = yup.InferType<
	typeof GetUserGroupListResponse
>;

export const ResolveVanityURLRequest = yup
	.object({
		key: yup.string().required(),
		vanityurl: yup.string().min(1).required(),
		url_type: yup.number().min(1).max(3),
	})
	.required();

export type ResolveVanityURLRequest = yup.InferType<
	typeof ResolveVanityURLRequest
>;

export const ResolveVanityURLResponse = yup
	.object({
		response: yup
			.object({
				steamid: yup.string().matches(/^[0-9]{17}$/),
				success: yup.number().min(1).required(),
				message: yup.string(),
			})
			.required(),
	})
	.required();

export type ResolveVanityURLResponse = yup.InferType<
	typeof ResolveVanityURLResponse
>;

export const GetFriendListRequest = yup
	.object({
		key: yup.string().required(),
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
		relationship: yup.string().matches(/^(all|friend)$/),
	})
	.required();

export type GetFriendListRequest = yup.InferType<typeof GetFriendListRequest>;

export const Friend = yup
	.object({
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
		relationship: yup
			.string()
			.matches(/^(friend)$/)
			.required(),
		friend_since: yup.number().integer().required(),
	})
	.required();

export type Friend = yup.InferType<typeof Friend>;

export const GetFriendListResponse = yup
	.object({
		friendslist: yup
			.object({
				friends: yup
					.array()
					.of(
						yup.object({
							steamid: yup
								.string()
								.matches(/^[0-9]{17}$/)
								.required(),
							relationship: yup
								.string()
								.matches(/^(friend)$/)
								.required(),
							friend_since: yup.number().integer().required(),
						})
					)
					.required(),
			})
			.required(),
	})
	.required();

export type GetFriendListResponse = yup.InferType<typeof GetFriendListResponse>;

export const GetPlayerBansRequest = yup
	.object({
		key: yup.string().required(),
		steamids: yup
			.string()
			.matches(/^[0-9,]+$/)
			.required(),
	})
	.required();

export type GetPlayerBansRequest = yup.InferType<typeof GetPlayerBansRequest>;

export const PlayerBan = yup
	.object({
		SteamId: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
		CommunityBanned: yup.boolean().required(),
		VACBanned: yup.boolean().required(),
		NumberOfVACBans: yup.number().min(0).required(),
		DaysSinceLastBan: yup.number().min(0).required(),
		EconomyBan: yup
			.string()
			.matches(/^(none|probation|banned)$/)
			.required(),
	})
	.required();

export type PlayerBan = yup.InferType<typeof PlayerBan>;

export const GetPlayerBansResponse = yup
	.object({
		players: yup
			.array()
			.of(
				yup.object({
					SteamId: yup
						.string()
						.matches(/^[0-9]{17}$/)
						.required(),
					CommunityBanned: yup.boolean().required(),
					VACBanned: yup.boolean().required(),
					NumberOfVACBans: yup.number().min(0).required(),
					DaysSinceLastBan: yup.number().min(0).required(),
					EconomyBan: yup
						.string()
						.matches(/^(none|probation|banned)$/)
						.required(),
				})
			)
			.required(),
	})
	.required();

export type GetPlayerBansResponse = yup.InferType<typeof GetPlayerBansResponse>;
