var express = require('express')
var router = express.Router()

var utils = require('./utils/utils.index.js')
var sess

router.post('/login', function (req,res) {
  sess = req.session
  utils.getUserByUsername(req.body.username)
    .then(function(data) {
      if(data.length === 0)
        res.json('Username not found')
      else {
        utils.checkPassword(req.body.password, data[0].password, function(err, correct) {
          if(err)
            console.log(err)
          else if(correct) {
            sess.user_ID = data[0].user_ID
            res.json('logged in to ' + sess.user_ID)
          }
        })
      }
    })
})

router.post('/signup', function (req,res) {
  sess = req.session
  utils.getUserByUsername(req.body.username)
    .then(function(data) {
      if(data.length > 0)
        res.json('Username already in use')
      else {
        utils.hashPassword(req.body.password, function(err,hash) {
          if(err) console.log(err)
          else {
            utils.createUser(req.body, hash)
              .then(function(data) {
                sess.user_ID = data[0].user_ID
                res.json('all signed up!')
              })
          }
        })
      }
    })
})

router.get('/checkAuth', function(req,res) {
  sess = req.session
  var authorised = false
  if(sess.user_ID) {
    authorised = true
  }
  res.json(authorised)
})

router.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    if(err)
      res.json(err)
    else
      res.json('logged out')
  })
})

router.get('/list', function(req, res) {
  utils.getAllListings()
  .then( function(data){
    res.send(data)
  })
})

router.get('/user/:id', function(req, res) {
  utils.getUserById(req.params.id)
  .then(function(data){
    res.send(data)
    })
} )

router.get('/user/listing/:id', function(req, res) {
  utils.getUserByListingId(req.params.id)
  .then(function(data) {
    res.send(data)
  })
})

router.post('/listing/add', function(req, res){
  utils.saveListing(req.body)
  .then(function(){
    res.end()
  })
})

router.get('/listing/:city', function(req, res){
  utils.getListingsByLocation(req.params.city)
  .then(function(data){
    res.send(data)
  })
})

module.exports = router