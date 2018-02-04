var express = require('express');
var router = express.Router();
var app = express();
var walker_controller = require('../controllers/walker_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Walk with Me' });
  console.log("rendring homepage");
});

router.get('/login', walker_controller.walker_create_get);

router.post('/login', walker_controller.walker_create_post);


module.exports = router;
