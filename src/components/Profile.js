import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class profile extends Component {
  render() {
    return (
      //Profile page needs to be able to display the current users details and render it on to the page based on who is logged in
      //individual elements need to be rendered here
      //individual functions need to make the functionality for each bit of the profile page

      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-6">
            <img className="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="350" height="350"/>
          </div>
        </div>
      </div>
          <div className="col-sm-6">
            <div classname="profileHeading">
              <h2>Welcome to {{profile.name}}'s profile</h2>
            </div>
            <div classname="profilePicture"></div>
            <div classname="profileOptions">
              <ul>Contact</ul>
              <ul>Follow</ul>
              <ul>Feedback</ul>
            </div>
            <div classname="averageRating"></div>
            <div classname="commentBox">
            <h4>the startdate -- the end date</h4>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            </div>
          </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Listing)
