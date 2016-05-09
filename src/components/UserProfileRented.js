import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import FeedbackForm from './FeedbackForm'

class UserProfileRented extends Component {

  mount(){
    ReactDOM.render(<FeedbackForm id={this.props.id} unmount={this.unmount.bind(this)}/>, document.getElementById('fb-form'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('fb-form'))
  }

  render() {
    const listing = this.props.listing
    return (
      <div>
        <div className="col-sm-2" >
          <img src={listing.get('url')} width="200px"/>
        </div>
        <h3>{listing.get('suburb')}</h3>
        <h6>{listing.get('size')}</h6>
        <h6>${listing.get('price')}</h6>
        <h6>{listing.get('description')}</h6>
        <button type='button' onClick={this.mount.bind(this)}>Place Feedback</button>
        <div id='fb-form'></div>
      </div>
    )
  }
}

export default UserProfileRented
