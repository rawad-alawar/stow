import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'

class UserRating extends Component {

  handleClick(e) {
    e.preventDefault()
    hashHistory.push('/')
  }

  renderStars(){
    
    var spanArray= []
    if(this.props.user.get('rating') == '' || this.props.user.get('rating') == undefined)
      spanArray = <div>User yet to be rated</div>
    else {
      for (var i=0; i < this.props.user.get('rating'); i++) {
        spanArray.push(<div className="stars"><span aria-hidden="true">★</span></div>)
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
