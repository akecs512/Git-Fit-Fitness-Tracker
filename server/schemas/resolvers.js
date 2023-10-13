const { User, Workout } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
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
    addWorkout: async (parent, { workoutData }, context) => {
      if (context.me) {
        const workout = await Workout.create({
          workoutData
        });
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.me._id },
          {
            $addToSet: { workouts: workout },
          },
          {
            new: true
          }
        );
        return updatedUser;
      }
      throw AuthenticationError;
    },
    // Add a third argument to the resolver to access data in our `context`
    // addWorkout: async (parent, { userId, workout }, context) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: userId },
    //       {
    //         $addToSet: { workouts: workout },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw AuthenticationError;
    // },
    // Set up mutation so a logged in user can only remove their user and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    // Make it so a logged in user can only remove a workout from their own user
    removeWorkout: async (parent, { workout }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { workouts: workout } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    updateWorkout: async (parent, { workoutId, workoutData }) => {
      return Workout.findOneAndUpdate({ _id: workoutId }, workoutData, {
        new: true,
        runValidators: true,
      });
    },
  },
};

module.exports = resolvers;
