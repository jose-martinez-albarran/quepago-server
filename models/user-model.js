const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  address: String,
  email: String,
  picture: String
}, 
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;