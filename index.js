// loading the dotenv config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
//initializing the app
const express = require('express');
const app = express();
app.set("view engine","ejs");
// using middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.json());//body-parser 
require("./middlewares/Cors")(app);//cors

// mongoose connection
require("./database/db");

//importing routes
const Auth= require("./routes/User.routes");
const Work = require("./routes/Work.routes");
const Social = require("./routes/Social.routes");
const Contact = require("./routes/Contact.routes");

//Using the routes
app.use("/authentication", Auth);
app.use("/work", Work);
app.use("/social", Social);
app.use("/contact", Contact);


// 
app.get('/work', function(req, res) {
  res.render('views/work');
});

// default route
app.get("/",(req,res)=>{
  res.send("<p>The Express server is now running! This is the default route.</p>")
})


// Port the server is listenning on
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT }`);
});


