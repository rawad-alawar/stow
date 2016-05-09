var knex = require('./connection')

function addListingToUser(action, userId, listingId) {
  console.log('addListingToUser')
  if(action == 'rent')
    return knex('listings')
      .returning('listing_ID')
      .where('listing_ID', listingId)
      .update({
        renter_ID: userId
      })
      .then(function(listingId) {
        return listingId
      })
}

module.exports = addListingToUser
