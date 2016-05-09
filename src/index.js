import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import request from 'superagent'

import '../public/styles/main.css'
import reducer from './reducer'
import App from './components/App'
import {store, loadUserToStore, loadListingsToStore} from './components/utils.js'

loadListingsToStore(store)
loadUserToStore(store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)