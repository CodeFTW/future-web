import React, { Fragment } from 'react';
import { showAlert } from '@codeftw/future-web-ui-alert';
import { Button, TextField } from 'material-ui';
import { Save } from 'material-ui-icons';
import { updateAppTitle } from '../components/uis';

  
  handleSubmitProfile = () => !!this.state.firstName.trim();

  // eslint-disable-next-line no-undef
  editProfileAndGo = () => {
    if (this.handleSubmitProfile()) {
      const { editProfile, history, client } = this.props;

      editProfile({
        variables: {
          user: {
            ...this.state,
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
      showAlert('The field Name is required');
    }
  };



  

export const Profile = ({user, setUser, loggedUser, onInputChange}) => {

  console.log(user);

  user = {...loggedUser};

  const { email, firstName, lastName, age } = user; 
 
  
  // console.log(loggedUser);
  console.log(user);

  // user = { ...loggedUser} };

    return (
      <Fragment>
        {updateAppTitle(`Edit Profile `)}
        <form className="form">
          <TextField
            name="email"
            label="Email"
            value={email}
            fullWidth
            disabled
          />
          <TextField
            name="firstName"
            label="First Name"
            value={firstName || ''}
            onChange={onInputChange}
            fullWidth
            required
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={lastName || ''}
            onChange={onInputChange}
            fullWidth
            required
          />
          <TextField
            name="age"
            type="number"
            label="Age"
            value={age  || ''}
            onChange={onInputChange}
            fullWidth
          />

          <Button
            className="form-action"
            raised
            color="primary"
            onClick={this.editProfileAndGo}
          >
            <Save />
          </Button>
        </form>
      </Fragment>
    );

  }

