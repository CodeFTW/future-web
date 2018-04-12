import { compose, withState, withHandlers } from 'recompose';

import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import { getLoggedUserContext } from '../user/userContext';

const loggedUser = getLoggedUserContext();


export const withForm = (...args) => {
    return compose(loggedUser, withApollo, withRouter, ...args)
};
