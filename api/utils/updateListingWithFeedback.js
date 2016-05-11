var knex = require('./connection')

function updateListingWithFeedback(listingId) {
  return knex('listings')
    .returning('listing_ID')
    .where('listing_ID', listingId)
    .update({
      hasFeedback: true
    })
    .then(function(changedId) {
      return changedId
    })
}

module.exports = updateListingWithFeedback
