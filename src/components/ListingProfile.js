import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import ListingsContainer from './ListingsContainer'
import ListingsPreview from './ListingPreview'

class ListingProfile extends Component {

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
            <button name="rent" type="button" className="btn btn-lg btn-info" onClick={this.handleClick.bind(this)}>Rent this Space</button>
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
