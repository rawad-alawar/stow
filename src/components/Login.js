import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'

class Login extends Component {

  handleSubmit(e) {
    e.preventDefault()
    const formData = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }

    request.post('/login')
      .send(formData)
      .end((err, res)=>{
        if(err) console.log('ERROR ', err)
        else {
          console.log('Server SAYS: ',res.body)
          this.props.authorise(true)
        }
      })
  }

  render() {
    return (
      <div className="jumbotron col-sm-4 text-center col-centered">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please login </h2>
          <label className="sr-only">Username</label>
          <input type="username" id="inputUsername" className="form-control" placeholder="Your username" ref='username' required autofocus/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref='password' required/>
          <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    authorise: authorised => {
      dispatch({
        type: 'AUTHORISE',
        authorised: authorised
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
