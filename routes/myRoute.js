var express = require('express')
var router = express.Router()




router.get('/', function (req, res, next) {
	
  var instructions = "Please enter"
  var dollar = "$"
    res.render('index', {'insText': instructions, 'dollar': dollar})

});

module.exports = router
