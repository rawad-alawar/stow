import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Listing extends Component {
  render() {
    return (
      <div className="col-sm-12">
        <div className="row"> 
          <div className="col-sm-6">
            <img className="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="350" height="350"/>
          </div>

          <div className="col-sm-6">
            <h2>{this.props.heading}</h2>
            <h3>{this.props.suburb}, {this.props.city}, {this.props.country}</h3>
            <h4>{this.props.price}</h4>
            <h4>{this.props.startDate} -> {this.props.endDate}</h4>
            <p>{this.props.details}</p>
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