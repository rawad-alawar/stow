import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Upload extends Component {
  render() {
    return (
      <div className="jumbotron col-sm-4 text-center col-centered">
        <form className="form-signin">
          <h2 className="form-signin-heading">Upload your stow space! </h2>
          <label className="sr-only">Title</label>
          <input type="text" id="title" className="form-control" placeholder="title" required autofocus/>

          <label for="details" className="sr-only">Tell us about your stow space!</label>
          <textarea class="form-control" placeholder="e.g very large space, indoor cupboard..." rows="8" cols="40" id="details"></textarea>

          <input type="file" name="image" accept="image/*"/>

          <label className="sr-only">Suburb</label>
          <input type="text" id="suburb" className="form-control" placeholder="suburb" required autofocus/>

          <label className="sr-only">City</label>
          <input type="text" id="city" className="form-control" placeholder="city" required autofocus/>

          <label className="sr-only">Street</label>
          <input type="text" id="street" className="form-control" placeholder="street" required autofocus/>

          <label className="sr-only">Number</label>
          <input type="text" id="suburb" className="form-control" placeholder="suburb" required autofocus/>

          <label className="sr-only">Country</label>
          <input type="text" id="country" className="form-control" placeholder="country" required autofocus/>

          <button type="button" className="btn btn-lg btn-primary">Sign in!</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Upload)