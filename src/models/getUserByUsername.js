var knex = require('./connection')

function getUserByUsername(name){
  console.log('running')
  return knex('users').where({
    username: name
  }).select()
  .then(function(data){
    console.log('returning', data)
    return data
  })
}

module.exports = getUserByUsername
