const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config();
const interviewsController = require('./controllers/interviews.js');
const commentsController = require('./controllers/comments.js')
const resourcesController = require('./controllers/resources.js')
const cors = require('cors');
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
app.use(cors());


//___________________
// Routes
//___________________
//localhost:3000
app.use('/interviews', interviewsController)
app.use('/comments', commentsController)
app.use('/resources', resourcesController)

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true}
);

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
