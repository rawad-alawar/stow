var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var cookieParser = require('cookie-parser')

var utils = require('./src/utils/utils.index.js')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: 'top secret',
  saveUninitialized: true,
  resave: true
}))


var indexPath = path.join(__dirname, '/public/index.html')
var publicPath = express.static(path.join(__dirname, '/public'))

app.use('/public', publicPath)
app.get('/', function(req,res) {
  res.sendFile(indexPath)
})

var sess

app.post('/login', function (req,res) {
  sess = req.session
  utils.getUserByUsername(req.body.username)
    .then(function(data) {
      console.log("DATA: ", data)
      if(data.length === 0)
        res.json('Username not found')
      else {
        utils.checkPassword(req.body.password, data[0].password, function(err, correct) {
          if(err)
            console.log(err)
          else if(correct) {
            sess.userId = data[0].userId
            res.send()
          }
          else{
            res.json('logged in')
          }
        })
      }
    })
})

app.post('/signup', function (req,res) {
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
                req.session.userId = data[0]
                res.json('all signed up!')
              })
          }
        })
      }
    })
})

app.get('/checkAuth', function(req,res) {
  sess = req.session
  var authorised = false
  if(sess.userId) {
    authorised = true
  }
  res.send(authorised)
})

app.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    if(err)
      console.log(err)
    else
      res.redirect('/')
  })
})

app.get('/list', function(req, res) {
  utils.getAllListings()
  .then( function(data){
    console.log(data)
    res.send(data)
  })
})

app.get('/user/:id', function(req, res) {
  utils.getUserById(req.params.id)
  .then(function(data){
    res.send(data)
    })
} )

app.get('/user/listing/:id', function(req, res) {
  utils.getUserByListingId(req.params.id)
  .then(function(data) {
    res.send(data)
  })
})

app.post('/listing/add', function(req, res){
  utils.saveListing(req.body)
  .then(function(){
    res.end()
  })
})

module.exports = app