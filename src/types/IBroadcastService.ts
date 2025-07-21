/***
 * JSDoc type definitions for the Steam Web API's IBroadcastService.
 * @see https://partner.steamgames.com/doc/webapi/IBroadcastService
 */

/*** Parameters for the IBroadcastService/PostGameDataFrame/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IBroadcastService#PostGameDataFrame
 * @description Parameters for posting a game-specific data frame to a broadcast.
 */
export interface PostGameDataFrameRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game that is being broadcast.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who is broadcasting.
	 */
	steamid: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the broadcast session.
	 */
	broadcast_id: string;
	/**
	 * @minLength 1
	 * @description The game-specific data frame to be broadcast.
	 */
	frame_data: string;
}

/*** The response from the IBroadcastService/PostGameDataFrame/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IBroadcastService#PostGameDataFrame
 * @description Response containing broadcast session details after posting a data frame.
 */
export interface PostGameDataFrameResponse {
	response: {
		/**
		 * @pattern "^[0-9]+$"
		 * @description The 64-bit ID of the broadcast session.
		 */
		broadcast_id: string;
		/**
		 * @description The result code for the operation.
		 */
		result: number;
		/**
		 * @description True if the broadcaster's voice data is being captured and broadcast.
		 */
		voicedata: boolean;
		/**
		 * @description True if the broadcast is an RTMP broadcast.
		 */
		is_rtmp: boolean;
		/**
		 * @description The RTMP token for the broadcast stream, if applicable.
		 */
		rtmp_token?: string;
		/**
		 * @minimum 0
		 * @description The suggested delay in seconds for the broadcast.
		 */
		seconds_to_delay: number;
		/**
		 * @minLength 1
		 * @description An upload token required for uploading a broadcast thumbnail.
		 */
		thumbnail_upload_token: string;
		/**
		 * @format url
		 * @description The URL to which the broadcast thumbnail should be uploaded.
		 */
		thumbnail_upload_address: string;
		/**
		 * @minimum 0
		 * @description The recommended interval in seconds between thumbnail uploads.
		 */
		thumbnail_interval_seconds: number;
		/**
		 * @minimum 0
		 * @description The required interval in seconds for sending heartbeats to maintain the session.
		 */
		heartbeat_interval_seconds: number;
	};
}
