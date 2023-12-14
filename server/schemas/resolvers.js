const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers ={
  
  Query: {
    me: async (parent, args, context) => {
      return context.user;
    },
  },


  Mutation: {
    createUser: async (parent, args) => {
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
      
      user.savedBooks.push(input);
      await user.save();

      return user;
    },


    deleteBook: async (parent, { bookId }, context) => {
      const user = context.user;

      if (!user) {
        throw new AuthenticationError('You need to be logged in');
      }

      user.savedBooks = user.savedBooks.filter(book => book.bookId !== bookId);
      await user.save();

      return user;
    },
  },
};

module.exports = resolvers;