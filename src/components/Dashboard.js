import React, {Component} from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import Jumbotron from './Jumbotron'
import ListingsContainer from './ListingsContainer'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      userid: this.props.currentUser
    }
  }
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
    currentUser: state.get('currentUser')
  }
}

export default connect(mapStateToProps)(Dashboard)
