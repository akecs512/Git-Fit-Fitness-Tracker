const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: [
    {
      type: String,
      trim: true,
      required: true,
    },
  ],
  password: [
    {
      type: String,
      trim: true,
      required: true,
    },
  ],
});

const User = model('User', userSchema);

module.exports = User;
