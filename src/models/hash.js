var knex = require('./connection')
var bcrypt = require('bcrypt')


function hash(password, callback) {
   var saltRounds = 10
   bcrypt.hash(password, saltRounds, function(err, hash) {
     if(err) {callback(err); return}
     callback(null, hash)
   })
 }

 module.exports = hash
