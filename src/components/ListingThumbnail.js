import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ListingThumbnail extends Component {
  render() {
      console.log('props',this.props.listing)

    return (
        <div className="col-sm-3">
          <img className="img" src={this.props.listing.get('url')} alt="this is the image" width="200" height="140"/>
          <h2>${this.props.listing.get('price')}</h2>
          <p>{this.props.listing.get('description')}</p>
          <p><a className="btn btn-default" href="#" role="button">View stow &raquo;</a></p>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default ListingThumbnail