/***
 * JSDoc type definitions for the Steam Web API's ICloudService.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService
 */

/*** Parameters for the ICloudService/GetUploadServerInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService#GetUploadServerInfo
 * @description Parameters for getting the UGC upload server information.
 */
export interface GetUploadServerInfoRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user.
	 */
	steamid: string;
}

/*** The response from the ICloudService/GetUploadServerInfo/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService#GetUploadServerInfo
 * @description Response containing the UGC upload server URL.
 */
export interface GetUploadServerInfoResponse {
	response: {
		/**
		 * @format url
		 * @description The URL of the upload server.
		 */
		server_url: string;
		/**
		 * @description The result code for the operation.
		 */
		result: number;
	};
}

/*** Represents the details of a User Generated Content (UGC) file.
 * @description Detailed information about a specific file stored in Steam Cloud.
 */
export interface UGCFileDetails {
	/**
	 * @minimum 0
	 * @description The size of the file in bytes.
	 */
	file_size: number;
	/**
	 * @format url
	 * @description A temporary URL for downloading the file.
	 */
	url: string;
	/**
	 * @minLength 1
	 * @description The original name of the file.
	 */
	filename: string;
	/**
	 * @format unix-timestamp
	 * @description The Unix timestamp when the file was last updated.
	 */
	timestamp: number;
}

/*** Parameters for the ICloudService/GetFileDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService#GetFileDetails
 * @description Parameters for retrieving details about a specific UGC file.
 */
export interface GetFileDetailsRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the UGC file to get details for.
	 */
	ugcid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who owns the file.
	 */
	steamid: string;
}

/*** The response from the ICloudService/GetFileDetails/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService#GetFileDetails
 * @description Response containing the details for a specific UGC file.
 */
export interface GetFileDetailsResponse {
	response: {
		/**
		 * @description The details of the requested UGC file.
		 */
		details: UGCFileDetails;
		/**
		 * @description The result code for the operation.
		 */
		result: number;
	};
}

/*** Represents a file summary in a user's file enumeration.
 * @description A summary of a UGC file.
 */
export interface EnumeratedUGCFile {
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the UGC file.
	 */
	ugcid: string;
	/**
	 * @minLength 1
	 * @description The original name of the file.
	 */
	filename: string;
	/**
	 * @minimum 0
	 * @description The size of the file in bytes.
	 */
	file_size: number;
	/**
	 * @format unix-timestamp
	 * @description The Unix timestamp when the file was last updated.
	 */
	timestamp: number;
}

/*** Parameters for the ICloudService/EnumerateUserFiles/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService#EnumerateUserFiles
 * @description Parameters for listing a user's files for a given app.
 */
export interface EnumerateUserFilesRequest {
	key: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user whose files are being requested.
	 */
	steamid: string;
	/**
	 * @minimum 1
	 * @description The page number for paginated results.
	 */
	page?: number;
	/**
	 * @minimum 1
	 * @description The number of results per page.
	 */
	numperpage?: number;
}

/*** The response from the ICloudService/EnumerateUserFiles/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService#EnumerateUserFiles
 * @description Response containing a paginated list of a user's UGC files.
 */
export interface EnumerateUserFilesResponse {
	response: {
		/**
		 * @description A list of UGC file summaries.
		 */
		files: EnumeratedUGCFile[];
		/**
		 * @minimum 0
		 * @description The total number of files for this user and app.
		 */
		total_files: number;
		/**
		 * @description The result code for the operation.
		 */
		result: number;
	};
}

/*** Parameters for the ICloudService/Delete/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService#Delete
 * @description Parameters for deleting a file from Steam Cloud.
 */
export interface DeleteCloudFileRequest {
	key: string;
	/**
	 * @pattern "^[0-9]+$"
	 * @description The 64-bit ID of the UGC file to delete.
	 */
	ugcid: string;
	/**
	 * @minimum 1
	 * @description The AppID of the game.
	 */
	appid: number;
	/**
	 * @pattern "^[0-9]{17}$"
	 * @description The 64-bit SteamID of the user who owns the file.
	 */
	steamid: string;
	/**
	 * @minLength 1
	 * @description An optional parameter to verify the name of the file being deleted.
	 */
	filename?: string;
}

/*** The response from the ICloudService/Delete/v1 endpoint.
 * @see https://partner.steamgames.com/doc/webapi/ICloudService#Delete
 * @description Response confirming the deletion of a file from Steam Cloud.
 */
export interface DeleteCloudFileResponse {
	response: {
		/**
		 * @description The result code for the operation.
		 */
		result: number;
		/**
		 * @minimum 0
		 * @description The size of the file that was deleted. May not be present.
		 */
		file_size?: number;
	};
}
