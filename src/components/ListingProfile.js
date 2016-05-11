import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'

import ListingsContainer from './ListingsContainer'
import ListingsPreview from './ListingPreview'
import {addNewListing} from './utils'

class ListingProfile extends Component {

  constructor() {
    super()
    this.state = {
      rentButton: <button name="rent" type="button" className="btn btn-lg btn-info" onClick={this.handleClick.bind(this)}>Rent this Space</button>,
      email: <p>no email available</p>
    }
  }

  componentWillReceiveProps(nextProps) {
    const {id} = this.props.params
    const listing = nextProps.listings.filter(l => l.get('listing_ID') == id).first()
    this.getUserEmail(id)
    if(!listing.get('isAvailable'))
      this.setState({rentButton: <div className="alert alert-success" role="alert"><h4>Congratulations! You are renting this space!</h4></div>})
  }

  getUserEmail(id){
    request
    .get('/singleuser/' + id)
    .end((err, res) => {
      console.log(res)
      var element = <div><p>{res.body.email}</p></div>
      this.setState({
        email: this.state.email = element
      })
      return
    })
  }

  handleClick(e) {
    e.preventDefault()
    switch(e.target.name) {
      case 'rent':
        addNewListing('rent', this.props.params.id, null)
        break
      case 'back':
        hashHistory.push('/')
        break
    }
  }


  render() {
    const {id} = this.props.params
    const listing = this.props.listings.filter(l => l.get('listing_ID') == id).first()
    return (
      <div className="col-sm-12 col-centered">
        <div className="row listingRow">
          <div className="col-sm-6">
            <img className="img img-responsive" width="460px" src={listing.get('url')}/>
          </div>
          <div className="col-sm-6">
            <h2>{listing.get('heading')}</h2>
            <h4>{listing.get('suburb')}, {listing.get('city')}</h4>
            <h3>Listed by: {listing.get('listerName')}</h3>
            <h4>Email: {this.state.email}</h4>
            <h4>${listing.get('price')} per week</h4>
            <p>Description: {listing.get('description')}</p>
            <p>Size: {listing.get('size')}</p>
            {this.state.rentButton}
            <button name="back" type="button" className="btn btn-lg btn-danger pull-left" onClick={this.handleClick.bind(this)}>Back</button>
          </div>
        </div>
        <div className="listingsDivider">
        </div>
        <ListingsPreview />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listings:state.get('listings')
  }
}

export default connect(mapStateToProps)(ListingProfile)
