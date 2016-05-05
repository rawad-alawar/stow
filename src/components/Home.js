import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './Header'

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.children}
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