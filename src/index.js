import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import request from 'superagent'

import '../public/styles/main.css'
import reducer from './reducer'
import App from './components/App'



const store = createStore(reducer)

request
  .get('/list')
  .end(function(err, res){
    console.log('index.js',res.body)
		store.dispatch({
			type: 'LOAD_LISTINGS',
			listings: res.body
		})
  })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
switch (expression) {
  case expression:

    break;
  default:

}
