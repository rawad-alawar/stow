import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'
import {loginOrSignUp} from './utils'

class FeedbackForm extends Component {

  handleSubmit(e) {
    e.preventDefault()
    const formData = {
      comment: this.refs.comment.value
      // rating: this.refs.rating.value

    }

    request.post('/feedback/add')
      .send(formData)
      .end((err, res)=>{
        if(err) console.log('ERROR ', err)
        else {
          console.log('Server SAYS: ', res)
          hashHistory.push('/')
        }
      })

  }


  render() {

    return (
      <div className="jumbotron col-centered col-sm-4 text-center">
        <form className="form-feedback">
          <h2 className="form-feedback-heading">Leave Feedback</h2>

          <label for="rating" className="sr-only">Rating</label>
          <select name="chooseRating">
           <option value="empty"></option>
           <option value="1"> 1</option>
           <option value="2"> 2</option>
           <option value="3"> 3</option>
           <option value="4"> 4</option>
           <option value="5"> 5</option>
          </select>

          <label for="feedback" className="sr-only">How was your Stow?</label>
          <textarea class="form-control" placeholder="" rows="8" cols="40" id="details" ref='comment'></textarea>
          <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>


        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(FeedbackForm)
