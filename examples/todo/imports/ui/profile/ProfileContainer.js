import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import { compose, withState, withHandlers } from 'recompose';
import { getLoggedUserContext } from '../../user/userContext';
// import { withAlert } from '@codeftw/future-web-ui-alert';

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

handleSubmitProfile = (editProfileState) => !!editProfileState.firstName.trim()

export const ProfileContainer = compose(
  editProfileMutation,
  loggedUser,
  withRouter,
  withApollo,
  // withAlert,
  withState('editProfileState', 'setEditProfileState', props =>
    intialState = {
      _id: props.loggedUser._id,
      email: props.loggedUser.email,
      firstName: props.loggedUser.firstName || '',
      lastName: props.loggedUser.lastName || '',
      age: props.loggedUser.age || 0,
    },
  ),
  withHandlers({
    // eslint-disable-next-line no-undef
    onInputChange: (props) => ({ target: { name, value } }) =>
      props.setEditProfileState({ ...props.editProfileState, [name]: value }),

    editProfileAndGo: (props) => () => {
      if (this.handleSubmitProfile(props.editProfileState)) {
        const { editProfile, history, client } = props;
        const { firstName, lastName, age } = props.editProfileState;
        editProfile({
          variables: {
            user: {
              firstName, lastName, age
            },
          },
        })
          .then(() => {
            // TODO when we have the cache working correctly after an update we can remove this
            // https://github.com/CodeFTW/future-web/issues/34
            client.resetStore();
            // TODO: I don't know how can I show the alert for user
            console.log('Profile updated');
            history.push('/profile');
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      } else {
         // TODO: I don't know how can I show the alert for user
         console.log('Profile updated');
      }
    }
  })
)(Profile);
