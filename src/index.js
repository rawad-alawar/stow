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
    if(err) console.log(err)
		store.dispatch({
			type: 'LOAD_LISTINGS',
			listings: res.body
		})
  })

request
  .get('/checkAuth')
  .end((err, res) => {
    if(err) console.log(err)
    else {
      if(res.body > 0) {
        request
          .get(`/user/${res.body}`)
          .end((err,res) => {
            if(err) console.log(err)
            else {
              store.dispatch({
                type: 'SET_CURRENT_USER',
                user: res.body[0]
              })
            }
          })
      }

    }
  })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)