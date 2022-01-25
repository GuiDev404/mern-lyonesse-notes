import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from '../pages/Home'
import Login from '../pages/Login'
import FormEditor from '../pages/FormEditor'
import NotFound from '../pages/404';
import Register from '../pages/Register';
import Config from '../pages/Config';

const AppRoute = () => {

  return (
    <Router>
     <Switch>
        <PrivateRoute path={["/","/home"]} component={Home} exact/>
        <PublicRoute path='/login' component={Login} />
        <PublicRoute path='/register' component={Register}  />
        <PrivateRoute path='/editor/:collectionId' component={FormEditor} />
        <PrivateRoute path='/configuracion' component={Config} />

        <Route path='/404' component={NotFound} exact />
        <Route path='*' exact>
          <Redirect to='/404' />
        </Route>
     </Switch>
    </Router>
  )
}

export default AppRoute
