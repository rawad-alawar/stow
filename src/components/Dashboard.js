import React, {Component} from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import Jumbotron from './Jumbotron'
import ListingsContainer from './ListingsContainer'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <ListingsContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Dashboard)