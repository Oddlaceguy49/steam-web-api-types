/***
 * JSDoc type definitions for the Steam Web API's ILobbyMatchmakingService.
 * @see https://partner.steamgames.com/doc/webapi/ILobbyMatchmakingService
 */

// ---- Helper Interfaces ----

/*** Represents a member to be added to a new lobby.
 * @description Contains the member's SteamID and initial metadata.
 */
export interface LobbyMember {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the lobby member.
	 */
	steamid: string;
	/**
	 * @description A dictionary of metadata key-value pairs for this member.
	 */
	metadata: Record<string, string>;
}

/*** The structure for the `input_json` parameter when creating a lobby.
 * @description Defines the initial metadata for the lobby and its members.
 */
export interface CreateLobbyInput {
	/**
	 * @description A dictionary of metadata key-value pairs for the lobby itself.
	 */
	lobby_metadata?: Record<string, string>;
	/**
	 * @description An array of initial members for the lobby.
	 */
	members?: LobbyMember[];
}

// ---- API Endpoint ----

/*** Parameters for the ILobbyMatchmakingService/CreateLobby/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ILobbyMatchmakingService#CreateLobby
 * @description Parameters for creating a new lobby.
 */
export interface CreateLobbyRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @minimum 0
	 * @maximum 4
	 * @description The type of lobby to create. 0: Private, 1: Friends Only, 2: Public, 3: Invisible, 4: Private Unique.
	 */
	lobby_type: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who is the lobby leader.
	 */
	steamid_leader: string;
	/**
	 * @minLength 1
	 * @description The name of the lobby. Optional.
	 */
	lobby_name?: string;
	/**
	 * @minimum 1
	 * @description The maximum number of players allowed in the lobby. Optional.
	 */
	max_members?: number;
	/**
	 * @description A JSON-encoded string representing the lobby's initial state. See `CreateLobbyInput` for the structure.
	 */
	input_json: string;
}

/*** The response from the ILobbyMatchmakingService/CreateLobby/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ILobbyMatchmakingService#CreateLobby
 * @description Response containing the details of the newly created lobby.
 */
export interface CreateLobbyResponse {
	response: {
		/**
		 * @minimum 1
		 * @description The AppID the lobby was created for.
		 */
		appid: number;
		/**
		 * @pattern "^[0-9]+$"
		 * @description The 64-bit SteamID of the newly created lobby.
		 */
		steamid_lobby: string;
	};
}
