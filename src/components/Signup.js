import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Signup extends Component {
  render() {
    return (
      <div className="jumbotron col-sm-4 text-center">
        <form className="form-signup">
          <h2 className="form-signup-heading">Create your account today</h2>
          <label className="sr-only">Desired Username</label>
          <input type="text" id="inputUsername" className="form-control" placeholder="Your username" required autofocus/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
          <label for="confirmPassword" className="sr-only">Confirm Password</label>
          <input type="password" id="confirmPassword" className="form-control" placeholder="confirmPassword" required/>
          <label className="sr-only">E-mail</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Your email" required autofocus/>
          <label className="sr-only">First-name</label>
          <input type="text" id="firstName" className="form-control" placeholder="Your name" required autofocus/>
          <label className="sr-only">Last-name</label>
          <input type="text" id="lastName" className="form-control" placeholder="Your last name" required autofocus/>
          <button type="button" className="btn btn-lg btn-primary">Sign up!</button>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Signup)