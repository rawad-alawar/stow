import React from 'react'
import {Router, Route, browserHistory,IndexRoute} from 'react-router'
import Main from './components/Main'

import Home from './components/Home'
import Signin from './components/Signin'

export default (
  	<Router history={browserHistory}>
	  	<Route path ='/' component={Main} >
	  	  <IndexRoute component={Home} />
	  	  <Route path ='/signin' component={Signin} />
      </Route>
  	</Router>
)