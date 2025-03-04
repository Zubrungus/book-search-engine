//may be incorrect!
const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]
    bookCount: Int
}

type Book {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    getUser(_id: String): User
    login(username: String, password: String): Auth
}

type Mutation {
    createUser(username: String, password: String, email: String): Auth
    saveBook(_id: String, book: Book): User
    deleteBook(userId: String, bookId: String): User
}
`;

export default typeDefs;