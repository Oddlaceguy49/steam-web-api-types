// THIS FILE IS AUTO-GENERATED FOR ARKTYPE. DO NOT EDIT.

import { type } from "arktype";

export const PlayerSummary = type({
	steamid: /^[0-9]{17}$/,
	communityvisibilitystate: "number>=0",
	"profilestate?": "number>=0",
	personaname: "1<=string<=32",
	lastlogoff: "number.epoch",
	profileurl: "string.url",
	avatar: "string.url",
	avatarmedium: "string.url",
	avatarfull: "string.url",
	personastate: "number>=0",
	"primaryclanid?": /^[0-9]{17}$/,
	"timecreated?": "number.epoch",
	"realname?": "string>=1",
	"loccountrycode?": "2<=string<=2",
	"locstatecode?": "2<=string<=2",
	"loccityid?": "number",
});
export type PlayerSummaryType = typeof PlayerSummary.infer;

export const GetPlayerSummariesResponse = type({
	response: {
		players: {
			steamid: /^[0-9]{17}$/,
			communityvisibilitystate: "number>=0",
			"profilestate?": "number>=0",
			personaname: "1<=string<=32",
			lastlogoff: "number.epoch",
			profileurl: "string.url",
			avatar: "string.url",
			avatarmedium: "string.url",
			avatarfull: "string.url",
			personastate: "number>=0",
			"primaryclanid?": /^[0-9]{17}$/,
			"timecreated?": "number.epoch",
			"realname?": "string>=1",
			"loccountrycode?": "2<=string<=2",
			"locstatecode?": "2<=string<=2",
			"loccityid?": "number",
		},
	},
});
export type GetPlayerSummariesResponseType =
	typeof GetPlayerSummariesResponse.infer;

export const CheckAppOwnershipRequest = type({
	key: "string",
	steamid: /^[0-9]{17}$/,
	appid: "number>=1",
});
export type CheckAppOwnershipRequestType =
	typeof CheckAppOwnershipRequest.infer;

export const CheckAppOwnershipResponse = type({
	appownership: {
		ownsApp: "boolean",
		timeAcquired: "number.epoch",
		ownerSteamID: /^[0-9]{17}$/,
		"sitelicense?": "boolean",
	},
});
export type CheckAppOwnershipResponseType =
	typeof CheckAppOwnershipResponse.infer;

export const GetDeletedSteamIDsRequest = type({
	key: "string",
	rowversion: /^[0-9]+$/,
});
export type GetDeletedSteamIDsRequestType =
	typeof GetDeletedSteamIDsRequest.infer;

export const DeletedSteamID = type({
	steamid: /^[0-9]{17}$/,
});
export type DeletedSteamIDType = typeof DeletedSteamID.infer;

export const GetDeletedSteamIDsResponse = type({
	response: {
		deletedids: {
			steamid: /^[0-9]{17}$/,
		},
		rowversion: /^[0-9]+$/,
	},
});
export type GetDeletedSteamIDsResponseType =
	typeof GetDeletedSteamIDsResponse.infer;

export const GetUserGroupListRequest = type({
	key: "string",
	steamid: /^[0-9]{17}$/,
});
export type GetUserGroupListRequestType = typeof GetUserGroupListRequest.infer;

export const UserGroup = type({
	gid: /^[0-9]+$/,
});
export type UserGroupType = typeof UserGroup.infer;

export const GetUserGroupListResponse = type({
	response: {
		success: "boolean",
		groups: {
			gid: /^[0-9]+$/,
		},
	},
});
export type GetUserGroupListResponseType =
	typeof GetUserGroupListResponse.infer;

export const ResolveVanityURLRequest = type({
	key: "string",
	vanityurl: "string>=1",
	"url_type?": "number>=1",
});
export type ResolveVanityURLRequestType = typeof ResolveVanityURLRequest.infer;

export const ResolveVanityURLResponse = type({
	response: {
		"steamid?": /^[0-9]{17}$/,
		success: "number>=1",
		"message?": "string",
	},
});
export type ResolveVanityURLResponseType =
	typeof ResolveVanityURLResponse.infer;

export const GetFriendListRequest = type({
	key: "string",
	steamid: /^[0-9]{17}$/,
	"relationship?": /^(all|friend)$/,
});
export type GetFriendListRequestType = typeof GetFriendListRequest.infer;

export const Friend = type({
	steamid: /^[0-9]{17}$/,
	relationship: /^(friend)$/,
	friend_since: "number.epoch",
});
export type FriendType = typeof Friend.infer;

export const GetFriendListResponse = type({
	friendslist: {
		friends: {
			steamid: /^[0-9]{17}$/,
			relationship: /^(friend)$/,
			friend_since: "number.epoch",
		},
	},
});
export type GetFriendListResponseType = typeof GetFriendListResponse.infer;

export const GetPlayerBansRequest = type({
	key: "string",
	steamids: /^[0-9,]+$/,
});
export type GetPlayerBansRequestType = typeof GetPlayerBansRequest.infer;

export const PlayerBan = type({
	SteamId: /^[0-9]{17}$/,
	CommunityBanned: "boolean",
	VACBanned: "boolean",
	NumberOfVACBans: "number>=0",
	DaysSinceLastBan: "number>=0",
	EconomyBan: /^(none|probation|banned)$/,
});
export type PlayerBanType = typeof PlayerBan.infer;

export const GetPlayerBansResponse = type({
	players: {
		SteamId: /^[0-9]{17}$/,
		CommunityBanned: "boolean",
		VACBanned: "boolean",
		NumberOfVACBans: "number>=0",
		DaysSinceLastBan: "number>=0",
		EconomyBan: /^(none|probation|banned)$/,
	},
});
export type GetPlayerBansResponseType = typeof GetPlayerBansResponse.infer;
