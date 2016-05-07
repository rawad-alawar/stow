import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Home from './components/Home'
import Signup from './components/Signup'
import Upload from './components/Upload'
import Jumbotron from './components/Jumbotron'
import Dashboard from './components/Dashboard'
import Listing from './components/Listing'
import Login from './components/Login'



export default (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
    	<IndexRoute component={Dashboard}/>
      <Route path='login' component={Login}/>
      <Route path='signup' component={Signup}/>
      <Route path='upload' component={Upload}/>
      <Route path='listing' component={Listing}/>
    </Route>
  </Router>
)
