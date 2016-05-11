import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'

import {deleteListing, validateForm, addNewListing} from './utils'

class EditListing extends Component {

  constructor() {
    super()
    this.state = {
      error: <div></div>,
      style: '',
      listing: ''
    }
  }

  getListingFromDatabase(params){
    var listId = params.id
    request
    .get('/getlisting/'+listId)
    .end((err, res) => {
      this.setState({
        listing: this.state.listing = res.body
      })
    })
  }

 componentDidMount() {
   this.getListingFromDatabase(this.props.params)
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
          }
        }
    )
  }

  handleUpload(e) {
    e.preventDefault()


    const formData = {
      heading: {value: this.refs.title.value, mustHave: true},
      listerName: {value: this.props.user.get('username'), mustHave: false},
      description: {value: this.refs.description.value, mustHave: false},
      city: {value: this.refs.city.value, mustHave: true},
      suburb: {value: this.refs.suburb.value, mustHave: true},
      size: {value: this.refs.size.value, mustHave: false},
      price: {value: this.refs.price.value, mustHave: true},
      url: {value: document.querySelector('#url').value, mustHave: false}
    }

    var form = validateForm(formData)
    if(form.isValid){
      console.log(this.state.listing.listing_ID)
      deleteListing(this.state.listing.listing_ID)
      addNewListing('upload', null, formData)
    }
    else {
      this.setState({error: <p className='onError'>Please fill in the required fields</p>})
      this.setState({style: 'error'})
    }
  }

  render() {
    return (
      <div className="row-sm-12 row-centered uploadForm">
        <div className="jumbotron col-sm-5 text-center col-centered">
          <form className="form-signin">
            <h2 className="form-signin-heading">Edit your stow space! </h2>
            <label className="sr-only">Title</label>
            <input type="text" id="title" className={`form-control ${this.state.style}`}  ref='title' placeholder={this.state.listing.heading} required autofocus/>

            <label for="details" className="sr-only">Tell us about your stow space!</label>
            <textarea className="form-control img-responsive" placeholder="e.g very large space, indoor cupboard..." rows="8" cols="75" id="description" ref='description' placeholder={this.state.listing.description} required autofocus></textarea>
            <div id="upload"></div>
            <div id="url" type="hidden" ref="url"></div>

            <label className="sr-only">Suburb</label>
            <input type="text" id="suburb" className={`form-control ${this.state.style}`} ref='suburb' placeholder={this.state.listing.suburb} required autofocus/>

            <label className="sr-only">City</label>
            <input type="text" id="city" className={`form-control ${this.state.style}`} ref='city' placeholder={this.state.listing.city} required autofocus/>

            <label className="sr-only">Price</label>
            <input type="text" id="price" className={`form-control ${this.state.style}`} ref='price' placeholder={this.state.listing.price} required autofocus/>

            <label className="sr-only">Approximate Size</label>
            <input placeholder={this.state.listing.size} type="text" id="size" className="form-control" ref='size' required autofocus/>

            {this.state.error}

            <Link to='/'>
              <button type="button" className="btn btn-lg btn-danger">Cancel</button>
            </Link>

            <input type="submit" className="btn btn-lg btn-primary pull-right" onClick={this.handleUpload.bind(this)}/>
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

export default connect(mapStateToProps)(EditListing)
