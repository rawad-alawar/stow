var knex = require('./connection')

function saveUserSignup(data){
  return knex('users').insert({
    firstName: data.firstname,
    lastName: data.lastname,
    username: data.username,
    email: data.email,
    password: data.password
  })
}

module.exports = saveUserSignup
