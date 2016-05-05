var knex = require('./connection')

function getUserById(id){
  return knex('users')
  .where({
    user_ID: id
  })
  .select()
  .then(function(data){
    return data
  })
}

module.exports = getUserById
