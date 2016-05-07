import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Header from './Header'
import Jumbotron from './Jumbotron'


class Home extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>Welcome to {this.props.title}</h1>
        <h3>Stow is a community where people come together to help store one anothers belongings or advertise their space for use</h3>
        <form><input type="text" name="usernameBox" value="username"/>
        <input type="text" name="passwordBox" value="password"/>
        <button>Sign Up</button>
        </form>
=======
        <Header/>
        {this.props.children}
>>>>>>> b76d52692d3d65fb2cfe7c3b3f7e883cd5ac2fb0
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Home)
