import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'

import UserProfileListed from './UserProfileListed'
import UserProfileRented from './UserProfileRented'
import UserRating from './UserRating'
import FeedbackDisplay from './FeedbackDisplay'
console.log(FeedbackDisplay, 'this is feefbackdisp')
class UserProfile extends Component {

  constructor() {
    super()
    this.state = {
      listedSpaces: <div className="noListings col-sm-9 pull-right"><p>You are not listing any spaces right now</p></div>,
      rentedSpaces: <div className="noRented col-sm-9 pull-right"><p>You are not renting any spaces right now</p></div>,
      feedbackReceived: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.listing !== this.props.listings){
      return true
    }
    else return false
  }

  componentWillReceiveProps(nextProps) {
    const userId = this.props.currentUser.get('user_ID')
    this.checkForListedSpaces(userId, nextProps.listings)
    this.checkForRentedSpaces(userId, nextProps.listings)
  }

  checkForListedSpaces(userId, listings) {
    var listingSummaries = listings.filter(l => l.get('lister_ID') == userId)
    if(listingSummaries.size > 0)
      var listingSummaries = listingSummaries.map(l => {
        return <UserProfileListed key={l.get('listing_ID')} listing={l} id={l.get('listing_ID')}/>
      })
      this.setState({listedSpaces: listingSummaries})
  }

  checkForRentedSpaces(userId, listings) {
    var listingSummaries = listings.filter(l => l.get('renter_ID') == userId)
    if(listingSummaries.size > 0)
      var listingSummaries = listingSummaries.map(l => {
        return <UserProfileRented key={l.get('listing_ID')} listing={l} />
      })
      this.setState({rentedSpaces: listingSummaries})
  }



  render() {
    const user = this.props.currentUser
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
            </div>

            <div className="row-centered myStow">
              <div className="col-sm-12 col-centered">
                {this.state.listedSpaces}
              </div>
            </div>
            <div className="col-sm-12 col-center">
              <div className="divider"></div>
            </div>
            <div className="row-centered myStow">
              <div className="col-sm-12 col-centered">
                {this.state.rentedSpaces}
              </div>
            <div>
              <FeedbackContainer />
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
