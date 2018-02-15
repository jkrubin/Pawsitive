var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');
    DIST_DIR   = path.join(__dirname, "dist");

var index = require('./views/index.pug'),
    login = require('./views/login.pug'),
    users = require('./views/users.pug'),
    register = require('./views/register.pug');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(DIST_DIR));


// app.use('/', index);
// app.use('/users', users);
// app.use('/login', login);
// app.use('/register', register);


/*
app.get('/', index);
app.get('/users', users);
app.get('/login', index);
app.get('/register', register);
*/

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
