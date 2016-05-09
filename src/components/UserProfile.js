import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'
import request from 'superagent'

import UserProfileListed from './UserProfileListed'
import UserProfileRented from './UserProfileRented'
import UserRating from './UserRating'

class UserProfile extends Component {

  constructor() {
    super()
    this.state = {
      listedSpace: <div className="noListings col-sm-9 pull-right"><p>You are not listing any spaces right now</p></div>,
      rentedSpace: <div className="noRented col-sm-9 pull-right"><p>You are not renting any spaces right now</p></div>
    }
  }

  componentDidMount() {
    const user = this.props.currentUser
    const id = user.get('user_ID')
    this.checkForListedSpaces(id, this.props.listings)
    this.checkForRentedSpaces(id, this.props.listings)
  }

  checkForListedSpaces(userId, listings) {

    var listingSummaries = listings.filter(l => l.get('lister_ID') == userId)
    if(listingSummaries.size > 0)
      var listingSummaries = listingSummaries.map(l => {
        return <UserProfileListed key={l.get('listing_ID')} listing={l} />
      })
      this.setState({listedSpace: listingSummaries})
  }

  checkForRentedSpaces(userId, listings) {
    var listingSummaries = listings.filter(l => l.get('renter_ID') == userId)
    if(listingSummaries.size > 0)
      var listingSummaries = listingSummaries.map(l => {
        return <UserProfileRented key={l.get('listing_ID')} listing={l} />
      })
      this.setState({rentedSpace: listingSummaries})
  }

  render() {
    const user = this.props.currentUser
    const id = user.get('user_ID')
    return (
      <div className="jumbotron col-centered col-sm-12 text-center">
        <div className="row-centered">
          <div className="col-sm-12 col-centered">

            <div className="col-sm-3" >
              <img src="https://savoirs.rfi.fr/sites/all/themes/rfi/images/public/default-profile.png" width="150px" className="img-circle"/>
              <UserRating />
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
              <div className="col-sm-12 col-centered">
                {this.state.listedSpace}
              </div>
            </div>

            <div className="row-centered myStow">
              <div className="col-sm-12 col-centered">
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
    currentUser: state.get('currentUser'),
    listings: state.get('listings')
  }
}

export default connect(mapStateToProps)(UserProfile)
