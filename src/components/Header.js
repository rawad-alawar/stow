import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'

import {checkAuthDeep, checkLogIn, logout} from './utils'

class Header extends Component {

  componentDidMount() {
    if(this.props.currentUser.size > 1)
      this.mount()
  }

  componentDidUpdate() {
    if(this.props.currentUser.size > 1)
      this.mount()
    else
      this.unmount()
  }

  mount() {
    ReactDOM.render(
      <a type='link' className='accountLink'>☻ {this.props.currentUser.get('username')}</a>, document.getElementById('accountBtn')
    )
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('accountBtn'))
  }

  handleClick(e) {
    e.preventDefault()
    switch(e.target.name) {
      case 'logInOut':
        if(this.props.currentUser.size > 0) {
          logout(() => {this.props.logOut()})
        }
        else
          hashHistory.push('/login')
        break
    }
  }

  render() {
    const id = this.props.currentUser.get('user_ID')
    const userSize = this.props.currentUser.size
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
          <Link to='/'>
            <button name='home' id='homeBtn' type='button' className='btn btn-med btn-info'>Home</button>
            </Link>
            <Link to='/signup'>
              <button type='button' id='signupBtn' className={`pull-right btn btn-med btn-info ${checkLogIn(userSize, 'signup')}`}>Sign-up</button>
            </Link>
            <button name='logInOut' id='loginoutBtn' type='button' className='pull-right btn btn-med btn-info' onClick={this.handleClick.bind(this)}>{checkLogIn(userSize, 'logInOut')}</button>
            <Link to={`user/${id}`}>
              <div id='accountBtn' className='pull-right'></div>
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.get('currentUser')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch({
        type: 'LOGOUT'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
