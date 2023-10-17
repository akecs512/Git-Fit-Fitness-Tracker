const { User, Workout } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("workouts");
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("workouts");
      }
      throw AuthenticationError;
    },
    workout: async (parent, { workoutId }) => {
      return Workout.findOne({ _id: workoutId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addWorkout: async (
      parent,
      { title, date, duration, note, category },
      context
    ) => {
      if (context.user) {
        const workout = await Workout.create({
          title,
          date,
          duration,
          note,
          category,
        });
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { workouts: { ...workout } },
          },
          {
            new: true,
          }
        );
        return updatedUser;
      }
      throw AuthenticationError;
    },

    // Set up mutation so a logged in user can only remove their user and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    // Make it so a logged in user can only remove a workout from their own user
    removeWorkout: async (parent, { workoutId }, context) => {
      if (context.user) {
        const workout = await Workout.findById(workoutId);

        if (!workout) {
          throw new Error("Workout not found");
        }

        if (workout.userId !== context.user.id) {
          throw new AuthenticationError(
            "You are not authorized to delete this workout"
          );
        }

        const updatedUser = await User.findByIdAndUpdate(
          context.user.id,
          { $pull: { workouts: workoutId } },
          { new: true }
        );

        await Workout.findByIdAndDelete(workoutId);

        return updatedUser;
      } else {
        throw new AuthenticationError("User not authenticated");
      }
    },
    updateWorkout: async (
      parent,
      { workoutId, title, date, duration, note, category }
    ) => {
      return Workout.findOneAndUpdate(
        { _id: workoutId },
        { title, date, duration, note, category },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
