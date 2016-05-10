import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'

import ListingsContainer from './ListingsContainer'
import ListingsPreview from './ListingPreview'
import {addNewListing} from './utils'
import request from 'superagent'

class ListingProfile extends Component {

  constructor() {
    super()
    this.state = {
      rentButton: <button name="rent" type="button" className="btn btn-lg btn-info" onClick={this.handleClick.bind(this)}>Rent this Space</button>,
      email: <p>no email listed</p>
    }
  }

  componentWillReceiveProps(nextProps) {
    const {id} = this.props.params
    const listing = nextProps.listings.filter(l => l.get('listing_ID') == id).first()
    if(!listing.get('isAvailable'))
      this.setState({rentButton: <h4>Congratulations! You are renting this space!</h4>})
  }

  getUserEmail(id){
      request
      .get('/user/' + id)
      .end((err, res) => {
        var email = res.body.email
        var element = <div className='email'><p>{email} </p></div>
        this.setState({
          email: this.state.email = element
        })

      })
      return
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
    const lister = listing.get('lister_ID')
    return (
      <div className="col-sm-12 col-centered" getEmail={this.getUserEmail(lister)}>
        <div className="row">
          <div className="col-sm-6">
            <img className="img img-responsive" width="460px" src={listing.get('url')}/>
          </div>
          <div className="col-sm-6">
            <h2>{listing.get('heading')}</h2>
            <h3>{listing.get('suburb')}, {listing.get('city')}</h3>
            <h3>Listed by: {listing.get('listerName')}</h3>
            <h4>${listing.get('price')}</h4>
            <p>{listing.get('description')}</p>
            <p>{listing.get('size')}</p>
            <div>
              {this.state.email}
            </div>
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
