import React, {Component} from 'react'
import {Link} from 'react-router'

class UserProfileListed extends Component {

  render() {
    const listing = this.props.listing

    return (
      <div>
        <div className="col-sm-3" >
          <img src={listing.get('url')} width="200px"/>
        </div>
          <h2>Spaces I'm currently listing</h2>
        <h3>{listing.get('suburb')}</h3>
        <h6>{listing.get('size')}</h6>
        <h6>${listing.get('price')}</h6>
        <h6>{listing.get('description')}</h6>
          <div className="row-centered">
          <button name="removeListing" className="btn btn-lg btn-danger">Remove this listing</button>
        <Link to={`listing/${this.props.id}`}>
          <button name="viewListing" className="btn btn-lg btn-default">View this listing</button>
        </Link>

          </div>
      </div>

    )
  }
}


export default UserProfileListed