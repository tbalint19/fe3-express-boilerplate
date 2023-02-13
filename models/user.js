const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, unique: true },
  lastName: String,
})

const User = mongoose.model('User', userSchema);

module.exports = User