import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Login from '../ui/login/Login';

const data = graphql(gql`
    query User {
        loggedUser {
            _id
        }
    }
`);

export const UserContainer = compose(
    data
)(Login);
