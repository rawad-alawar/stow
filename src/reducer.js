import {fromJS} from 'immutable'
import request from 'superagent'

const INITIAL_STATE = fromJS({
  title: 'stow',
  listings: {},
  authorised: false
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