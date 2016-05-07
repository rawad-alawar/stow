import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to {this.props.title}</h1>
        <h3>Stow is a community where people come together to help store one anothers belongings or advertise their space for use</h3>
        <form><input type="text" name="usernameBox" value="username"/>
        <input type="text" name="passwordBox" value="password"/>
        <button>Sign Up</button>
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

export default connect(mapStateToProps)(Home)
