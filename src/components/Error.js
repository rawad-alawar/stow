import React, {Component} from 'react'
import {connect} from 'react-redux'

class ErrorCase extends Component {

  render() {
    return <p>{this.props.error}</p>
  }

}

export default ErrorCase