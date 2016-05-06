import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Header extends Component {

  handleUpload(e){
    e.preventDefault()
    request.get('/checkAuth')
      .end(err, authorised)=>{
        authorised ? console.log('in session') : console.log('not logged in');

      }

        //if authorised===true, end
        //if authorised  ===false, direct to login page
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <Link to='/Upload'>
              <button type='button' className='btn btn-med btn-info right' onClick={this.handleUpload.bind(this)}>Upload</button>
            </Link>
            <Link to='/'>
              <button type='button' className='btn btn-med btn-info right'>Home</button>
            </Link>
            <Link to='/Login'>
              <button type='button' className='pull-right btn btn-med btn-info right'>Login</button>
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Header)
