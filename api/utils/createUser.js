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
<<<<<<< HEAD:src/utils/createUser.js

=======
>>>>>>> 2d7511b1c9673f82445b51da66cf24b3118b5f50:api/utils/createUser.js
}

module.exports = createUser
