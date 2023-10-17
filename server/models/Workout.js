const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  workoutTitle: {
    type: String,
    required: true,
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
  note: {
    type: String,
    required: false,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
