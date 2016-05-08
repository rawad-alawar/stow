import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Jumbotron extends Component {
  render() {
    return (
    <div className="jumbotron col-sm-12 text-center">
      <h1 className='bluetxt'>Stow</h1>
      <p className='lead'>Turn your spare space into spare cash!</p>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Jumbotron)