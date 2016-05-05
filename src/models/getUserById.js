var knex = require('./connection')

function getUserById(id){
  knex('users').where({
    user_ID: id
  })
  .then(function(data){
    return data
  })
}

module.exports = getUserById
