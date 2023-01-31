const mongoose = require('mongoose');
require("dotenv").config();
  
const MONGODB_URL = process.env.MONGODB_URL;
// const MONGODB_URL = "mongodb://127.0.0.1:27017/portfolio"

mongoose.set("strictQuery", true);// to have strict Schemas and store in the database only what is specified in the model
mongoose.connect(   MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 30000 // Timeout after 5s instead of 30s
});
const db =mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open", function(res){
    console.log("The database is ready.");
   
});

