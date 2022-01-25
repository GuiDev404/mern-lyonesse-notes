import { ENDPOINTS } from "./config";
import { requestAuth } from "./index";

const getCollections = (userId) =>
  requestAuth(ENDPOINTS.collections(userId), "get");

const addCollection = (data) =>
  requestAuth(ENDPOINTS.collectionsRoot, "post", data);

const updateCollection = ({ userId, collectionId, data }) =>
  requestAuth(ENDPOINTS.actionInCollection({ userId, collectionId }), "put", data);

const deleteCollection = ({ userId, collectionId }) =>
  requestAuth(ENDPOINTS.actionInCollection({ userId, collectionId }), "delete");

const getNotesInCollection = ({ userId, collectionId }) =>
  requestAuth(ENDPOINTS.notesInCollection({ userId, collectionId }), "get");

export {
  getCollections,
  addCollection,
  getNotesInCollection,
  updateCollection,
  deleteCollection
}