const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'admin', 'frontdesk_staff', 'content_creator'],
  },
  // You can add additional user details here (e.g., email, name)
});

module.exports = mongoose.model('User', userSchema);
