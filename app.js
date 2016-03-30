var properties = require('./config/properties.js');
var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', './jadeviews');
app.use('/public/js', express.static('./public/js'));
app.use('/public/images', express.static('./public/images'));
app.use('/public/partials', express.static('./public/partials'));
app.get('/', function(req, res) {
  res.render('index.jade', {properties: properties});
});
app.listen(8080, '127.0.0.1');
