import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import Home from './components/Home'
import PageTwo from './components/PageTwo'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
      <Route path='/pageTwo' component={PageTwo}/>
    </Route>
  </Router>
)