import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import { compose, withState, withHandlers } from 'recompose';
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

// {email : '', firstName: '', lastName: '', age: 0}
export const ProfileContainer = compose(
  withState('user', 'setUser', loggedUser),
  withHandlers({
    // eslint-disable-next-line no-undef
    onInputChange : props => {
      console.log(props, props.user);
      return ({target: { name, value }}) => props.setUser({ ...props.user, [name] : value })}

  }),
  
  editProfileMutation,
  loggedUser,
  withRouter,
  withApollo
)(Profile);
