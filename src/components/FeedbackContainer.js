import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'
import request from 'superagent'

// class FeedbackDisplay extends Component {
//   constructor(props){
//     super(props)
//     console.log('these are the propssssss')
//   }
//
//   getUserFeedback(){
//     console.log('its happening')
//     arr = []
//     const user = this.props.currentUser.get('user_ID')
//     request
//       .get('/feedback/' + user)
//       .end((err, res) => {
//         if(err){console.log(err)}
//         else{
//
//       }
//     })
//   }
//
//   render(){
//
//     const feedBackComments
//
//     return (
//       <div>
//         <h3>{this.props.comment}glass of water</h3>
//       </div>
//     )
//   }
// }
//
// export default FeedbackDisplay
