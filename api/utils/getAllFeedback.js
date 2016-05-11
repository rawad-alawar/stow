var knex = require('./connection')

function getAllFeedback(){
  return knex
    .select()
    .table('feedback')
    .orderBy('feedback_ID', 'desc')
    .then(function(feedback){
      return feedback
    })
}



module.exports = getAllFeedback
