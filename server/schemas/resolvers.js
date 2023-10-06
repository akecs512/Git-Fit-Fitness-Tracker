const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
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
    addActivity: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedActivities: input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeActivity: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedActivities: { _id } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateActivity: async (parent, { _id, input }, context) => {
      if (context.user) {
        try {
          const user = await User.findOne({ _id: context.user._id });
          if (!user) {
            throw new AuthenticationError('User not found');
          }  
          const activityIndex = user.activities.findIndex(
            (activity) => activity._id.toString() === _id
          );
          if (activityIndex === -1) {
            throw new Error('Activity not found');
          }
          user.activities[activityIndex] = {
            ...user.activities[activityIndex],
            ...input,
          };
          const updatedUser = await user.save();
  
          return updatedUser;
        } catch (error) {
          throw new Error(`Error updating activity: ${error.message}`);
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};


module.exports = resolvers;
