var test = require('tape')
var knex = require('../connection')
var falseFeedback = require('./falseFeedback')

test('Loaded the Test Data file', function(t){
  t.equal(typeof(falseFeedback), 'object', 'Test data recieved!')
  console.log(falseFeedback)
  t.equal(falseFeedback.feedback_ID,7, 'Recieving correct data from test data')
  // t.equal(falseFeedback.password,'ilovemum', 'Recieving correct password from test data!')
  t.end()
  knex.destroy()
})
