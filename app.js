const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exhbs = require('express-handlebars');
const connectDB = require('./config/db')

// routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const users2Router = require('./routes/users2');
const devicesRouter = require('./routes/devices');
const dashRouter = require('./routes/dash');
const orgRouter = require('./routes/organization');
const debugRouter = require('./routes/debug');

const app = express();
connectDB()

// view engine setup

const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine("hbs", hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use( '/users', usersRouter);
app.use( users2Router);
app.use( devicesRouter);
app.use( dashRouter);
app.use( orgRouter);
app.use( debugRouter);

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
