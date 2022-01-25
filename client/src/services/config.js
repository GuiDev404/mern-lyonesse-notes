export const BASE_URL = 'http://localhost:5000/api';

export const DEFAULT_HEADERS = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export const ENDPOINTS = {
  auth: `/auth/`,
  login: `/auth/signin`,
  logout: `/auth/logout`,
  register: `/auth/signup`,
  refreshToken: `/auth/refresh-token`,

  collectionsRoot: `/collections`,
  collections: (userId)=> `/collections/user/${userId}`,
  notesInCollection: ({ userId , collectionId })=> `/collections/user/${userId}/notes/${collectionId}`, 
  actionInCollection: ({userId, collectionId})=> `/collections/user/${userId}/${collectionId}`, 
  
  addNote: (userId, collectionId)=> `/notes/user/${userId}/collections/${collectionId}`, 
  actionInNotes: (noteId)=> `/notes/${noteId}`, 
  toggleFav: (noteId)=> `/notes/fav/${noteId}`
};

