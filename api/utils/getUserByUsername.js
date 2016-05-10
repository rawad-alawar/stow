var knex = require('./connection')

function getUserByUsername(data){
  return knex('users').where({
    username: name
  }).select(name)
  .then(function(name){
    return name
  })
}

module.exports = getUserByUsername
