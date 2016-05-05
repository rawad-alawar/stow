import React from 'react'
import {Router, Route, browserHistory, Link} from 'react-router'
import Header from './Header'

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
      	<Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;