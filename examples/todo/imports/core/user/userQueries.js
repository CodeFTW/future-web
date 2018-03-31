import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const loggedUserQuery = graphql(gql`
  query LoggedUser {
    loggedUser {
      _id
      email
      firstName
      lastName
      age
    }
  }
`);
