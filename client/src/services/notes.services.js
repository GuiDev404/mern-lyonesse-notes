import { ENDPOINTS } from "./config";
import { requestAuth } from "./index";

const newNote = ({ userId, collectionId, data }) =>
  requestAuth(ENDPOINTS.addNote(userId, collectionId), "post", data);

const updateNote = ({ id, data })=> 
  requestAuth(ENDPOINTS.actionInNotes(id), 'put', data);

const deleteNote = (id)=> 
  requestAuth(ENDPOINTS.actionInNotes(id), 'delete');

const getNote = (id)=> 
  requestAuth(ENDPOINTS.actionInNotes(id), 'get');

const toggleFav = (id)=> 
  requestAuth(ENDPOINTS.toggleFav(id), 'put');

const getNotes = (userId , collectionId)=> 
  requestAuth(ENDPOINTS.notesInCollection({ userId , collectionId }), 'get');

export {
  newNote,
  updateNote,
  deleteNote,
  getNote,
  toggleFav,
  getNotes
}