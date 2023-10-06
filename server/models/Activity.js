const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  duration: [
    {
      type: Int,
      trim: true,
    },
  ],
  date: [
    {
      type: Date,
      required: true,
    },
  ],
  notes: [
    {
      type: String,
      trim: true,
    },
]
});

const activity = model('Activity', activitySchema);

module.exports = activity;
