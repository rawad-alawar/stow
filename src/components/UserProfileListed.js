import React, {Component} from 'react'
<<<<<<< HEAD
import {Link} from 'react-router'
=======
import {deleteListing} from './utils'
>>>>>>> 157e57586dd5d87d297706e8da52310e662cd5a3

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
<<<<<<< HEAD
          <div className="row-centered">
          <button name="removeListing" className="btn btn-lg btn-danger">Remove this listing</button>
        <Link to={`listing/${this.props.id}`}>
          <button name="viewListing" className="btn btn-lg btn-default">View this listing</button>
        </Link>

          </div>
=======
        <div className="row-centered">
          <button name="removeListing" className="btn btn-lg btn-danger" onClick={this.handleClick.bind(this)}>Remove this listing</button>
        </div>
>>>>>>> 157e57586dd5d87d297706e8da52310e662cd5a3
      </div>
    )
  }
}

<<<<<<< HEAD

export default UserProfileListed
=======
export default UserProfileListed

>>>>>>> 157e57586dd5d87d297706e8da52310e662cd5a3
