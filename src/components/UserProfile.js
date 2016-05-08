import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class UserProfile extends Component {
  render() {
    const id = this.props.currentUser.get('users_ID')
    const user = this.props.currentUser
    console.log(this.props.listings)
    console.log('userprofile',this.props.listings.get(0))
    const listing = this.props.listings.first()
    console.log('after defining', listing)
    return (
      <div className="jumbotron col-centered col-sm-12 text-center">
        <div className="row-centered">
          <div className="col-sm-12 col-centered">
                <div className="col-sm-3" >
                <img src="https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm" className="img-circle"/>
                </div>
                
                <div className="col-sm-8">
                    <h2>{user.get('username')}</h2>
                    <h3>{user.get('location')}</h3>
                    <h6>{user.get('firstName')}</h6>
                    <h6>{user.get('email')}</h6>
                    <h6>{user.get('details')}</h6>
                <div className="divider">
                </div>
                </div>
                <div className="row-centered myStow">
                <div className="col-sm-2" >
                <img src={listing.get('url')} width="200px"/>
                </div>
                <div className="col-sm-8 col-centered">
                    <h2>My Stow</h2>
                    <h3>{listing.get('suburb')}</h3>
                    <h6>{listing.get('size')}</h6>
                    <h6>${listing.get('price')}</h6>
                    <h6>{listing.get('description')}</h6>
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