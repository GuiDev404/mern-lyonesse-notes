import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PublicRoute = ({ location, component: Component ,...props }) => {
  const { isLogged } = useAuth()
  return (
    <Route {...props} exact>
      {!isLogged()
        ? <Component location={location}/>
        : <Redirect to='/home' />
      }
    </Route>
  )
}

export default PublicRoute