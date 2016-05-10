import {hashHistory} from 'react-router'
import request from 'superagent'
import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

export {store}

export const checkAuthDeep = handler => {
  request
    .get('/checkAuth')
    .end((err, res) => {
      if(err) (console.log(err))
      else {
        res.body > 0 ?
          hashHistory.push(handler.pass) :
          hashHistory.push(handler.fail)
      }
    })
}

export const logout = callback => {
  request
    .get('/logout')
    .end((err,res) => {
      if(err) console.log(err)
      else {
        hashHistory.push('/')
        callback()
      }
    })
}

export const checkLogIn = (currUser, target) => {
  switch(target) {
    case 'signup':
      if(currUser > 0)
        return 'hidden'
      break
    case 'logInOut':
      if(currUser > 0) return 'Log-out'
      else return 'Log-in'
      break
  }
}

export const loginOrSignUp = (action, formData, cbSuccess, cbError) => {
  request
    .post(action)
    .send(formData)
    .end((err,res) => {
      if(err) console.log(err)
      else {
        if(Number.isInteger(res.body)){
          request
            .get(`/user/${res.body}`)
            .end((err,res) => {
              if(err) console.log(err)
              else {
                hashHistory.push('/')
                cbSuccess(res.body[0])
              }
            })
        }
        else cbError()
      }
    })
}

export const loadUserToStore = () => {
  request
    .get('/checkAuth')
    .end((err,userId) => {
      if(err) console.log(err)
      else {
        if(userId.body > 0) {
          request
            .get(`/user/${userId.body}`)
            .end((err,userData) => {
              if(err) console.log(err)
              else {
                store.dispatch({
                  type: 'SET_CURRENT_USER',
                  user: userData.body[0]
                })
              }
            })
        }
      }
    })
}

export const loadListingsToStore = () => {
  request
  .get('/list')
  .end(function(err, res){
    if(err) console.log(err)
    store.dispatch({
      type: 'LOAD_LISTINGS',
      listings: res.body
    })
  })
}

export const addNewListing = (action, listingId, formData) => {
  request
    .get('/checkAuth')
    .end((err,userId) => {
      if(err) console.log(err)
      else {
        if(userId.body > 0) {
          request
            .get(`/user/${userId.body}`)
            .end((err,userData) => {
              if(err) console.log(err)
              else {
                request
                  .post(`/add/${userId.body}`)
                  .send({action: action, listingId: listingId, formData: formData})
                  .end((err,changedId) => {
                    if(err) console.log(err)
                    else {
                      if(changedId.body > 0){
                        console.log('success')
                        loadListingsToStore()
                        if(action == 'upload')
                          hashHistory.push('/')
                      }
                      else console.log('fail')
                    }
                  })
              }
            })
        }
        else hashHistory.push('/login')
      }
    })
}

export const validateForm = formData => {
  for (let entry in formData) {
    let mustHave = formData[entry].mustHave
    let value = formData[entry].value
    if (mustHave == true && value == '')
      return {isValid: false, entry: entry}
  }
  return {isValid: true}
}

export const deleteListing = listingId => {
  request
    .delete(`/listing/${listingId}`)
    .end((err,changedId) => {
      if(err) console.log(err)
      else {
        if(changedId.body > 0) {
          console.log('success')
          loadListingsToStore()
        }
        else {
          console.log('you are not logged in')
          hashHistory.push('/login')
        }
      }
    })
}
