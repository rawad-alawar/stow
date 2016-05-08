import {hashHistory} from 'react-router'
import request from 'superagent'

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
  console.log('Callback ', cbSuccess)
  request
    .post(action)
    .send(formData)
    .end((err,res) => {
      if(err) console.log(err)
      else {
        console.log("RES>BODY ", res.body)
        switch(res.body) {
          case 'ERR:UIU':
            cbError(res.body)
            break
          case 'ERR:IUOP':
            console.log('IOUP error')
            cbError(res.body)
            break
          default:
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
      }
    })
}