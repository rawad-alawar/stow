import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'
import {loginOrSignUp} from './utils'


class FeedbackForm extends Component {

  handleSubmit(e) {
    e.preventDefault()
    const ident = this.props.id
    const formData = {
      ID: ident,
      comment: this.refs.comment.value,
      rating: this.refs.rating.value
    }

    request.post('/feedback/add')
      .send(formData)
      .end((err, res)=>{
        if(err) console.log('ERROR ', err)
        else {
          console.log('Server SAYS: ', res)
          console.log(formData)
          hashHistory.push('/')
        }
      })
  }

  render() {

    return (
      <div className="jumbotron col-sm-12 text-center">
        <form className="form-feedback">
          <h2 className="form-feedback-heading">Leave Feedback</h2>
          <div className="col-sm-12">
            <textarea placeholder="tell us about your experience with this stow..." class="form-control" rows="8" cols="40" id="details" ref='comment'></textarea>
            <div className="row">
              <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
              <button type="button" className="btn btn-lg btn-danger" onClick={this.props.unmount}>Close</button>
              <select name="chooseRating" placeholder="rating" ref='rating'>
               <option value="0"></option>
               <option value="1"> 1</option>
               <option value="2"> 2</option>
               <option value="3"> 3</option>
               <option value="4"> 4</option>
               <option value="5"> 5</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default FeedbackForm
