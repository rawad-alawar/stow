var express = require('express')
var router = express.Router()
var cors = require('cors')
var cloudinary = require('cloudinary')
var dotenv = require('dotenv')
require('dotenv').config()

var utils = require('./utils/utils.index.js')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var corsOptions = {
  origin: '*'
}

cloudinary.config({
  cloud_name: 'dzq9wgh8v',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

router.post('/photos', cors(corsOptions), function (req, res) {
  cloudinary.uploader.upload(Object.keys(req.body)[0], function (result) {
  })
})

router.post('/login', function (req,res) {
  var sess = req.session
  utils.getUserByUsername(req.body.username)
    .then(function(data) {
      if(data.length === 0)
        res.json('error')
      else {
        utils.checkPassword(req.body.password, data[0].password, function(err, correct) {
          if(err) console.log(err)
          else if(correct == true) {
            var id = data[0].user_ID
            sess.user_ID = id
            res.json({id: id})
          }
          else {
            res.json('error')
          }
        })
      }
    })
})

router.post('/signup', function (req,res) {
  utils.getUserByUsername(req.body.username.value)
    .then(function(data) {
      if(data.length > 0) {
        res.json({error: 'username already in use'})
      } else {
        utils.hashPassword(req.body.password.value, function(err,hash) {
          if(err) {
            console.log(err)
            res.json({error: err})
          } else {
            utils.createUser(req.body, hash)
              .then(function(data) {
                var id = data[0]
                req.session.user_ID = id
                res.json({id: id})
              })
              .catch(function(err){
                res.json({error: err})
              })
          }
        })
      }
    })
})

router.get('/checkAuth', function(req,res) {
  var sess = req.session
  var authorised = -1
  if(sess.user_ID) {
    authorised = sess.user_ID
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
    res.json(data)
  })
})

router.get('/users', function(req, res) {
  utils.getAllUsers()
  .then(function(users) {
    res.json(users)
  })
})

router.get('/user/:id', function(req, res) {
  utils.getUserById(req.params.id)
  .then(function(data){
    res.json(data)
  })
})

router.get('/singleuser/:id', function(req, res) {
  utils.getUserById(req.params.id)
  .then(function(data){
    res.json(data[0])
  })
})

router.post('/add/:id', function(req, res) {
  utils.addListingToUser(req.body.action, req.params.id, req.body.listingId, req.body.formData)
  .then(function(changedId) {
    res.json(changedId)
  })
})

router.get('/user/listing/:id', function(req, res) {
  utils.getUserByListingId(req.params.id)
  .then(function(data) {
    res.json(data)
  })
})

router.get('/listing/:city', function(req, res){
  utils.getListingsByLocation(req.params.city)
  .then(function(data){
    res.json(data)
  })
})

router.post('/feedback/add', function(req, res){
  utils.saveFeedback(req.session.user_ID, req.body)
  .then(function(changedFeedbackId){
    utils.updateListingWithFeedback(req.body.listingId.value)
    .then(changedListingId)
    var response = {changedListingId: changedListingId, changedFeedbackId: changedFeedbackId}
    res.json(response)
  })
})

router.get('/feedback', function(req, res) {
  utils.getAllFeedback()
  .then(function(feedback) {
    res.json(feedback)
  })
})

router.post('/upload', function(req, res) {
  res.end()
})

router.get('/getlisting/:id', function(req, res) {
  var sess = req.session
  console.log(req.params.id, "this is req.params")
    utils.getListingById(req.params.id)
    .then(function(data) {
      console.log(data, 'this is this')
      res.json(data[0])
    })
})

router.delete('/listing/:id', function(req, res) {
  var sess = req.session
  if(sess.user_ID) {
    utils.deleteListing(req.params.id)
    .then(function(changedId) {
      res.json(changedId)
    })
  }
  else res.json(-1)
})


module.exports = router
