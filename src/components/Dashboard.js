import React, {Component} from 'react'
import {connect} from 'react-redux'

import Jumbotron from './Jumbotron'
import ListingsContainer from './ListingsContainer'
import request from 'superagent'

var LISTINGS ;

request
  .get('/list')
  .end(function(err, res){
    
    
  }) 


class Dashboard extends Component {
  render() {
    return ( 
      <div>
        <Jumbotron />
        <ListingsContainer listings={LISTINGS} />
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