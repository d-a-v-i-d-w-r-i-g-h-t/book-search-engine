const typeDefs = `
  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
  }  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation { 
    addUser(
      username: String!,
      email: String!,
      password: String!
    ): Auth
    login(
      email: String!,
      password: String!
    ): Auth
    saveBook(
      input: BookInput
    ): User
    removeBook(
      bookId: String!
    ): User
  }
`;

module.exports = typeDefs;
