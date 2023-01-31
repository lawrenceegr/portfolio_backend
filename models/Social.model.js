const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
  facebook: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
 
});

module.exports = mongoose.model('Social', socialSchema);
