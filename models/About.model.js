const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  
  description: {
    type: String,
    required: true
  },
  services:{
    type: String,
    required: false
  }
});

module.exports = mongoose.model('About', aboutSchema);
