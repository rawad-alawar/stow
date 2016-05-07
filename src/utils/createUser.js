var knex = require('./connection')

function createUser(data, hash){
  return knex('users').insert({
    firstName: data.firstname,
    lastName: data.lastname,
    username: data.username,
    email: data.email,
    password: hash
  })
  
}

module.exports = createUser
