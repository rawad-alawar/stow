import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'

import {validateForm} from './utils'


class FeedbackForm extends Component {

  constructor() {
    super()
    this.state = {
      error: <div></div>,
      style: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = {
      posterId: {value: this.getPosterId(this.props.listingId), mustHave: false},
      listingId: {value: this.props.listingId, mustHave: false},
      comment: {value: this.refs.comment.value, mustHave: true},
      rating: {value: this.refs.rating.value, mustHave: false}
    }

    var form = validateForm(formData)
    if(form.isValid)
      saveFeedback(formData)
    else {
      this.setState({error: <p className='onError'>Please fill in the required fields</p>})
      this.setState({style: 'error'})
    }

  }

  getPosterId(listingId) {
    this.props.users.filter(u => {
      return u.get('user_ID') == listingId
    }).get('user_ID')
  }

  render() {

    return (
      <div className="jumbotron col-sm-12 text-center">
        <form className="form-feedback">
          <h2 className="form-feedback-heading">Leave Feedback</h2>
          <div className="col-sm-12">
            <textarea placeholder="tell us about your experience with this stow..." class="form-control" rows="8" cols="40" id="details" ref='comment'></textarea>

            {this.state.error}

            <div className="row">
              <button class type="button" href="/form-feedback" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
              <button type="button" className="btn btn-lg btn-danger" onClick={this.props.unmount}>Close</button>

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
    users: this.state.get('users')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm)
