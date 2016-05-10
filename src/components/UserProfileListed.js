import React, {Component} from 'react'
import {deleteListing} from './utils'

class UserProfileListed extends Component {

  handleClick(e) {
    e.preventDefault()
    deleteListing(this.props.id)
  }

  render() {
    const listing = this.props.listing
    return (
      <div>
        <div className="col-sm-3" >
          <img src={listing.get('url')} width="200px"/>
        </div>
        <h2>Spaces I'm currently listing1</h2>
        <h3>{listing.get('suburb')}</h3>
        <h6>{listing.get('size')}</h6>
        <h6>${listing.get('price')}</h6>
        <h6>{listing.get('description')}</h6>
        <div className="row-centered">
          <button name="removeListing" className="btn btn-lg btn-danger" onClick={this.handleClick.bind(this)}>Remove this listing</button>
        </div>
      </div>
    )
  }
}

export default UserProfileListed

