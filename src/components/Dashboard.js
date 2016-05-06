import React, {Component} from 'react'
import {connect} from 'react-redux'

import Jumbotron from './Jumbotron'
import Listings from './Listings'


class Dashboard extends Component {
  render() {
    return ( 
      <div>
        <Jumbotron />
        <Listings />
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