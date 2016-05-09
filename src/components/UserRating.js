import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import ListingsContainer from './ListingsContainer'

class UserRating extends Component {

  handleClick(e) {
    e.preventDefault()
    hashHistory.push('/')
  }

  render() {

    return (
      <div className="col-sm-12">
          <span class="star" aria-hidden="true">★★★★★</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listings:state.get('listings')
  }
}

export default connect(mapStateToProps)(UserRating)
