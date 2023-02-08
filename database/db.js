const mongoose = require('mongoose');
require("dotenv").config();
  
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", true);// to have strict Schemas and store in the database only what is specified in the model
exports.connection =mongoose.connect(   MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 30000 // Timeout after 30s 
});
db =mongoose.connection;
let gfs;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open", function(res){
    console.log("The database is ready.");
    // gfs.
});

