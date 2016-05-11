var test = require('tape')
var knex = require('../connection')
var testData = require('./falseListing')

test('Loaded the Test Data file', function(t){
  t.equal(typeof(testData), 'object', 'Test data recieved!')
  console.log(testData)
  t.equal(testData.listings_ID,9001, 'Recieving listing id from test data')
  t.equal(typeof(testData.description), 'string', 'Listing has a discription test data!')
  t.end()
  knex.destroy()
})
