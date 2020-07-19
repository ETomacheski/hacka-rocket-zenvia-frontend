import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path='/' />
      <Route component={Login} exact path='/login' />
    </BrowserRouter>
  )
}

export default Routes
