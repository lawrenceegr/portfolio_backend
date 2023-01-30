const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    name:{
        type: String,
        required: false,
    }
})


module.exports = mongoose.model('User',userSchema);