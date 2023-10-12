const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
  workoutTitle: {
    type: String,
    required: 'You need to leave a workout!',
    trim: true,
  },
  workoutDate: {
    type: Date,
    required: true,
    trim: true,
  },
  workoutDuration: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: false,
    trim: true,
  },
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;