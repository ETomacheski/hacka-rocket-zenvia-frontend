import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/index'
import UserRegister from './pages/UserResister/index'
import ProductItens from './pages/ProductItem/index'
import ProductRegister from './pages/CreateProduct/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path='/' />
      <Route component={Login} exact path='/login' />
      <Route component={UserRegister} exact path='/userRegister' />
      <Route component={ProductItens} exact path='/productItens' />
      <Route component={ProductRegister} exact path='/productRegister' />
    </BrowserRouter>
  )
}

export default Routes
