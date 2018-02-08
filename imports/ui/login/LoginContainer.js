import { compose } from 'react-apollo';
import { Login } from './Login';
import { loggedUserQuery } from '../../core/user/userQueries';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const data = loggedUserQuery;

const loggedUser = graphql(gql`
    mutation login($_id: ID){
        login(_id: $_id) {
            _id
        }
    }
`,{
    name: "login",
    options: {
        refetchQueries: ["LoggedUser"]
    }
});

export const LoginContainer = compose(data, loggedUser)(Login);
