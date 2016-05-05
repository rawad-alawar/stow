var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var indexPath = path.join(__dirname, '/public/index.html')
var publicPath = express.static(path.join(__dirname, '/public'))

app.use('/public', publicPath)
app.get('/', function(req, res) {
    res.sendFile(indexPath);
});

module.exports = app;
