var express = require('express');
var app = express();
var path = require('path');

var routes = require('./routes/myRoute');


app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');
app.use('/', routes);

//Should narrow this path of static files to serve, or create a route or something else.
app.use(express.static(path.join(__dirname, 'public/')));

//app.use(express.static(__dirname + '/public'));
app.listen(3000);
