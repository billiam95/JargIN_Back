const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config();

// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;





app.listen(PORT, () => console.log( 'Listening on port:', PORT));
