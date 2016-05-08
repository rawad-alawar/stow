var knex = require('./connection')

function getUsersListings(userID){
  return knex('listings')
    .where({Lister_ID: userID})
    .select()
    .then(function(data){
      return data
    })
}


module.exports = getUsersListings
