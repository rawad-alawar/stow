var knex = require('./connection')

function getAllListings(){
  console.log('inside method getAllListings')
  return knex
    .select().table('listings')
    .then(function(data){
      console.log(typeof data)
      return data
    })
}



module.exports = getAllListings
