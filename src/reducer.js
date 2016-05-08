import {fromJS, Map} from 'immutable'
import request from 'superagent'

const INITIAL_STATE = fromJS({
  listings: {},
  currentUser: {},
  currentUserTest: {users_ID:1,username:'keanu',location:'wellington',details:'hi there i need more money so come put stuff in my roof. wont steal it promise',lastName:'carnevale',email:'kdawg@bootyholewarrior.serve'}
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