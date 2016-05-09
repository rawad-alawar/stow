var knex = require('./connection')

function saveListing(formData) {
  return knex('listings')
    .returning('listing_ID')
    .insert({
      renter_ID: formData.renter_id,
      lister_ID: formData.lister_id,
      description: formData.description,
      heading: formData.title,
      suburb: formData.suburb,
      streetName: formData.streetname,
      streetNumber: formData.streetnumber,
      city: formData.city,
      country: formData.country,
      size: formData.size,
      price: formData.price,
      url: formData.url,
      startDate: formData.startdate,
      endDate: formData.enddate,
      isAvailable: formData.availability,
      created_at: Date()
    })
  .then(function(listingId){
    return formData
  })
}

module.exports = saveListing
