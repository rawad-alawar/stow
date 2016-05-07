import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'

class Signup extends Component {

  handleSubmit(e) {
    e.preventDefault()
    const formData = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      email: this.refs.email.value,
      firstName: this.refs.firstname.value,
      lastName: this.refs.lastname.value
    }

    request.post('/signup')
      .send(formData)
      .end((err, res)=>{
        if(err) console.log('ERROR ', err)
        else {
          console.log('Server SAYS: ', res.body)
        }
      })
  }

  render() {
    return (
      <div className="jumbotron col-sm-4 text-center">
        <form className="form-signup">
          <h2 className="form-signup-heading">Create your account today</h2>
          <label className="sr-only">Desired Username</label>
          <input type="text" id="inputUsername" className="form-control" placeholder="Your username" ref="username" required autofocus/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref="password" required/>
          <label className="sr-only">E-mail</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Your email" ref="email" required autofocus/>
          <label className="sr-only">First-name</label>
          <input type="text" id="firstName" className="form-control" placeholder="Your name" ref="firstname" required autofocus/>
          <label className="sr-only">Last-name</label>
          <input type="text" id="lastName" className="form-control" placeholder="Your last name" ref="lastname" required autofocus/>
          <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Sign up!</button>
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
