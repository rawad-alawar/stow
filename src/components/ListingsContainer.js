import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ListingThumbnail from './ListingThumbnail'

class ListingsContainer extends Component {

  render() {
    const appendedListings = this.props.listings.map( listing => {
      return <ListingThumbnail key={listing.get('listings_ID')} listing={listing}/>
    })
    return (
      <div>
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
export default connect(mapStateToProps)(ListingsContainer)