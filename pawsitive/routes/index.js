var express = require('express');
var router = express.Router();
var app = express();
var walker_controller = require('../controllers/walker_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Walk with Me' });
  console.log("rendering homepage");
});


module.exports = router;
