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

//importing routes
const Auth= require("./routes/Auth.routes");
const Work = require("./routes/Work.routes");
const Social = require("./routes/Social.routes");
const Contact = require("./routes/Contact.routes");

//Using the routes
// app.use("")

// default route
app.get("/",(req,res)=>{
  res.send("<p>The Express server is now running! This is the default route.</p>")
})


// Server running on port 5000
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT }`);
});


