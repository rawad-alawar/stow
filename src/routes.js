import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Upload from './components/Upload'
import Jumbotron from './components/Jumbotron'


export default (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/upload' component={Upload}/>
    </Route>
  </Router>
)
