var knex = require('./connection')

function getUserByListingId(listingID){ ///refactor to use a join
  return knex('listings')
  .where({
    listings_ID: listingID
  })
  .select("lister_ID")
  .then(function(data){
    var listerID = data[0].lister_ID
    return knex('users')
    .where({
      user_ID: listerID
    })
  })
  .then(function(data){
    return data
  })
}

module.exports = getUserByListingId
