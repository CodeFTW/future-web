import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { App } from '../ui/App';
import PropTypes from 'prop-types';
import { withContext, compose } from 'recompose';

const data = graphql(gql`
  query LoggedUser {
    loggedUser {
      _id
      email
      name
    }
  }
`);

const enhance = withContext(
  {
    loggedUser: PropTypes.object,
  },
  ({ data: { loggedUser } }) => ({ loggedUser })
);
export const AppContainer = compose(
  data,
  enhance,
)(App);
