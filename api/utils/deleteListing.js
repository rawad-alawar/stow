var knex = require('./connection')

function deleteListing(listingId) {
  return knex('listings')
    .where('listing_ID', listingId)
    .del()
    .then(function(changedId) {
      return changedId
    })
}

module.exports = deleteListing
