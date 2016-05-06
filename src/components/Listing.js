import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Listing extends Component {
  render() {
    return (
      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <img className="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="350" height="350"/>
          </div>

          <div className="col-sm-6">
            <h2>Heading</h2>
            <h3>the suburb, the city, the country</h3>
            <h4>the price</h4>
            <h4>the startdate -- the end date</h4>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          </div>
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