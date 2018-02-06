var express = require('express'),
	router = express.Router(),
	app = express();

/* GET client list. */
router.get('/client_list', function(req, res, next) {
  res.render('client_list');
  console.log("rendering client list");
});

/* GET client list. */
router.get('/client_single:ID', function(req, res, next) {
  res.render('client_single');
  console.log("rendering single client");
});

/* GET client list. */
router.get('/client_add', function(req, res, next) {
  res.render('client_add');
  console.log("rendering add client");
});

module.exports = router;
