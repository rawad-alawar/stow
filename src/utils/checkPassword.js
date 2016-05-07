var knex = require('./connection')
var bcrypt = require('bcrypt')


function checkPassword(password, hash, callback) {
  var saltRounds = 10
  bcrypt.compare(password, hash, function(err, res) {
    if(err) {callback(err); return}
    callback(null, res)
  })
}

module.exports = checkPassword
