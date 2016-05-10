var knex = require('./connection')

function addListingToUser(action, userId, listingId, formData) {
  switch(action) {
    case 'rent':
      return knex('listings')
        .returning('listing_ID')
        .where('listing_ID', listingId)
        .update({
          renter_ID: userId
        })
        .then(function(listingId) {
          return listingId
        })
      break
    case 'upload':
      return knex('listings')
        .returning('listing_ID')
        .insert({
          renter_ID: null,
          lister_ID: userId,
          listerName: formData.username,
          description: formData.description || 'There is no description for this listing',
          heading: formData.title,
          suburb: formData.suburb,
          city: formData.city,
          size: formData.size || 'Unknown',
          price: formData.price || 'To be negotiated',
          url: formData.url || 'http://placehold.it/200x140',
          created_at: Date()
        })
      .then(function(listingId){
        return listingId
      })
  }
}

module.exports = addListingToUser
