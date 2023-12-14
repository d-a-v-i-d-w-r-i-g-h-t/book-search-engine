const typedefs = `
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
    createUser(
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
    deleteBook(
      bookId: String!
    ): User
  }
`;

module.exports = typedefs;
