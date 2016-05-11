import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ListingThumbnail extends Component {

  getPreviewText(numChar,text){

    var charsToCutTo = numChar;
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
    const description = this.getPreviewText(30,this.props.listing.get('description'))
    const heading = this.getPreviewText(15,this.props.listing.get('heading'))

    return (
      <Link to={`listing/${id}`}>
      <div className="row-centered">
        <div className="col-sm-3 listingThumbnail">
          <img className="img" src={this.props.listing.get('url')} alt="this is the image" width="200" height="140"/>
          <h3>{heading}</h3>
          <h4>${this.props.listing.get('price')}</h4>
          <p>{description}</p>
          <button type='button' className='btn btn-info thumbnailbtn'>View Stow &raquo;</button>
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