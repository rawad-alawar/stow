import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import FeedbackForm from './FeedbackForm'

class UserProfileRented extends Component {

  mount(){
    ReactDOM.render(<FeedbackForm id={this.props.id} unmount={this.unmount.bind(this)}/>, document.getElementById(`fb-form-${this.props.listing.get('listing_ID')}`))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById(`fb-form-${this.props.listing.get('listing_ID')}`))
  }

  render() {
    const listing = this.props.listing
    return (
      <div>

        <div className="col-sm-3" >
          <img src={listing.get('url')} width="200px"/>
        </div>
        <div className="col-sm-9">
          <h2>Spaces I'm currently renting</h2>
          <h3>{listing.get('suburb')}</h3>
          <h6>{listing.get('size')}</h6>
          <h6>${listing.get('price')}</h6>
          <h6>{listing.get('description')}</h6>
          <div className="row-centered">
            <button className="btn btn-lg btn-primary" onClick={this.mount.bind(this)}>Place Feedback</button>
          <div id={`fb-form-${listing.get('listing_ID')}`}></div>

          </div>
        </div>
      </div>
    )
  }
}

export default UserProfileRented
