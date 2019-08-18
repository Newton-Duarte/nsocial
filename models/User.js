const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is required.'],
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: [true, 'User email is required.'],
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: [true, 'User password is required.'],
    min: 6,
    max: 1024
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);