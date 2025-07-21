/***
 * JSDoc type definitions for the Steam Web API's IGameNotificationsService.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService
 */

// ---- Helper Interfaces ----

/*** Represents a localized string for a notification.
 * @description A key-value pair for a language and its corresponding text.
 */
export interface NotificationLocalization {
	/**
	 * @description The language code (e.g., "english", "french").
	 */
	language: string;
	/**
	 * @description The localized text for the notification.
	 */
	text: string;
}

/*** Represents a user to be included in a notification session.
 * @description Specifies a user by their SteamID.
 */
export interface NotificationUser {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
}

/*** Represents the status of a user within a notification session.
 * @description Contains the user's current state and an optional message.
 */
export interface UserNotificationStatus {
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
	/**
	 * @pattern "^(pending|completed)$"
	 * @description The state of the user in the session. 'pending' means the user has not acted; 'completed' means they have.
	 */
	state: string;
	/**
	 * @description A localized message describing the user's status, if available.
	 */
	message?: string;
}

/*** Represents a summary of a notification session.
 * @description A condensed view of a session, typically returned in a list.
 */
export interface NotificationSessionSummary {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit session ID.
	 */
	sessionid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game this session belongs to.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A 64-bit game-defined context value.
	 */
	context: string;
	/**
	 * @description The localized title of the notification.
	 */
	title: string;
	/**
	 * @format unix-timestamp
	 * @description The time the session was created.
	 */
	time_created: number;
	/**
	 * @format unix-timestamp
	 * @description The time the session was last updated.
	 */
	time_updated: number;
	/**
	 * @pattern "^(open|active|closed)$"
	 * @description The current state of the session.
	 */
	state: string;
	/**
	 * @description The status of the currently authenticated user in this session, if applicable.
	 */
	user_status?: UserNotificationStatus;
}

/*** Represents the full details of a notification session.
 * @description A complete view of a session, including all users and localizations.
 */
export interface NotificationSessionDetails {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit session ID.
	 */
	sessionid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game this session belongs to.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A 64-bit game-defined context value.
	 */
	context: string;
	/**
	 * @description An array of all localizations for the notification's title.
	 */
	title: NotificationLocalization[];
	/**
	 * @format unix-timestamp
	 * @description The time the session was created.
	 */
	time_created: number;
	/**
	 * @format unix-timestamp
	 * @description The time the session was last updated.
	 */
	time_updated: number;
	/**
	 * @pattern "^(open|active|closed)$"
	 * @description The current state of the session.
	 */
	state: string;
	/**
	 * @description An array containing the status of all users in the session.
	 */
	users: UserNotificationStatus[];
}

// ---- CreateSession Endpoint ----

/*** Parameters for the IGameNotificationsService/CreateSession/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#CreateSession
 * @description Parameters for creating a new notification session.
 */
export interface CreateSessionRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]+$"
	 * @description A 64-bit game-defined context value.
	 */
	context: string;
	/**
	 * @description A JSON-encoded string representing an array of `NotificationLocalization` objects for the title.
	 */
	title: string;
	/**
	 * @description A JSON-encoded string representing an array of `NotificationUser` objects.
	 */
	users: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who is creating the session.
	 */
	steamid: string;
}

/*** The response from the IGameNotificationsService/CreateSession/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#CreateSession
 * @description Response containing the newly created session ID.
 */
export interface CreateSessionResponse {
	response: {
		/**
		 * @pattern "^[0-9]+$"
		 * @description The 64-bit ID of the newly created session.
		 */
		sessionid: string;
	};
}

// ---- UpdateSession Endpoint ----

/*** Parameters for the IGameNotificationsService/UpdateSession/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#UpdateSession
 * @description Parameters for updating an existing notification session.
 */
export interface UpdateSessionRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the session to update.
	 */
	sessionid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description A JSON-encoded string representing an array of `NotificationLocalization` objects for the title. Optional.
	 */
	title?: string;
	/**
	 * @description A JSON-encoded string representing an array of `NotificationUser` objects. Optional.
	 */
	users?: string;
	/**
	 * @pattern "^(open|active|closed)$"
	 * @description The new state of the session. Optional.
	 */
	state?: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who is updating the session.
	 */
	steamid: string;
}

/*** The response from the IGameNotificationsService/UpdateSession/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#UpdateSession
 * @description Response confirming the session update.
 */
export interface UpdateSessionResponse {
	response: {
		/**
		 * @pattern "^[0-9]+$"
		 * @description The 64-bit ID of the updated session.
		 */
		sessionid: string;
	};
}

// ---- EnumerateSessionsForApp Endpoint ----

/*** Parameters for the IGameNotificationsService/EnumerateSessionsForApp/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#EnumerateSessionsForApp
 * @description Parameters for listing all sessions for an app.
 */
export interface EnumerateSessionsForAppRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID to enumerate sessions for.
	 */
	appid: number;
	/**
	 * @description Whether to include all user messages in the response. Defaults to false.
	 */
	include_all_user_messages?: boolean;
	/**
	 * @description Whether to include the authenticated user's message in the response. Defaults to false.
	 */
	include_auth_user_message?: boolean;
	/**
	 * @description The language for localization.
	 */
	language?: string;
}

/*** The response from the IGameNotificationsService/EnumerateSessionsForApp/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#EnumerateSessionsForApp
 * @description Response containing a list of session summaries.
 */
export interface EnumerateSessionsForAppResponse {
	response: {
		/**
		 * @description A list of notification session summaries.
		 */
		sessions: NotificationSessionSummary[];
	};
}

// ---- GetSessionDetailsForApp Endpoint ----

/*** Represents an identifier for a session when requesting details.
 * @description Used in a JSON array to specify which sessions to retrieve.
 */
export interface SessionIdentifier {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the session.
	 */
	sessionid: string;
}

/*** Parameters for the IGameNotificationsService/GetSessionDetailsForApp/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#GetSessionDetailsForApp
 * @description Parameters for getting the full details of specific sessions.
 */
export interface GetSessionDetailsForAppRequest {
	key: string;
	/**
	 * @description A JSON-encoded string representing an array of `SessionIdentifier` objects.
	 */
	sessions: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @description The language for localization.
	 */
	language?: string;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user whose status should be included. Optional.
	 */
	steamid?: string;
}

/*** The response from the IGameNotificationsService/GetSessionDetailsForApp/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#GetSessionDetailsForApp
 * @description Response containing the full details for the requested sessions.
 */
export interface GetSessionDetailsForAppResponse {
	response: {
		/**
		 * @description A list of detailed notification sessions.
		 */
		sessions: NotificationSessionDetails[];
	};
}

// ---- DeleteSession Endpoint ----

/*** Parameters for the IGameNotificationsService/DeleteSession/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#DeleteSession
 * @description Parameters for deleting a notification session.
 */
export interface DeleteSessionRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the session to delete.
	 */
	sessionid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user deleting the session.
	 */
	steamid: string;
}

/*** The response from the IGameNotificationsService/DeleteSession/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/IGameNotificationsService#DeleteSession
 * @description Response confirming the session deletion.
 */
export interface DeleteSessionResponse {
	response: {
		/**
		 * @pattern "^[0-9]+$"
		 * @description The 64-bit ID of the deleted session.
		 */
		sessionid: string;
	};
}
