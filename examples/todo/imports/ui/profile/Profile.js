import React, { Fragment } from 'react';
import { showAlert } from '@codeftw/future-web-ui-alert';
import { Button, TextField } from 'material-ui';
import { Save } from 'material-ui-icons';
import { updateAppTitle } from '../components/uis';

export class Profile extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    name: '',
    email: '',
  };

  componentWillReceiveProps(nextProps) {
    const { loggedUser } = nextProps;
    this.setState({
      _id: loggedUser._id,
      name: loggedUser.name,
      email: loggedUser.email,
    });
  }

  // eslint-disable-next-line no-undef
  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  // eslint-disable-next-line no-undef
  handleSubmitProfile = () => !!this.state.name.trim();

  // eslint-disable-next-line no-undef
  editProfileAndGo = () => {
    if (this.handleSubmitProfile()) {
      const { editProfile, history, client } = this.props;

      editProfile({
        variables: {
          user: {
            _id: this.state._id,
            name: this.state.name,
            email: this.state.email,
          },
        },
      })
        .then(() => {
          // TODO when we have the cache working correctly after an update we can remove this
          // https://github.com/CodeFTW/future-web/issues/34
          client.resetStore();
          showAlert('Profile updated', this.props);
          history.push('/profile');
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    } else {
      showAlert('The field Name is required', this.props);
    }
  };

  render() {
    return (
      <Fragment>
        {updateAppTitle(`Edit Profile ${this.state.name}`)}
        <form className="form">
          <TextField
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.onInputChange}
            fullWidth
            disabled
          />
          <TextField
            name="name"
            label="Name"
            value={this.state.name}
            onChange={this.onInputChange}
            fullWidth
            required
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