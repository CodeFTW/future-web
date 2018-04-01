import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, TextField, Paper } from 'material-ui';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { showAlert } from '@codeftw/future-web-ui-alert';

const loginFacebook = () => {
  Meteor.loginWithFacebook({
    loginStyle: 'redirect',
    requestPermissions: ['public_profile', 'email'],
  });
};

export class Login extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    emailLogin: '',
    passwordLogin: '',
    emailSubscribe: '',
    passwordSubscribe: '',
  };

  // eslint-disable-next-line no-undef
  onSubmitLoginWithEmail = e => {
    e.preventDefault();

    if (!this.state.emailLogin && !this.state.passwordLogin) {
      showAlert('No data was entered');
      return;
    }

    Meteor.loginWithPassword(
      this.state.emailLogin,
      this.state.passwordLogin,
      error => {
        // TODO handle it better
        if (error) {
          this.setState({ error: true });
          if (error.error === 403) {
            showAlert('The email or password is wrong');
          }
        } else {
          this.props.client.resetStore();
        }
      }
    );
  };

  // eslint-disable-next-line no-undef
  onSubmitSubscribeWithEmail = e => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.state.emailSubscribe,
        password: this.state.passwordSubscribe,
        profile: { firstName: '', lastName: '', age: 0 },
      },
      error => {
        if (error) {
          showAlert(error.reason);
        } else {
          this.props.client.resetStore();
        }
      }
    );
  };

  // eslint-disable-next-line no-undef
  handleInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const { data: { loggedUser } } = this.props;
    if (loggedUser) {
      return <Redirect to={'/'} />;
    }
    return (
      <div className="content login">
        <h2>Sing In</h2>
        <Paper elevation={5} className="login-box">
          <form onSubmit={this.onSubmitLoginWithEmail} className="form">
            <TextField
              name="emailLogin"
              label="Login"
              value={this.state.emailLogin}
              onChange={this.handleInput}
              type="email"
              fullWidth
            />
            <TextField
              name="passwordLogin"
              label="Password"
              value={this.state.passwordLogin}
              onChange={this.handleInput}
              type="password"
              fullWidth
            />
            <Button
              className="form-action"
              raised
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
        <h2>Create Account</h2>
        <Paper elevation={5} className="login-box">
          <form onSubmit={this.onSubmitSubscribeWithEmail} className="form">
            <TextField
              name="emailSubscribe"
              label="Subscribe"
              value={this.state.emailSubscribe}
              onChange={this.handleInput}
              type="email"
              fullWidth
            />
            <TextField
              name="passwordSubscribe"
              label="Password"
              value={this.state.passwordSubscribe}
              onChange={this.handleInput}
              type="password"
              fullWidth
            />
            <Button
              className="form-action"
              raised
              color="primary"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </Paper>
        <Button
          className="form-action"
          raised
          color="primary"
          onClick={() => loginFacebook()}
          fullWidth
        >
          Login com Facebook
        </Button>
      </div>
    );
  }
}
