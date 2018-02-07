var express = require('express');
	router = express.Router(),
	app = express();

var walker_controller = require('../controllers/walker_controller');


/* GET register page. */
router.get('/', function(req, res, next) {

  res.render('register', {title: "Register"});
  console.log("rendering register");
  
});

router.post('/', walker_controller.walker_create_post);

module.exports = router;