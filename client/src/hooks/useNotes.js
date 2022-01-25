import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { deleteNote, updateNote, newNote, getNotes } from '../services/notes.services';
import useUser from './useUser';
import {useParams} from 'react-router-dom';

const useNotes = () => {
  const { id } = useUser();
  const queryClient = useQueryClient();
  const params = useParams()
  const QUERY_KEY = 'notes';

  const { isLoading, isError, error, data: response = [], isFetching }  = useQuery([QUERY_KEY, params.collectionId, id], () => 
    getNotes( id, params.collectionId),
  {
    staleTime: Infinity,
    retry: 3,
    enabled: Boolean(id && params.collectionId),
  });

  const updateMutation = useMutation(updateNote, {
    onSuccess: async (response)=> {
      const oldNotes = queryClient.getQueryData([QUERY_KEY, params.collectionId, id]);
    
      const collectionNotesUpdated = {
        ...oldNotes,
        body: oldNotes.body.map(nota=> nota._id !== response.body._id ? nota : response.body)
      }
      
      queryClient.setQueryData([QUERY_KEY, params.collectionId, id], collectionNotesUpdated)

      // setToasts({ type: 'success', text: `${successResponse.message}`, delay: 4000 });
    }
  });

  const createMutation = useMutation(newNote, {
    onSuccess: (response)=> {
      const oldNotes = queryClient.getQueryData([QUERY_KEY, params.collectionId, id]);
    
      const collectionNotesUpdated = {...oldNotes, body: oldNotes.body.concat(response.body) }
      queryClient.setQueryData([QUERY_KEY, params.collectionId, id], collectionNotesUpdated)
  
      // setToasts({ type: 'success', text: `${response.message}`, delay: 4000 });
    }
  });

  const deleteMutation = useMutation(deleteNote, {
    onSuccess: (response)=> {
      const oldNotes = queryClient.getQueryData([QUERY_KEY, params.collectionId, id]);
    
      const collectionNotesUpdated = {...oldNotes, body: oldNotes.body.filter(nota=> nota._id !== response.body) }
      queryClient.setQueryData([QUERY_KEY, params.collectionId, id], collectionNotesUpdated)

      // setToasts({ type: 'success', text: `${response.message}`, delay: 4000 });
    }
  });

  return {
    isLoading, isError, isFetching, error, response, 
    updateMutation, createMutation, deleteMutation
  }
}

export default useNotes
