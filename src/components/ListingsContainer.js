import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ListingThumbnail from './ListingThumbnail'

class ListingsContainer extends Component {
  render() {
  	
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(ListingsContainer)