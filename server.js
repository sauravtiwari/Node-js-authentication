var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(express.static('views'));
var mongoose = require("mongoose");
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session')
//database connection

mongoose.connect('mongodb://localhost/task',function(err){
  if(err){
    console.log(`error is ${err}`);
  }
  else
  {
    console.log('connected to the database');
  }
});

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs');

require('./app/route.js')(app, passport);

app.listen(3000, function(err){
      if(err){
        coonsole.log(err);
      }
      else{
        console.log("server is running on port 3000");
      }
});
