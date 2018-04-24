import React, { Fragment } from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from 'material-ui';
import {InputAdornment } from 'material-ui/Input';
import { DatePicker } from 'material-ui-pickers';
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
            style={{ padding: '5px', marginTop: '10px'}}
            type="text"
            name="firstName"
            label="First Name"
            value={firstName || ''}
            onChange={onInputChange}
            required
          />
          <TextField
            style={{ padding: '5px', marginTop: '10px'}}
            name="lastName"
            label="Last Name"
            type="text"
            value={lastName || ''}
            onChange={onInputChange}
            required
          />
        </div>
        
        <div className="profile-container-radio-date">
          <div>
            <InputAdornment className="profile-font-gender" position="start">Gender</InputAdornment>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={onInputChange}      
              row
              className="profile-radio-group"    
            >
              
                <FormControlLabel  value="female" control={<Radio />} label="Female" />
                <FormControlLabel  value="male" control={<Radio />} label="Male" />
              
            </RadioGroup>
          </div>
          
          <DatePicker
            label="Birthday"
            name="birthday"
            //value={birthday}
            mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
            format="DD/MM/YYYY"
            keyboard
            disableFuture
            onChange={onInputChange}
          />
       </div>

        <Button
          className="form-action"
          variant="raised"
          color="primary"
          onClick={editProfileAndGo}
        >
          <Save />
        </Button>
      </form>
    </Fragment>
  );
};
