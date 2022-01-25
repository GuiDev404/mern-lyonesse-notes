import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import Navbar from '../components/organism/Navbar';

const PrivateRoute = ({ location, children, component: Component, ...props }) => {
  const { isLogged } = useAuth();
  
  return <Route {...props}>
      {isLogged() 
        ? <>
          <Navbar />
          {children ? children : <Component />}
        </>
        : <Redirect to={{pathname: '/login', state: { from: location }}} />
      }
    </Route>
}

export default PrivateRoute
