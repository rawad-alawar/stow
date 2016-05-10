var knex = require('./connection')

function getUserById(id){
  return knex('users')
  .where({
    user_ID: id
  })
  .select()
  .then(function(data){
    console.log(data)
    return data[0]
  })
}

module.exports = getUserById
