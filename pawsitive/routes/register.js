var express = require('express');
	router = express.Router(),
	app = express();

/* GET register page. */
router.get('/register', function(req, res, next) {

  res.render('register', {title: "Register"});
  console.log("rendering register");
  
});

module.exports = router;