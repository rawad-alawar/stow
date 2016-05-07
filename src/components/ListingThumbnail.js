import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ListingThumbnail extends Component {
  render() {
    return (
      <div>
       <div className="col-sm-3">
          <img className="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="200" height="140"/>
          <h2></h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a className="btn btn-default" href="#" role="button">View stow &raquo;</a></p>
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

export default connect(mapStateToProps)(ListingThumbnail)