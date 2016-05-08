var knex = require('./connection')

function saveFeedback(data){
  return knex('feedback').insert({
    comment: data.comment,
    rating: data.rating,
    created_at: Date()
  })
}

module.exports = saveFeedback
