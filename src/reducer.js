import {fromJS, Map} from 'immutable'
import request from 'superagent'

const INITIAL_STATE = fromJS({
  listings: {},
  feedback: {},
  users: {},
  currentUser: {},
  showFeedBack: false,
  currentUserTest: {user_ID:2,username:'keanu',location:'wellington',details:'hi there i need more money so come put stuff in my roof. wont steal it promise',lastName:'carnevale',email:'kdawg@email.serve'}
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  	case 'LOAD_LISTINGS':
  		return state.set('listings', fromJS(action.listings))
    case 'LOAD_FEEDBACK':
      return state.set('feedback', fromJS(action.feedback))
    case 'LOAD_USERS':
      return state.set('users', fromJS(action.users))
    case 'LOGOUT':
      return state.set('currentUser', Map({}))
    case 'SET_CURRENT_USER':
      return state.set('currentUser', fromJS(action.user))
    case 'TOGGLE_FEEDBACK':
      return state.set('showFeedBack', fromJS(action.showFeedBack))
    default:
      return state
  }
}
