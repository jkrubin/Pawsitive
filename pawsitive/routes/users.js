var express = require('express');
var router = express.Router();
var app = express();
var walker_controller = require('../controllers/walker_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
