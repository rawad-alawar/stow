import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'

class Upload extends Component {

<<<<<<< HEAD
  handleUpload(e) {
    e.preventDefault()
    const formData = {
      title: this.refs.title.value,
      //lister_ID: this.refs.lister_ID.value,
      suburb: this.refs.suburb.value,
      streetname: this.refs.streetName.value,
      streetnumber: this.refs.streetNumber.value,
      city: this.refs.city.value,
      country: this.refs.country.value,
      size: this.refs.size.value,
      price: this.refs.price.value,
      // negotiable: this.refs.negotiable.value,
      // url: this.refs.url.value,
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
          console.log('Server SAYS: ', res.body)
        }
      })
  }

=======
>>>>>>> a355a06948821e74b207f661d80628da8c1bfef5
  render() {
    return (
      <div className="jumbotron col-sm-4 text-center col-centered">
        <form className="form-signin">
          <h2 className="form-signin-heading">Upload your stow space! </h2>
          <label className="sr-only">Title</label>
          <input type="text" id="title" className="form-control" placeholder="title" ref='title' required autofocus/>

          <label for="details" className="sr-only">Tell us about your stow space!</label>
          <textarea class="form-control" placeholder="e.g very large space, indoor cupboard..." rows="8" cols="40" id="details" ref='description'></textarea>

          <input type="file" name="image" accept="image/*" ref='url'/>

          <label className="sr-only">Suburb</label>
          <input type="text" id="suburb" className="form-control" placeholder="Suburb..." ref='suburb' required autofocus/>

          <label className="sr-only">City</label>
          <input type="text" id="city" className="form-control" placeholder="City..." ref='city' required autofocus/>

          <label className="sr-only">Stree Number</label>
          <input type="text" id="suburb" className="form-control" placeholder="Street Number..." ref='streetNumber' required autofocus/>

          <label className="sr-only">Street Name</label>
          <input type="text" id="street" className="form-control" placeholder="street" ref='streetName' required autofocus/>

          <label className="sr-only">Country</label>
          <input type="text" id="country" className="form-control" placeholder="country" ref='country' required autofocus/>

          <label className="sr-only">Price</label>
          <input type="text" id="price" className="form-control" placeholder="price" ref='price' required autofocus/>

          <label className="sr-only">Approximate Size</label>
          <input type="text" id="price" className="form-control" placeholder="Approximate size..." ref='size' required autofocus/>

          <label className="sr-only">Negotiable?</label>
          <input type="text" id="negotiable" className="form-control" placeholder="negotiable" ref='negotiable' required autofocus/>

          <label className="sr-only">Available From:</label>
          <input type="text" id="availablefrom" className="form-control" placeholder="availablefrom" ref='startDate' required autofocus/>

          <label className="sr-only">To:</label>
          <input type="text" id="to" className="form-control" placeholder="to" ref='endDate' required autofocus/>

          <button type="button" className="btn btn-lg btn-primary" onClick={this.handleUpload.bind(this)}>Submit Stow</button>

          <button type="button" className="btn btn-lg btn-primary">Sign in!</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Upload)
