var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session')
var cookieParser = require('cookie-parser')

var env = process.env.NODE_ENV || 'development'

var knex = require('./src/models/connection')

var getAllListings = require('./src/models/getAllListings')
var getUserById = require('./src/models/getUserById')
var getUserByListingId = require('./src/models/getUserById')
var createUser = require('./src/models/createUser')
var saveListing = require('./src/models/saveListing')
var getUserByUsername = require('./src/models/getUserByUsername')
var hashPassword = require('./src/models/hash')
var checkPassword = require('./src/models/checkPassword')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'top secret',
  saveUninitialized: true,
  resave: true,
  db: knex
}))

var sess

var indexPath = path.join(__dirname, '/public/index.html')
var publicPath = express.static(path.join(__dirname, '/public'))

app.use('/public', publicPath)
app.get('/', function(req,res) {
    res.sendFile(indexPath);
})

app.post('/login', function (req,res) {
  sess = req.session
  getUserByUsername(req.body.username)
    .then(function(data) {
      if(data.length === 0)
        res.send('Username not found')
      else {
        checkPassword(req.body.password, data[0].password, function(err, correct) {
          if(correct) {
            sess.userId = data[0].userId
            res.send()
          }
          else{
          res.end()
          }
        })
      }
    })
})

app.post('/signup', function (req,res) {
  sess = req.session
  getUserByUsername(req.body.username)
    .then(function(data) {
      if(data.length > 0)
        res.send('Username already in use')
      else {
        hashPassword(req.body.password, function(err,hash) {
          if(err) {console.log(err); return}
          createUser(req.body, hash)
            .then(function(data) {
              req.session.userId = data[0]
              res.redirect('/')
            })
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
  getAllListings()
  .then( function(data){
    console.log(data)
    res.send(data)
  })
})

app.get('/user/:id', function(req, res) {
  getUserById(req.params.id)
  .then(function(data){
    res.send(data)
    })
} )

app.get('/user/listing/:id', function(req, res) {
  getUserByListingId(req.params.id)
  .then(function(data) {
    res.send(data)
  })
})

app.post('/user/signup', function(req, res){
  console.log(typeof saveUserSignup)
  console.log(req.body)
  saveUserSignup(req.body)
  .then(function(){
    res.end()
  })
})


app.post('/listing/add', function(req, res){
  console.log(req.body)
  saveListing(req.body)
  .then(function(){
    res.end()
  })
})

app.get('/login', function(req, res) {
  req.sessions.username = 'fancypants'
})



module.exports = app;
