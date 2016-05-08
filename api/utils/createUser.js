var knex = require('./connection')

function createUser(data, hash){
  return knex('users').insert({
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    password: hash,
    created_at: Date()
  })
}

module.exports = createUser
