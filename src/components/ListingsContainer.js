import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ListingThumbnail from './ListingThumbnail'

class ListingsContainer extends Component {
  constructor(props){
    super(props)
    this.state={

      filterString: 'city',
      filterInput: 'Wellington'
    }
  }


  handleFilter(){
    console.log('handlefilter is called')
    this.setState({
      filterInput: this.refs.filterInput.value
    })
  }


  render() {
    const appendedListings = this.props.listings.filter((t) => {
      console.log(t.get('city'), 'this is this')
      return t.get('city') == this.state.filterInput
    })
    .map( listing => {
      console.log(listing.get('city'))
      return <ListingThumbnail key={listing.get('listing_ID')} listing={listing}/>
    })

    return (
      <div>
        <div>
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
