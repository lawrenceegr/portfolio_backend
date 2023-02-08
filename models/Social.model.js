const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  
 
});

module.exports = mongoose.model('Social', socialSchema);
