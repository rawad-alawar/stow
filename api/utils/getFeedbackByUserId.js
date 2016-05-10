var knex = require('./connection')

function getFeedbackByUserId(id){
  console.log(id)
  return knex('feedback')
  .where({
    poster_ID: id
  }).select()
  .then(function(data){
    console.log(data)
    return data[0]
  })
}

module.exports = getFeedbackByUserId
