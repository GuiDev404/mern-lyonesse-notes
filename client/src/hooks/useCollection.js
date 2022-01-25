import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { addCollection, deleteCollection, getCollections, updateCollection } from '../services/collection.services';
import useUser from './useUser';

const useCollection = () => {
  const { id } = useUser()
  const queryClient = useQueryClient();
  const QUERY_KEY = ['collections', id]; 

  const { isLoading, isError, isFetching, error, data: response = [] } = useQuery(QUERY_KEY, ()=> getCollections(id) , {
    staleTime: Infinity,
    enabled: !!id,
  });

  const updateMutation = useMutation(updateCollection, {
    onSuccess: (response)=> {

      queryClient.setQueryData(QUERY_KEY, (cachingData)=> {
        const oldData = cachingData.body;
        const categoriesUpdated = oldData.map(collection=> collection._id !== response.body._id ? collection : response.body);

        return {
          ...oldData,
          body: categoriesUpdated
        };
      })

      // showToast({ type: 'success', text: `${response.message} 😎` });
      // console.log(response.message);
    }
  });

  const createMutation = useMutation(addCollection, {
    onSuccess: (response)=> {
      const oldCollections = queryClient.getQueryData(QUERY_KEY);
      const collectionsUpdated = {...oldCollections, body: oldCollections.body.concat(response.body) }
      queryClient.setQueryData(QUERY_KEY, collectionsUpdated)

      // setToasts({ type: 'success', text: `${response.message} 😎`, delay: 4000 });
      console.log('ok');
    },
    onError: (error)=> {
      console.log(error);
      console.log(error.response);
      if(error.response.status === 409){
        console.log(error.response.data.message);
        // setToasts({ type: 'error', text: error.response.data.message, delay: 4000 })
      } 
    }
  });

  const deleteMutation = useMutation(deleteCollection, {
    onSuccess: (response)=> {
      const oldCollections = queryClient.getQueryData(QUERY_KEY);
      const categoriesUpdated = oldCollections.body.filter(categorie=> categorie._id !== response._id);

      queryClient.setQueryData(QUERY_KEY, {...oldCollections, body: categoriesUpdated })
      // setToasts({ type: 'success', text: `${response.message} 😎`, delay: 4000 });
      // console.log(response.message);
    },
    onError: (error)=> {
      console.log(error);
      if(error.response.status === 409){
        console.log(error.response.data.message);
        // setToasts({ type: 'error', text: error.response.data.message, delay: 4000 })
      } 
    }
  });

  const orderAlphabetic = (order)=> {

    if(response.body){
      const copyResponse = [...response.body];
      let az = copyResponse.sort((a,b)=> a.name.localeCompare(b.name));

      if(!order) {
        az = [...az.reverse()];
      }

      queryClient.setQueryData(QUERY_KEY, {...response, body: az })
    }
    
  }

  const onlyFavs = (onlyIsFav) => {
    if(onlyIsFav){
      queryClient.setQueryData(QUERY_KEY, {
        ...response, 
        body: response.body.filter(col=> col.isFav)  
      })
      return
    }

    queryClient.invalidateQueries(QUERY_KEY)
  }

  return {
    isLoading, isError, isFetching, error, response,
    updateMutation, createMutation, deleteMutation, orderAlphabetic, onlyFavs
  }
}

export default useCollection
