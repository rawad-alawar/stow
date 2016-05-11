import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import FeedbackForm from './FeedbackForm'

class UserProfileRented extends Component {

  constructor() {
    super()
    this.state = {
      feedbackFormVisible: false
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.toggleFeedbackForm()
  }

  // toggleFeedbackForm() {
  //   const scope = this
  //   if(this.state.isHidden) {
  //     this.setState({isHidden: false})
  //     this.setState({fbButton: <button className="btn btn-lg btn-danger" onClick={this.handleClick.bind(this)}>Cancel</button>})
  //     this.setState({fbForm: <FeedbackForm listing={this.props.listing} onClick={scope.handleClick.bind(this)}/>})
  //   }
  //   else {
  //     this.setState({isHidden: true})
  //     this.setState({fbButton: <button className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)}>Place Feedback</button>})
  //     this.setState({fbForm: <div></div>})
  //   }
  // }

  toggleFeedbackForm() {
    this.setState({ feedbackFormVisible: !this.state.feedbackFormVisible })
  }

  render() {
    const listing = this.props.listing
    return (
      <div>
        <div className="col-sm-3" >
          <img src={listing.get('url')} width="200px"/>
        </div>
        <h2>Spaces I'm currently renting</h2>
        <h3>{listing.get('suburb')}</h3>
        <h6>{listing.get('size')}</h6>
        <h6>${listing.get('price')}</h6>
        <h6>{listing.get('description')}</h6>
        <div className="row-centered">
          {this.state.feedbackFormVisible ? <button className="btn btn-lg btn-danger" onClick={this.handleClick.bind(this)}>Cancel</button> : <button className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)}>Place Feedback</button>}
          {this.state.feedbackFormVisible ? <FeedbackForm listing={this.props.listing} toggle={this.toggleFeedbackForm.bind(this)} /> : null}
        </div>
      </div>
    )
  }
}

export default UserProfileRented
