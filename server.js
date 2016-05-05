var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var getAllListings = require('./src/models/getAllListings')
var getUserById = require('./src/models/getUserById')

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/list', function(req, res) {
  getAllListings()
    .then( function(data){
      console.log(data)
      res.send(data)
  })
})

app.get('/user/:id', function(req, res) {
  console.log(getUserById)
  getUserById(2).then(function(data){
      res.send(data)
    })

} )




module.exports = app;
