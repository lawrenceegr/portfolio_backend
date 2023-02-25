const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  dateStarted: {
    type: Date,
    required: true
  },
  dateEnded: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: { 
    type: String,
   required:false
   },
});

module.exports = mongoose.model('Work', workSchema);
