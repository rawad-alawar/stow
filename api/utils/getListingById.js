var knex = require('./connection')

function getListingById(listingID){
  console.log(listingID)
  return knex('listings')
  .where({listing_ID: listingID})
  .then(function(data) {
    console.log(data)
    return data
  })
}

module.exports = getListingById
