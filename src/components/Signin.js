import React from 'react'
import {Router, Route, browserHistory, Link} from 'react-router'
import {connect} from 'react-redux'

var Signin = React.createClass({
  render: function () {
    return (
      <div>
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign in </h2>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
          <div className="checkbox">
              <input type="checkbox" value="remember-me"/> 
          </div>
          
          <button className="btn btn-lg btn-primary btn-block" type="submit"/>
        </form>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Signin)
