import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import ListingsContainer from './ListingsContainer'

class UserRating extends Component {
  constructor(props){
    super(props)
    this.state = {
      stars:4
    }
  }

  handleClick(e) {
    e.preventDefault()
    hashHistory.push('/')
  }

  renderStars(){
    

    // const spanArray = this.state.stars.map(s => {
      // return <div><span className="star" aria-hidden="true">★</span></div>
    // })
    var spanArray= []
    if(this.props.user.get('rating') == '' || this.props.user.get('rating') == undefined)
      spanArray = <div>User yet to be rated</div>
    else {
      for (var i=0; i < this.props.user.get('rating'); i++) {
        spanArray.push(<div><span className="star" aria-hidden="true">★</span></div>)
      }
    }
    return spanArray
  }

  render() {

    return (
      <div className="col-sm-12">
          {this.renderStars()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user:state.get('currentUser')
  }
}

export default connect(mapStateToProps)(UserRating)
