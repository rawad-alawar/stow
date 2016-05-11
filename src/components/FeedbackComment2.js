import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class FeedbackComment extends Component {

  render() {
    const id = this.props.feedback.get('feedback_ID')
    const feedbacker = this.props.users.filter(user => {
      return user.get('user_ID') == this.props.feedback.get('feedbacker_ID')
    }).filter(fb => {
      return fb.get('feedback_ID') == id
    }).get('username')
    const listing = this.props.listings.filter(listing => {
      return listing.get('listing_ID') == this.props.feedback.get('listingId')
    }).filter(ls => {
      return ls.get('feedback_ID') == id
    })
    return (
      <div>
        <h3>Feedback from {feedbacker}</h3>
        <h4>For listing: {listing.get('heading')} id: {listing.get('listing_ID')}</h4>
        <h5>Rating: {this.props.feedback.get('rating')}</h5>
        <p>{this.props.feedback.get('comment')}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.get('users'),
    listings: state.get('listings')
  }
}

export default connect(mapStateToProps)(FeedbackComment)