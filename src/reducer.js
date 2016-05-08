import {fromJS, Map} from 'immutable'
import request from 'superagent'

const INITIAL_STATE = fromJS({
  listings: {},
  currentUser: {}
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  	case 'LOAD_LISTINGS':
  		return state.set('listings', fromJS(action.listings))
    case 'LOGOUT':
      return state.set('currentUser', Map({}))
    case 'SET_CURRENT_USER':
      return state.set('currentUser', fromJS(action.user))
    default:
      return state
  }
}