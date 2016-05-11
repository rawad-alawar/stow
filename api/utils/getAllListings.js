var knex = require('./connection')

function getAllListings(){
  return knex
    .select()
    .table('listings')
    .orderBy('listing_ID', 'desc')
    .then(function(data){
      return data
    })
}



module.exports = getAllListings
