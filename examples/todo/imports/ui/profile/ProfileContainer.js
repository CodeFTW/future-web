import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { getLoggedUserContext } from '../../user/userContext';

import { Profile } from './Profile';

export const editProfileMutation = graphql(
  gql`
    mutation editProfile($user: EditProfileInput!) {
      editProfile(user: $user) {
        firstName
      }
    }
  `,
  {
    name: 'editProfile',
  }
);

const loggedUser = getLoggedUserContext();

export const ProfileContainer = compose(
  editProfileMutation,
  loggedUser,
  withRouter,
  withApollo
)(Profile);
