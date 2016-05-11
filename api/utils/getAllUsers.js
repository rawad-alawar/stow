var knex = require('./connection')

function getAllUsers(){
  return knex
    .select()
    .table('users')
    .orderBy('user_ID', 'desc')
    .then(function(users){
      return users
    })
}

module.exports = getAllUsers
