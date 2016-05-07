var knex = require('./connection')

function getUserByUsername(name){
  return knex('users').where({
    username: name
  }).select()
  .then(function(data){
    return data
  })
}

module.exports = getUserByUsername
