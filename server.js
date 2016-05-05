var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

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

module.exports = app;
