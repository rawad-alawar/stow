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
          description: 'There is no description for this listing' || formData.description,
          heading: formData.title,
          suburb: formData.suburb,
          city: formData.city,
          size: 'Unknown' || formData.size,
          price: 'To be negotiated' || formData.price,
          url: 'http://placehold.it/200x140' || formData.url,
          created_at: Date()
        })
      .then(function(listingId){
        return formData
      })
  }
}

module.exports = addListingToUser
