import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Upload from './components/Upload'
import Jumbotron from './components/Jumbotron'
import Dashboard from './components/Dashboard'


export default (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
    	<IndexRoute component={Dashboard}/>
      <Route path='signin' component={Signin}/>
      <Route path='signup' component={Signup}/>
      <Route path='upload' component={Upload}/>
    </Route>
  </Router>
)