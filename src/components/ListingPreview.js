import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Listings from './ListingThumbnail'
import ListingThumbnail from './ListingThumbnail'

class ListingsPreview extends Component {

  render() {
    var appendedListings = []
    for (var i = 0; i < 4; i++) {
      appendedListings.push(this.props.listings.get(i))
    }
    appendedListings = appendedListings.map( listing => {  
      return <ListingThumbnail key={listing.get('listing_ID')} listing={listing}/>
    })
    
    return (
      <div className="row row-centered">
        {appendedListings}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listings: state.get('listings')
  }
}
export default connect(mapStateToProps)(ListingsPreview)