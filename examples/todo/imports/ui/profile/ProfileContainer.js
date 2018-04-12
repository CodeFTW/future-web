
import { compose, withState, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withForm} from '../../containers/withForm'
import { Profile } from './Profile';
import { showAlert } from '@codeftw/future-web-ui-alert';


const editProfileMutation = () => graphql(
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


const initEditProfileState = (props) => 
  ({
    _id: props.loggedUser._id,
    email: props.loggedUser.email,
    firstName: props.loggedUser.firstName || '',
    lastName: props.loggedUser.lastName || '',
    age: props.loggedUser.age || 0,
    gender: props.loggedUser.gender || 'male',
  });


const handleSubmitProfile = editProfileState =>
  !!editProfileState.firstName.trim();

const actionSave = props => {
  if (handleSubmitProfile(props.editProfileState)) {
    const { editProfile, history, client } = props;
    const { firstName, lastName, age } = props.editProfileState;
    editProfile({
      variables: {
        user: {
          firstName,
          lastName,
          age,
        },
      },
    })
      .then(() => {
        // TODO when we have the cache working correctly after an update we can remove this
        // https://github.com/CodeFTW/future-web/issues/34
        client.resetStore();
        showAlert('Profile updated');
        history.push('/profile');
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  } else {
    // TODO: I don't know how can I show the alert for user
    showAlert('Profile updated');
  }
}  

const editValues = props => ({ target: { name, value } }) => {
    props.setEditProfileState({ ...props.editProfileState, [name]: value })
}

const wrapWithState = () => withState('editProfileState', 'setEditProfileState', props => initEditProfileState(props));
const wrapWithHandlers = () =>  withHandlers({
  // eslint-disable-next-line no-undef
  onInputChange: props => editValues(props),
  editProfileAndGo: props => () => actionSave(props)
});

export const ProfileContainer = compose(withForm(editProfileMutation(), wrapWithState(), wrapWithHandlers()))(Profile);
