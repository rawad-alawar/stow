var knex = require('./connection')

function saveFeedback(feedbackerId, formData){
  return knex('feedback').insert({
    feedbacker_ID: feedbackerId,
    listingId: formData.listingId.value,
    poster_ID: formData.posterId.value,
    comment: formData.comment.value,
    rating: formData.rating.value || null
  })
}

module.exports = saveFeedback
