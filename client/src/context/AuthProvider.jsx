import React, { createContext, useMemo } from 'react'
import useStorage from '../hooks/useStorage';

const DEF_USER = { id: 1, username: '_GR' };

export const AuthContext = createContext(DEF_USER);

const AuthProvider = ({ children }) => {
  const { storage, addData, removeItem } = useStorage('auth-presupuesto');

  const contextValue = useMemo(()=> {

    return {
      accessToken: storage?.accessToken ? `Bearer ${storage.accessToken}` : null, 
      refreshToken: storage?.refreshToken ? `Bearer ${storage.refreshToken}` : null, 
      setLogin: (info)=> addData(info),
      logoutUser: removeItem,
      isLogged: ()=> !!storage?.accessToken
    }
  }, [storage?.accessToken, addData])

  console.log('render auth provider');

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
