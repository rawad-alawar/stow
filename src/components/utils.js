
import {hashHistory} from 'react-router'
import request from 'superagent'

export const checkAuthDeep = handler => {
  request
    .get('/checkAuth')
    .end((err, res) => {
      if(err) (console.log(err))
      else {
        res.body === true ?
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

export const loginOrSignUp = (action, formData, callback) => {
  request
    .post('/login')
    .send(formData)
    .end((err,res) => {
      if(err) console.log(err)
      else {
        request
          .get(`/user/${res.body}`)
          .end((err,res) => {
            if(err) console.log(err)
            else {
              hashHistory.push('/')
              callback(res.body[0])
            }
          })
      }
    })
}