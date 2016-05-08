var knex = require('./connection')

function saveFeedback(data){
  console.log(data)
  return knex('feedback').insert({
    feedbacker_ID: data.ID,
    comment: data.comment,
    rating: data.rating,
    created_at: Date()
  })
}

module.exports = saveFeedback
