import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'
import FeedbackForm from './FeedbackForm'
import request from 'superagent'


class UserProfile extends Component {

  mount(){
    ReactDOM.render(<FeedbackForm id={this.props.currentUserTest.get('users_ID')} unmount={this.unmount.bind(this)}/>, document.getElementById('fb-form'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('fb-form'))
  }

  render() {
    const user = this.props.currentUser
    const id = user.get('user_ID')
    const listing = this.props.listings.filter(l => l.get('lister_ID') == id).first()
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
              <div className="col-sm-2" >
                <img src={listing.get('url')} width="200px"/>
              </div>
              <div className="col-sm-8 col-centered">
                <h2>My available Stows</h2>
                <h3>{listing.get('suburb')}</h3>
                <h6>{listing.get('size')}</h6>
                <h6>${listing.get('price')}</h6>
                <h6>{listing.get('description')}</h6>
              </div>
            </div>

            <div className="row-centered myStow">
              <div className="col-sm-2" >
                <img src={listing.get('url')} width="200px"/>
              </div>
              <div className="col-sm-8 col-centered">
                <div className="divider"></div>
                <h2>My rented Stows</h2>
                <h3>{listing.get('suburb')}</h3>
                <h6>{listing.get('size')}</h6>
                <h6>${listing.get('price')}</h6>
                <h6>{listing.get('description')}</h6>
                <button type='button' onClick={this.mount.bind(this)}>Place Feedback</button>
                <div id='fb-form'></div>
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
