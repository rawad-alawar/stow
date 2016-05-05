var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: '../../database/dev.sqlite3'
  }
})

function getUserById(id){
  knex('users').where({
    user_ID: id
  }).finally(function(data){
    console.log("finished")
    // knex.destroy()
  })
}

console.log(getUserById(2))
