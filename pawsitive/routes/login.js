var express = require('express');
var router = express.Router();
var app = express();
var walker_controller = require('../controllers/walker_controller');
var models = require('../server/models');

/* GET login api. */
router.get('/', function(req, res, next) {
  
});

router.post('/', walker_controller.walker_create_post);


module.exports = router;