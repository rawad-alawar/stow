import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Upload from './components/Upload'
import Jumbotron from './components/Jumbotron'


export default (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <Route path='/signin' component={Signin}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/upload' component={Upload}/>
    </Route>
  </Router>
)