import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'

import {validateForm, saveFeedback, } from './utils'


class FeedbackForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: <div></div>,
      style: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('USERS: ', this.props.users)
    var rating = this.refs.rating.value
    if(rating == 'default')
      rating = ''

    const formData = {
      posterId: {value: this.getPosterId(this.props.listing), mustHave: false},
      listingId: {value: this.props.listing.get('listing_ID'), mustHave: false},
      comment: {value: this.refs.comment.value, mustHave: true},
      rating: {value: rating, mustHave: false}
    }

    var form = validateForm(formData)
    if(form.isValid) {
      // saveFeedback(formData)
      this.props.submitFeedback(this.refs.comment.value)
    }
    else {
      this.setState({error: <p className='onError'>Please fill in the required fields</p>})
      this.setState({style: 'error'})
    }

  }

  getPosterId(listing) {
    console.log('users', this.props.users)
    console.log('lister id ', listing.get('lister_ID'))
    var p = this.props.users.filter(u => {
      return u.get('user_ID') == listing.get('lister_ID')
    })
    // .first().get('user_ID')
    console.log('USERUSER: ', p)
    this.props.users.forEach(us => {
      console.log('LISTER_ID_ID: ', us.get('lister_Id'))
    })
  }

  render() {
    console.log('USERS: ', this.props.users)
    return (
      <div className="jumbotron col-sm-12 text-center">
        <form className="form-feedback">
          <h2 className="form-feedback-heading">Leave Feedback</h2>
          <div className="col-sm-12">
            <textarea placeholder="tell us about your experience with this stow..." className={`form-control ${this.state.style}`} rows="8" cols="40" id="details" ref='comment'></textarea>

            {this.state.error}

            <div className="row">
              <button class type="button" href="/form-feedback" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>

              <select name="chooseRating" ref="rating">
                <option value="default">Rate your experience</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
              </select>
            </div>
          </div>
        </form>
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

export default connect(mapStateToProps)(FeedbackForm)
