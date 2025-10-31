import { SERVER_URL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// Photos
export const getAllPhotosAPI = () => commonAPI("GET", `${SERVER_URL}/photos`);
export const addPhotoAPI = (data) => commonAPI("POST", `${SERVER_URL}/photos`, data);
export const deletePhotoAPI = (id) => commonAPI("DELETE", `${SERVER_URL}/photos/${id}`);

// Albums
export const getAlbumsAPI = () => commonAPI("GET", `${SERVER_URL}/albums`);
export const addAlbumAPI = (data) => commonAPI("POST", `${SERVER_URL}/albums`, data);

// Users
export const getUsersAPI = () => commonAPI("GET", `${SERVER_URL}/users`);
export const addUserAPI = (data) => commonAPI("POST", `${SERVER_URL}/users`, data);
