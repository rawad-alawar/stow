import {fromJS} from 'immutable'
import request from 'superagent'

const INITIAL_STATE = fromJS({
  title: 'stow',
  listings: {}
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  	case 'LOAD_LISTINGS':
  	console.log('reducer', action.listings)
  		return state.set('listings', fromJS(action.listings))
    default:
      return state
  }
}