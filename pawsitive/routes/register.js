var express = require('express');
	router = express.Router(),
	app = express();

var walker_controller = require('../controllers/walker_controller');
var models = require('../server/models');

/* GET register page. */
router.get('/', function(req, res, next) {

  res.render('register', {title: "Register"});
  console.log("rendering register");
  
});

//router.post('/', walker_controller.walker_create_post);

router.post('/', function(req, res) {
  models.Walker.create({
    userName: "one",
    password: "two"
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;