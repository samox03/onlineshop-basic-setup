// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");
const mongoose     = require('mongoose');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const bodyParser   = require('body-parser');
// const path         = require('path');
// const favicon      = require('serve-favicon');
// const cors = require("cors");


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
Store: MongoStore.create({mongoUrl: 'mongodb://localhost/lab-profile-app'})
}));


// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();


// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes");
app.use("/api", allRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
