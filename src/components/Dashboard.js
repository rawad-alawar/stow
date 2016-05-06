import React, {Component} from 'react'
import {connect} from 'react-redux'

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
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Dashboard)