import React, { useState, useEffect } from 'react'
import useAuth from './useAuth'
import jwtDecode from 'jwt-decode'

const useUser = () => {
  const { refreshToken } = useAuth();
  const [user, setUser] = useState({});

  useEffect(()=> {
    const data = jwtDecode(refreshToken)
    
    setUser(data)
  }, [])

  return user;
}

export default useUser
