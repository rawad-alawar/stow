import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'

class Header extends Component {

  handleLogout(e) {
    e.preventDefault()
    request.get('/logout')
      .end((err,res) => {
        if(err) console.log('ERROR ', err)
        else {
          console.log('Server SAYS: ', res.body)
          this.props.authorise(false)
        }
      })
  }

  nextPage() {
    if(this.props.authorised === true){
      console.log('you are authorised')
      return '/upload'
    }
    else{
      console.log('you are not authorised')
      return '/login'
    }
  }

  render() {
    const id = this.props.currentUser.get('users_ID')
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <Link to={this.nextPage()}>
              <button type='button' className='btn btn-med btn-info'>Upload</button>
            </Link>
            <Link to='/'>
              <button type='button' className='btn btn-med btn-info'>Home</button>
            </Link>
            <Link to='/Login'>
              <button type='button' className='pull-right btn btn-med btn-info'>Log-in</button>
            </Link>
            <Link to='/Signup'>
              <button type='button' className='pull-right btn btn-med btn-info'>Sign-up</button>
            </Link>
            <Link to={`user/${id}`}>
              <button type='button' className='pull-right btn btn-med btn-info'>my account</button>
            </Link>
            <button type='button' className='pull-right btn btn-med btn-info' onClick={this.handleLogout.bind(this)}>Logout</button>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authorised: state.get('authorised'),
    currentUser:state.get('currentUser')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authorise: authorised => {
      dispatch({
        type: 'AUTHORISE',
        authorised: authorised
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
