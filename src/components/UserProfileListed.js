import React, {Component} from 'react'

class UserProfileListed extends Component {

  render() {
    const listing = this.props.listing
    return (
      <div>
        <div className="col-sm-2" >
          <img src={listing.get('url')} width="200px"/>
        </div>
        <h3>{listing.get('suburb')}</h3>
        <h6>{listing.get('size')}</h6>
        <h6>${listing.get('price')}</h6>
        <h6>{listing.get('description')}</h6>
      </div>
    )
  }
}

export default UserProfileListed