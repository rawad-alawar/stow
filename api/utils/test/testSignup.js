var createUser = require('../createUser')
var getUserByUsername = require('../getUserByUsername')
var getListingsByLocation = require('../getListingsByLocation')
var test = require('tape')
var knex = require('../connection')
var falseUser = require('./falseUser')

test('sign up test', function(t){
  t.equal(typeof createUser, 'function', 'type of test passed!')
  t.equal(typeof createUser(falseUser), 'object', 'function returns object')
  t.end()
})

test('Get user by username test', function(t){
  t.equal(typeof getUserByUsername, 'function', 'typeof test passed')
  t.end()
})

test('Get user by username Async', function(t){
  console.log(falseUser.username)
    t.equal(typeof falseUser, 'object', 'function returns an object'),
    t.equal(falseUser.username, 'DEATHGUN', 'function returns the right username'),
    t.end()
})

test('Get Listing by location test', function(t){
  t.equal(typeof getListingsByLocation, 'function', 'typeof test passed')
  t.end()
})

test('Get Listing by Location Async', function(t){
  getListingsByLocation('wellington')
  .then(function(data){
    t.equal(typeof data, 'object','function return an object')
    console.log(data)
  })
  .then(function(){
    t.end()
  })
  .then(function(){
    knex.destroy()
  })
})
