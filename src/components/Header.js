import React from 'react'
import {Router, Route, browserHistory,Link} from 'react-router'

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <button type='button' className='btn btn-lg btn-success'>Upload</button>
            <Link to='/Signin'>
              <button type='button' className='btn btn-med btn-info right'>Sign-in</button>
            </Link>
          </div>
        </nav>
      </div>

    )
  }
});

module.exports = Header;