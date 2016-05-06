import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Header from './Header'
import Jumbotron from './Jumbotron'


class Home extends Component {
  render() {
    return (
      <div className="col-sm-12">
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Home)