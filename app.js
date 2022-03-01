// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const mongoose     = require('mongoose');
const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const bodyParser   = require('body-parser');
// const path         = require('path');
// const favicon      = require('serve-favicon');
// const logger       = require('morgan');
// const cors = require("cors");


const app = express();
// use session: 
//require('./configs/session-configs')(app);

//mongoose:
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const MongoStore = require('connect-mongo')
app.use(session({
Secret: 'doesnt matter for now',
Resave: false,
saveUnitialized: false,			//---> dont create cookies for non logged in users
Store: MongoStore.create({mongoUrl: "mongodb://localhost/lab-profile-app"})
}));



// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);


// allow access to the API from different domains/origins
// app.use(cors({
//   // this could be multiple domains/origins, but we will allow just our React app
//   origin: [ "http://localhost:3000" ]
// }));


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


app.locals.title = 'Onlineshop - A Prototype';


// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes");
app.use("/api", allRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
