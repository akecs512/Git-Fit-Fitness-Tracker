const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  duration: {
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
