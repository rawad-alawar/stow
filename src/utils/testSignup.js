var saveUserSignup = require('./saveUserSignup')
var test = require('tape')

data = { firstname: 'Mahuta',
  lastname: 'Hoerara-Smith',
  username: 'DEATHGUN',
  email: 'deathgun@riot.com',
  password: 'ilovemum' }

test('sign up test', function(t){
  t.equal(typeof saveUserSignup, 'function')
  t.end()
})
