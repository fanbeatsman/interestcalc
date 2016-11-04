var express = require('express');
var app = express();
var path = require('path');

//var router = app.Router();

//var db = mongoose.connection;
var routes = require('./routes/myRoute');
//mongoose.connect('mongodb://localhost/SwimComments');



app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');
app.use('/', routes);
//app.use(express.static(path.join(__dirname, 'public/')));

//app.use(express.static(__dirname + '/public'));
app.listen(3000);
