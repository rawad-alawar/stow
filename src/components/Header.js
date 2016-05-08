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
      <button type='button' className='btn btn-med btn-info'>☻ account: {this.props.currentUser.get('username')}</button>, document.getElementById('accountBtn')
    )
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('accountBtn'))
  }

  handleClick(e) {
    e.preventDefault()
    switch(e.target.name) {
      case 'upload':
        checkAuthDeep({
          pass: '/upload',
          fail: '/login'
        })
        break
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
    var currUser = this.props.currentUser.size
    const id = this.props.currentUser.get('users_ID')
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <button name='upload' type='button' className='btn btn-med btn-info' onClick={this.handleClick.bind(this)}>Upload</button>
            <Link to='/'>
              <button type='button' className='btn btn-med btn-info'>Home</button>
            </Link>
            <Link to='/signup'>
              <button type='button' className={`pull-right btn btn-med btn-info ${checkLogIn(currUser, 'signup')}`}>Sign-up</button>
            </Link>
            <button name='logInOut' type='button' className='pull-right btn btn-med btn-info' onClick={this.handleClick.bind(this)}>{checkLogIn(currUser, 'logInOut')}</button>
            <Link to={`user/${this.props.currentUser.get('id')}`}>
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
