var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const passport = require('passport');
const Customer = require('./models/customer');
const cors = require('cors')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cruiseRouter = require('./routes/cruises')
var accountRouter = require('./routes/account')

const mongooseConnection = require('./database-connection')
const socketService = require('./socket-service')

var app = express();

app.use(
  cors({
    origin: true,
    credentials: true

  })
)

app.set('trust proxy', 1)

app.set('io', socketService)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: ['supersecuresecretsecret', 'evenmoresecretsecret'],
  store: new MongoStore({ mongooseConnection, stringify: false }),
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    path: '/api',
    sameSite: process.env.NODE_EV == 'production' ? 'none' : 'strict',
    secure: process.env.NODE_EV == 'production'
}
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(Customer.createStrategy())


passport.serializeUser(Customer.serializeUser());
passport.deserializeUser(Customer.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  req.session.viewCount++
  next()
})

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/cruises', cruiseRouter);
app.use('/api/account', accountRouter);

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
