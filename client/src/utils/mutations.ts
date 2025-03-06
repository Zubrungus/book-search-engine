import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
                token
                user {
                    _id
                    username
            }
        }
    }
`

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $password: String!, $email: String!) {
        createUser(username: $username, password: $password, email: $email) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const SAVE_BOOK = gql`
    mutation SaveBook($userId: ID!, $book: BookInput!) {
        saveBook(userId: $userId, book: $book) {
            _id
            savedBooks {
            bookId
            title
            }
        }
    }
`

export const DELETE_BOOK = gql`
mutation DeleteBook($userId: ID!, $bookId: ID!) {
  deleteBook(userId: $userId, bookId: $bookId) {
    _id
    savedBooks {
      bookId
      title
    }
  }
}
`