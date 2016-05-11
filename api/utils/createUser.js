var knex = require('./connection')

function createUser(data, hash){
  return knex('users').returning('user_ID').insert({
    username: data.username.value,
    password: hash,
    email: data.email.value
  })
}

module.exports = createUser
