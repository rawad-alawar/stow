import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'

import {loginOrSignUp} from './utils'
import ErrorCase from './Error'

class Signup extends Component {

  handleSubmit(e) {
    e.preventDefault()

    const formData = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      email: this.refs.email.value,
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value
    }

    loginOrSignUp('/signup', formData, this.props.setCurrentUser, this.props.dealWithError)
  }

  printErrorMsg() {
    if(this.props.error.length > 0)
      return <ErrorCase error={this.props.error}/>
  }

  render() {
    return (
      <div className="jumbotron col-centered col-sm-4 text-center">
        <form className="form-signup">
          <h2 className="form-signup-heading">Create your account today</h2>
          <input type="text" id="inputUsername" className="form-control" placeholder="Your username" ref="username" required autofocus/>
          {this.printErrorMsg()}
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref="password" required/>
          <input type="email" id="inputEmail" className="form-control" placeholder="Your email" ref="email" required autofocus/>
          <input type="text" id="firstName" className="form-control" placeholder="Your name" ref="firstName" required autofocus/>
          <input type="text" id="lastName" className="form-control" placeholder="Your last name" ref="lastName" required autofocus/>
          <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Sign up!</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
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
    dealWithError: errorMsg => {
      dispatch({
        type: 'SAVE_ERROR_TO_PROPS',
        errorMsg: errorMsg
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)