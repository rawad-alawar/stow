var knex = require('./connection')

function getAllListings(){
  return knex
    .select()
    .table('listings')
    .orderBy('listing_ID', 'desc')
<<<<<<< HEAD
    .then(function(data){
      return data
=======
    .then(function(listingsData){
      return listingsData
>>>>>>> f55a9652c9f6ab94727bce796482bd6161a3c756
    })
}



module.exports = getAllListings
