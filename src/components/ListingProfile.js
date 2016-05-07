import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ListingProfile extends Component {
  render() {
    const {id} = this.props.params
    const listing = this.props.listings.filter(l => l.get('listings_ID') == id).first()
    return (
      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-6">
            <img className="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="350" height="350"/>
          </div>

          <div className="col-sm-6">
            <img className="img" src={listing.get('url')}/>
            <h2>{listing.get('heading')}</h2>
            <h3>{listing.get('suburb')}, {listing.get('city')}, {listing.get('country')}</h3>
            <h4>{listing.get('price')}</h4>
            <h4>{listing.get('startDate')}, {listing.get('endDate')}</h4>
            <p>{listing.get('details')}</p>
          </div>
        </div>
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