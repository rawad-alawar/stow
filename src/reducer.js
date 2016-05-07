import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
<<<<<<< HEAD
  title: 'Stow'
=======
  title: 'stow',
>>>>>>> b76d52692d3d65fb2cfe7c3b3f7e883cd5ac2fb0
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}
