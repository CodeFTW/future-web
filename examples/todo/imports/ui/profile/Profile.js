import React, { Fragment } from 'react';
import { showAlert } from '@codeftw/future-web-ui-alert';
import { Button, TextField } from 'material-ui';
import { Save } from 'material-ui-icons';
import { updateAppTitle } from '../components/uis';

export class Profile extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    firstName: this.props.loggedUser.firstName,
    lastName: this.props.loggedUser.lastName,
    age: this.props.loggedUser.age,
  };

  // eslint-disable-next-line no-undef
  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  // eslint-disable-next-line no-undef
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

  render() {
    return (
      <Fragment>
        {updateAppTitle(`Edit Profile ${this.state.firstName}`)}
        <form className="form">
          <TextField
            label="Email"
            value={this.props.loggedUser.email}
            fullWidth
            disabled
          />
          <TextField
            name="firstName"
            label="First Name"
            value={this.state.firstName}
            onChange={this.onInputChange}
            fullWidth
            required
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={this.state.lastName}
            onChange={this.onInputChange}
            fullWidth
            required
          />
          <TextField
            name="age"
            type="number"
            label="Age"
            value={this.state.age}
            onChange={this.onInputChange}
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
}
