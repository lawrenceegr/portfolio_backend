const mongoose = require('mongoose');
require("dotenv").config();
  
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", true);// to have strict Schemas and store in the database only what is specified in the model
mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
const db =mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open", function(){
    console.log("The database is ready.");
});

