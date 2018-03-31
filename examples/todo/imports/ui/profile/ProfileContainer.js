import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withAlert } from '@codeftw/future-web-ui-alert';
import { getLoggedUserContext } from '../../user/userContext';

import { Profile } from './Profile';

export const editProfileMutation = graphql(
  gql`
    mutation editProfile($user: EditProfileInput!) {
      editProfile(user: $user) {
        _id
        name
        email
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
  withApollo,
  withAlert
)(Profile);