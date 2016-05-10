import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'

import {loginOrSignUp} from './utils'

class Signup extends Component {

  handleSubmit(e) {
    e.preventDefault()

    const formData = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      email: this.refs.email.value
    }

    loginOrSignUp('/signup', formData, this.props.setCurrentUser, this.mount)
  }

  mount() {
    ReactDOM.render(<p className='onError'>Username is already in use</p>, document.getElementById('err'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('err'))
  }

  componentWillUnmount() {
    this.unmount()
  }

  render() {
    return (
      <div className="row-sm-12 row-centered">
      <div className="jumbotron col-centered col-sm-4 text-center">
        <form className="form-signup">
          <h2 className="form-signup-heading">Create your account today</h2>
          <input type="text" id="inputUsername" className="form-control" placeholder="Your username" ref="username" required autofocus/>
          <div id='err'></div>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref="password" required/>
          <input type="email" id="inputEmail" className="form-control" placeholder="Your email" ref="email" required autofocus/>
          <button type="button" className="btn btn-lg btn-primary pull-right" onClick={this.handleSubmit.bind(this)}>Sign up!</button>
          <Link to='/'>
            <button type="button" className="btn btn-lg btn-danger pull-left">Cancel</button>
          </Link>
        </form>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: user => {
      dispatch({
        type: 'SET_CURRENT_USER',
        user: user
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)
