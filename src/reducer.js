import {fromJS} from 'immutable'
import request from 'superagent'

const INITIAL_STATE = fromJS({
  title: 'stow',
  listings: {},
  authorised: false,
  currentUser: {users_ID:1,username:'keanu',location:'wellington',details:'hi there i need more money so come put stuff in my roof. wont steal it promise',lastName:'carnevale',email:'kdawg@bootyholewarrior.serve'},
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  	case 'LOAD_LISTINGS':
  		return state.set('listings', fromJS(action.listings))
    case 'AUTHORISE':
      return state.set('authorised', action.authorised)
    default:
      return state
  }
}