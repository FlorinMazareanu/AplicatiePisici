
var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Multer e pt file upload
var multer = require('multer');
//app.use(multer({dest:__dirname+'/public/images/'}).any());



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pisiciRouter = require('./routes/pisici');
var addCatRouter = require('./routes/addCat');
var addCatInDBRouter = require('./routes/addCatInDB');
var addCatPicRouter = require('./routes/addCatPic');

var app = express();
var queries = require('./baze_de_date/queries');

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pisici', pisiciRouter);
app.use('/addCat', addCatRouter);
app.use('/addCatInDB', addCatInDBRouter);
app.use('/addCatPic', addCatPicRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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



