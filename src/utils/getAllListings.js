var knex = require('./connection')

function getAllListings(){
  return knex
    .select().table('listings')
    .then(function(data){
      return data
    })
}



module.exports = getAllListings
