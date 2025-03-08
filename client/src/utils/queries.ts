import { gql } from '@apollo/client';

//get user query used in communicating with server
export const QUERY_USER = gql`
    query GetUser($userId: String!) {
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
