var express = require('express');
var router = express.Router();
var app = express();
var walker_controller = require('../controllers/walker_controller');

/* GET login api. */
router.get('/', function(req, res, next) {
  
});

router.post('/', walker_controller.walker_authenticate_post);

module.exports = router;