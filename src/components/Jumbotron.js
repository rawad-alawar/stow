import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {checkAuthDeep, checkLogIn, logout} from './utils'


class Jumbotron extends Component {

  handleClick(e) {
    e.preventDefault()
      checkAuthDeep({
        pass: '/upload',
        fail: '/login'
      })
  }

  render() {
    return (
    <div className="jumbotron main-jumbotron col-sm-12 text-center">
      <h1 className='bigheading'>Stow</h1>
      <p className='lead'>Turn your spare space into spare cash!</p>
      <button name='upload' type='button' className='btn btn-lg btn-info' onClick={this.handleClick.bind(this)}>List your space now!</button>
    </div>
    )
  }
}



function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Jumbotron)
