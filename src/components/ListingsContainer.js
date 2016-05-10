import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ListingThumbnail from './ListingThumbnail'


class ListingsContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      filterString: 'city',
      filterInput: '',
      defaultCity: ''   //will be changed to geolocated city
    }
  }

  getLocationFromDOM(){ //takes 2 seconds to load on first visit but is immediate after that
    setTimeout(() => {
      var userLocation = document.getElementById('location')
      console.log(userLocation.value)
      this.setState({filterInput: this.state.filterInput = userLocation.value,
                     defaultCity: this.state.defaultCity = userLocation.value })
    }, 3000)

  }


  handleFilter(){
    this.setState({
      filterInput: this.refs.filterInput.value
    })
  }

  render() {

    const appendedListings = this.props.listings.filter((t) => {
      if(this.refs.filterSelect){
        if (this.state.filterInput.length ==0){
          return (t.get('city')== this.state.defaultCity )
        }else if (this.refs.filterSelect.value=='city' && this.state.filterInput.length>-1){
          return (t.get('city') == this.state.filterInput)
        }else if (this.refs.filterSelect.value=='price'){
          return (t.get('price') <= parseInt(this.state.filterInput))
        }
      }else{
        return t.get('city') == this.state.filterInput
      }
    })
    .map( listing => {
      return <ListingThumbnail key={listing.get('listing_ID')} listing={listing}/>
    })
    return (
      <div>
        <div domLoad={this.getLocationFromDOM()}>
          <select ref="filterSelect" >
            <option value='city'>City</option>
            <option value="price">price</option>
          </select>
          <input ref='filterInput' onChange={this.handleFilter.bind(this)} type='text' />
        </div>
        <div className="row row-centered">
          {appendedListings}
        </div>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    listings: state.get('listings')
  }
}

export default connect(mapStateToProps)(ListingsContainer)
