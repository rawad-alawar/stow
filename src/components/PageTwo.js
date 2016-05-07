import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class PageTwo extends Component {
  render() {
    return (
      <div>
        <h2>Page Two!</h2>
        <p>I'm page 30000!</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(PageTwo)