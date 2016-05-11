var knex = require('./connection')

function createUser(data, hash){
  return knex('users').insert({
    username: data.username.value,
    password: hash,
    email: data.email.value
  })
}

module.exports = createUser
