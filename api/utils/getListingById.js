var knex = require('./connection')

function getListingById(listingID){
  console.log(listingID)
  return knex('listings')
  .where({listing_ID: listingID})
  .then(function(data) {
    console.log(data[0])
    return data[0]
  })
}

module.exports = getListingById
