import { deleteBook, saveBook } from "../controllers/user-controller";
import bookSchema, { IBookDocument } from "../models/Book";
import User, { IUserDocument } from "../models/User";
import { AuthenticationError, signToken } from "../services/auth";

const resolvers = {
    Query: {
        getUser: async (_id: string)=> {
            return User.findOne({_id});
        },
        login: async (username: string, password: string) => {
            const user = await User.findOne({username})

            if (!user) {
                throw new AuthenticationError('Could not authenticate user.');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw){
                throw new AuthenticationError('Could not authenticate user.');
            }

            const token = signToken(user.username, user.email, user._id);

            return {token, user};
        },
    },
    Mutation: {
        createUser: async (username: string, password: string, email: string) => {

        },
        saveBook: async (_id: string, book: IBookDocument) => {

        },
        deleteBook: async (userId: string, bookId: string) => {

        },

    }
};

export default resolvers;