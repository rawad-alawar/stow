import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ListingThumbnail extends Component {

  getPreviewText(){
    var text = this.props.listing.get('description')
    var charsToCutTo = 30;
    if(text.length>charsToCutTo){
      var description = "";
      for(var i = 0; i < charsToCutTo; i++)
        description += text[i];
      return(description)+'...'
    }
    return text
  }

  render() {
    const id = this.props.listing.get('listing_ID')
    const description = this.getPreviewText()
    return (
      <Link to={`listing/${id}`}>
      <div className="row-centered">
        <div className="col-sm-3 listingThumbnail">
          <img className="img" src={this.props.listing.get('url')} alt="this is the image" width="200" height="140"/>
          <h3>{this.props.listing.get('heading')}</h3>
          <h4>${this.props.listing.get('price')}</h4>
          <p>{description}</p>
          <button type='button' className='btn btn-primary thumbnailbtn'>View Stow &raquo;</button>
        </div>
      </div>
      </Link>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default ListingThumbnail