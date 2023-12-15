const { AuthenticationError } = require("apollo-server-express");
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers ={
  
  Query: {
    me: async (parent, args, context) => {
      const user = context.user;

      if (!user) {
        throw new AuthenticationError('You need to be logged in');
      }

      const userData = await User.findOne({ _id: context.user._id});
      // .select(
      //   "-__v -password"
      // );
      return userData;
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

      if (!user || !user.isCorrectPassword(password)) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      
      return { token, user };
    },


    saveBook: async (parent, { input }, context) => {
      const user = context.user;
    
      if (!user) {
        throw new AuthenticationError('You need to be logged in');
      }

      const updatedBooks = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: input }},
        { new: true }
      ).populate('savedBooks');

      // return updated data
      return updatedBooks;
    },


    removeBook: async (parent, { bookId }, context) => {
      const user = context.user;

      if (!user) {
        throw new AuthenticationError('You need to be logged in');
      }

      const updatedBooks = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );

      // return updated data
      return updatedBooks;
    },
  },
};

module.exports = resolvers;