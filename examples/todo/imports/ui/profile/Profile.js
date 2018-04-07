import React, { Fragment } from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from 'material-ui';
import { Save } from 'material-ui-icons';
import { updateAppTitle } from '../components/uis';

export const Profile = ({
  editProfileState,
  onInputChange,
  editProfileAndGo,
}) => {
  const { email, firstName, lastName, age, gender } = editProfileState;

  return (
    <Fragment>
      {updateAppTitle('Edit Profile ')}
      <form className="form">
        <TextField
          name="email"
          label="Email"
          value={email}
          fullWidth
          disabled
        />
        <div className="person-name-subscribe">
          <TextField
            style={{ padding: '5px' }}
            type="text"
            name="firstName"
            label="First Name"
            value={firstName || ''}
            onChange={onInputChange}
            required
          />
          <TextField
            style={{ padding: '5px' }}
            name="lastName"
            label="Last Name"
            type="text"
            value={lastName || ''}
            onChange={onInputChange}
            required
          />
        </div>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={gender}
          onChange={onInputChange}
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <TextField
          name="age"
          type="number"
          label="Age"
          value={age || ''}
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
};
