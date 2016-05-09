import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'
import request from 'superagent'

import UserProfileListed from './UserProfileListed'
import UserProfileRented from './UserProfileRented'

class UserProfile extends Component {

  constructor() {
    super()
    this.state = {
      listedSpace: <p>You are not listing any spaces right now</p>,
      rentedSpace: <p>You are not renting any spaces right now</p>
    }
  }

  componentDidMount() {
    const user = this.props.currentUser
    const id = user.get('user_ID')
    this.checkForListedSpaces(id, this.props.listings)
    this.checkForRentedSpaces(id, this.props.listings)
  }

  checkForListedSpaces(userId, listings) {
    console.log('LISTINGs: ', listings)
    const listing = listings.filter(l => l.get('lister_ID') == userId)
    console.log('LISTING: ', listing)
    if(listing.size > 0)
      this.setState({listedSpace: <UserProfileListed listing={listing}/>})
  }

  checkForRentedSpaces(userId, listings) {
    const listing = listings.filter(l => l.get('lister_ID') == userId).first()
    if(listing.size > 0)
      this.setState({rentedSpace: <UserProfileRented listing={listing}/>})
  }

  render() {
    const user = this.props.currentUser
    const id = user.get('user_ID')
    return (
      <div className="jumbotron col-centered col-sm-12 text-center">
        <div className="row-centered">
          <div className="col-sm-12 col-centered">

            <div className="col-sm-3" >
              <img src="http://www.eonline.com/eol_images/Entire_Site/2015518/rs_600x600-150618104510-600.tom-myspace.jw.61815_2.jpg" width="150px" className="img-circle"/>
            </div>
            <div className="col-sm-8">
              <h2 className="bluetxt">{user.get('username')}</h2>
              <h3>{user.get('location')}</h3>
              <h6>{user.get('firstName')}</h6>
              <h6>{user.get('email')}</h6>
              <h6>{user.get('details')}</h6>
              <div className="divider"></div>
            </div>

            <div className="row-centered myStow">
              <div className="col-sm-8 col-centered">
                <h2>Spaces I'm currently listing</h2>
                {this.state.listedSpace}
              </div>
            </div>

            <div className="row-centered myStow">
              <div className="col-sm-8 col-centered">
                <div className="divider"></div>
                <h2>Spaces I'm currently renting</h2>
                {this.state.rentedSpace}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUserTest: state.get('currentUserTest'),
    listings: state.get('listings')
  }
}

export default connect(mapStateToProps)(UserProfile)