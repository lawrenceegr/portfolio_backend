if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require('express');
const mongoose = require('mongoose');

// require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
//initializing the app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// mongoose connection
require("./database/db");



// Server running on port 5000
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT }`);
});


