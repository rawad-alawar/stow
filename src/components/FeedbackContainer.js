import React, {Component} from 'react'
import {connect} from 'react-redux'
import FeedbackComment from './FeedbackComment'

class FeedbackContainer extends Component {

  constructor() {
    super()
  }
}

render() {
  const userFeedback = this.props.feedback.filter(f => {
    return f.get('poster_ID') == currentUser.get('user_ID')
  }).map(feedback => {
    return <FeedbackComment key={feedback.get('feedback_ID')} feedback={feedback} />
  })
  return (
    <div>
      <h1>This is your feedback!</h1>
      {appendedFeedback}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    feedback: state.get('feedback'),
    currentUser: state.get('currentUser')
  }
}

export default connect(mapStateToProps)(FeedbackContainer)