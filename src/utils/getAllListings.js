var knex = require('./connection')

function getAllListings(){
  return knex
    .select().table('listings')
    .then(function(data){
      return data
    })
    .then(knex.destroy())
}



module.exports = getAllListings
