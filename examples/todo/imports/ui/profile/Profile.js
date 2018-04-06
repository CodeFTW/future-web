import React, { Fragment } from 'react';
import { Button, TextField } from 'material-ui';
import { Save } from 'material-ui-icons';
import { updateAppTitle } from '../components/uis';

  

export const Profile = ({editProfileState, onInputChange, editProfileAndGo}) => {

   const { email, firstName, lastName, age } = editProfileState; 
   
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
            onClick={editProfileAndGo}
          >
            <Save />
          </Button>
        </form>
      </Fragment>
    );

  }

