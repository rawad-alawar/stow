import React, {Component} from 'react'
import {connect} from 'react-redux'

import Jumbotron from './Jumbotron'
import ListingsContainer from './ListingsContainer'
import request from 'superagent'


request
  .get('/list')
  .end(function(err, res){
    var ListingData = res.body[0]
    const Listing = {
      heading: ListingData.heading,
      suburb:ListingData.suburb,
      city:ListingData.city,
      country:ListingData.country,
      price:ListingData.price,
      startDate:ListingData.startDate,
      endDate:ListingData.endDate,
      details:ListingData.details
    }
    console.log('the listing data',Listing)
  }) 


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