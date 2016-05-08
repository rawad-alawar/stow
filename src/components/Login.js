import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'

import {loginOrSignUp} from './utils'
import ErrorCase from './Error'

class Login extends Component {

  handleSubmit(e) {
    e.preventDefault()

    const formData = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.props.removeError()
    loginOrSignUp('/login', formData, this.props.setCurrentUser, this.mount)
  }

  mount() {
    ReactDOM.render(<p className='onError'>username or password is incorrect</p>, document.getElementById('err'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('err'))
  }

  componentWillUnmount() {
    this.unmount()
  }

  render() {
    return (
      <div className="row-sm-12 row-centered text-centre">
      <div className="jumbotron col-sm-4 text-center col-centered">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please login </h2>
          <input type="username" id="inputUsername" className="form-control" placeholder="Your username" ref='username' required autofocus/>
          <div id='err'></div>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref='password' required/>
          <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Login</button>
        </form>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.get('currentUser'),
    error: state.get('errorMsg')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: user => {
      dispatch({
        type: 'SET_CURRENT_USER',
        user: user
      })
    },
    removeError: () => {
      dispatch({
        type: 'REMOVE_ERROR'
      })
    },
    dealWithError: errorMsg => {
      dispatch({
        type: 'SAVE_ERROR_TO_PROPS',
        errorMsg: errorMsg
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
