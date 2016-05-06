var knex = require('./connection')

function saveListing(data) {
  return knex('listings').insert({
    renter_ID: data.renter_id,
    lister_ID: data.lister_id,
    suburb: data.suburb,
    streetName: data.streetname,
    streetNumber: data.streetnumber,
    city: data.city,
    country: data.country,
    size: data.size,
    price: data.price,
    negotiable: data.negotiable,
    url: data.url,
    startDate: data.startdate,
    endDate: data.enddate,
    availability: data.availability
  })
  .then(knex.destroy())
}

module.exports = saveListing
