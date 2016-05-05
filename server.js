var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var getAllListings = require('./src/models/getAllListings')
var getUserById = require('./src/models/getUserById')
var getUserByListingId = require('./src/models/getUserById')
var saveUserSignup = require('./src/models/saveUserSignup')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var indexPath = path.join(__dirname, '/public/index.html')
var publicPath = express.static(path.join(__dirname, '/public'))

app.use('/public', publicPath)
app.get('/', function(req, res) {
    res.sendFile(indexPath);
});

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
    res.send("booty hole warrior")
  })
})



module.exports = app;
