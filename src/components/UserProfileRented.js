import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import FeedbackForm from './FeedbackForm'

class UserProfileRented extends Component {

  constructor() {
    super()
    this.state = {
      feedbackFormVisible: false,
      feedbackSubmitted: false,
      feedback: <div></div>
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.toggleFeedbackForm()
  }

  toggleFeedbackForm() {
    this.setState({ feedbackFormVisible: !this.state.feedbackFormVisible })
  }

  submitFeedback(feedback) {
    this.setState({ feedbackSubmitted: true, feedbackFormVisible: false, feedback: feedback })
  }

  getFeedbackState() {
    if(this.state.feedbackFormVisible && !this.state.feedbackSubmitted)
      return <button className="btn btn-lg btn-danger" onClick={this.handleClick.bind(this)}>Cancel</button>
    else if(!this.state.feedbackFormVisible && !this.state.feedbackSubmitted)
      return <button className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)}>Place Feedback</button>
    else
      return (
        <div className="alert alert-success" role="alert">
          <h4>Thank you for leaving feedback</h4>
          {this.state.feedback}
        </div>
      )
  }

  render() {
    const listing = this.props.listing
    return (
      <div>
        <div className="col-sm-3" >
          <img src={listing.get('url')} width="200px"/>
        </div>
        <h2>Spaces I'm currently renting</h2>
        <h3>{listing.get('heading')}</h3>
        <h3>{listing.get('suburb')}</h3>
        <h6>{listing.get('size')}</h6>
        <h6>${listing.get('price')}</h6>
        <h6>{listing.get('description')}</h6>
        <div className="row-centered">
          {this.getFeedbackState()}
          {this.state.feedbackFormVisible ? <FeedbackForm listing={this.props.listing} submitFeedback={this.submitFeedback.bind(this)} /> : null}
        </div>
      </div>
    )
  }
}

export default UserProfileRented
