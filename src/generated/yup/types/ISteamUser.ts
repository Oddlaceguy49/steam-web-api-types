// THIS FILE IS AUTO-GENERATED FOR YUP. DO NOT EDIT.

import * as yup from "yup";

export const PlayerSummarySchema = yup
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

export const GetPlayerSummariesResponseSchema = yup
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

export const CheckAppOwnershipRequestSchema = yup
	.object({
		key: yup.string().required(),
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
		appid: yup.number().min(1).required(),
	})
	.required();

export const CheckAppOwnershipResponseSchema = yup
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

export const GetDeletedSteamIDsRequestSchema = yup
	.object({
		key: yup.string().required(),
		rowversion: yup
			.string()
			.matches(/^[0-9]+$/)
			.required(),
	})
	.required();

export const DeletedSteamIDSchema = yup
	.object({
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
	})
	.required();

export const GetDeletedSteamIDsResponseSchema = yup
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

export const GetUserGroupListRequestSchema = yup
	.object({
		key: yup.string().required(),
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
	})
	.required();

export const UserGroupSchema = yup
	.object({
		gid: yup
			.string()
			.matches(/^[0-9]+$/)
			.required(),
	})
	.required();

export const GetUserGroupListResponseSchema = yup
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

export const ResolveVanityURLRequestSchema = yup
	.object({
		key: yup.string().required(),
		vanityurl: yup.string().min(1).required(),
		url_type: yup.number().min(1).max(3),
	})
	.required();

export const ResolveVanityURLResponseSchema = yup
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

export const GetFriendListRequestSchema = yup
	.object({
		key: yup.string().required(),
		steamid: yup
			.string()
			.matches(/^[0-9]{17}$/)
			.required(),
		relationship: yup.string().matches(/^(all|friend)$/),
	})
	.required();

export const FriendSchema = yup
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

export const GetFriendListResponseSchema = yup
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

export const GetPlayerBansRequestSchema = yup
	.object({
		key: yup.string().required(),
		steamids: yup
			.string()
			.matches(/^[0-9,]+$/)
			.required(),
	})
	.required();

export const PlayerBanSchema = yup
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

export const GetPlayerBansResponseSchema = yup
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
