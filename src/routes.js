import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Home from './components/Home'
import Signup from './components/Signup'
import Upload from './components/Upload'
import Dashboard from './components/Dashboard'
import ListingProfile from './components/ListingProfile'
import Login from './components/Login'
import UserProfile from './components/UserProfile'


export default (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path='/' component={Home}>
    	<IndexRoute component={Dashboard}/>
      <Route path='login' component={Login}/>
      <Route path='signup' component={Signup}/>
      <Route path='upload' component={Upload}/>
      <Route path='listing/:id' component={ListingProfile}/>
      <Route path='user/:id' component={UserProfile}/>

    </Route>
  </Router>
)
