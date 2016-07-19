var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next) {
	var data = {userCount : 5}  
	res.render('allusers', data);
});


module.exports = router;
