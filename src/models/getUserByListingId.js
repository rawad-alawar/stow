var knex = require('./connection')

function getUserByListingId(listingID){
  knex('listings').where({
    listings_ID: listingID
  }).select("lister_ID")
  .then(function(data){
    var listerID = data[0].lister_ID
    return knex('users').where({
      user_ID: listerID
    })
  })
  .then(function(data){
    return data
  })
  .finally(function(){
    // knex.destroy()
  })
}

console.log(getUserByListingId(1))
