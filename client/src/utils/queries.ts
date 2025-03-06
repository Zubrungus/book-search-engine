import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query GetUser($userId: ID!) {
        getUser(_id: $userId) {
            _id
            username
            email
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }

`
