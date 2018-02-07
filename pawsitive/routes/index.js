var express = require('express');
var router = express.Router();
var app = express();
var walker_controller = require('../controllers/walker_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Walk with Me' });
  console.log("rendering homepage");
});

router.get('/login', walker_controller.walker_create_get);

router.post('/login', walker_controller.walker_authenticate_post);


module.exports = router;
