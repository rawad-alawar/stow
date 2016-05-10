import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'
import {hashHistory} from 'react-router'

class Upload extends Component {

 componentDidMount() {
      $('#upload').cloudinary_upload_widget(
      {
        cloud_name: 'dvzbt8kfq',
        upload_preset: 'rwy3xr9i',
        cropping: 'server',
        folder: 'user_photos',
        theme: 'minimal',
        button_caption: '<i class="fa fa-camera-retro fa-1x">Upload Image</i>',
        cropping_aspect_ratio: 1,
        callback: '/profile'
      },
      (error, result) => {
        if (error) {
          console.log('Error: ', error)
        } else {
          let userUpload = {
            external_photo_id: result[0].signature,
            photo_url: result[0].url
          }
           document.querySelector('#url').value = userUpload.photo_url
           console.log(document.querySelector('#url').value)
          }
        }
    )
  }

  handleUpload(e) {

    e.preventDefault()
    const formData = {
      title: this.refs.title.value,
      username: this.props.user.get('username'),
      suburb: this.refs.suburb.value,
      streetname: this.refs.streetName.value,
      streetnumber: this.refs.streetNumber.value,
      city: this.refs.city.value,
      country: this.refs.country.value,
      size: this.refs.size.value,
      price: this.refs.price.value,
      // negotiable: this.refs.negotiable.value,
      url: document.querySelector('#url').value,
      startDate: this.refs.startDate.value,
      // endDate: this.refs.endDate.value,
      // availability: this.refs.availability.value,
      description: this.refs.description.value
    }

    request.post('/listing/add')
      .send(formData)
      .end((err, res)=>{
        if(err) console.log('ERROR ', err)
        else {
          hashHistory.push('/')
          console.log('Server SAYS: ', res.body)
        }
      })
  }

  render() {
    return (
      <div className="row-sm-12 row-centered">
      <div className="jumbotron col-sm-5 text-center col-centered">
        <form className="form-signin">
          <h2 className="form-signin-heading">Upload your stow space! </h2>
          <label className="sr-only">Title</label>
          <input type="text" id="title" className="form-control" placeholder="title" ref='title' required autofocus/>

          <label for="details" className="sr-only">Tell us about your stow space!</label>
          <textarea className="form-control img-responsive" placeholder="e.g very large space, indoor cupboard..." rows="8" cols="75" id="details" ref='description' required autofocus></textarea>
          <div id="upload"></div>
          <div id="url" type="hidden" ref="url"></div>

          <label className="sr-only">Suburb</label>
          <input type="text" id="suburb" className="form-control" placeholder="Suburb..." ref='suburb' required autofocus/>

          <label className="sr-only">City</label>
          <input type="text" id="city" className="form-control" placeholder="City..." ref='city' required autofocus/>

          <label className="sr-only">Street Name</label>
          <input type="text" id="street" className="form-control" placeholder="street" ref='streetName' required autofocus/>

          <label className="sr-only">Country</label>
          <input type="text" id="country" className="form-control" placeholder="country" ref='country' required autofocus/>

          <label className="sr-only">Price</label>
          <input type="text" id="price" className="form-control" placeholder="price" ref='price' required autofocus/>

          <label className="sr-only">Approximate Size</label>
          <input type="text" id="price" className="form-control" placeholder="Approximate size..." ref='size' required autofocus/>

          <label className="sr-only">Available From:</label>
          <input type="text" id="availablefrom" className="form-control" placeholder="availablefrom" ref='startDate' required autofocus/>

          <label className="sr-only">To:</label>
          <input type="text" id="to" className="form-control" placeholder="to" ref='endDate' required autofocus/>

          <Link to='/'>
            <button type="button" className="btn btn-lg btn-danger">Cancel</button>
          </Link>

          <button type="button" className="btn btn-lg btn-primary pull-right" onClick={this.handleUpload.bind(this)}>Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.get('currentUser')
  }
}

export default connect(mapStateToProps)(Upload)
