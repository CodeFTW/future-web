import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, TextField, Paper } from 'material-ui';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Error } from '../error/error';

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
    error: false,
    messageError: '',
  };

  // eslint-disable-next-line no-undef
  onSubmitLoginWithEmail = e => {
    e.preventDefault();
    Meteor.loginWithPassword(
      this.state.emailLogin,
      this.state.passwordLogin,
      error => {
        // TODO handle it better
        if (error) {
          this.setState({ error: true });
          if (error.error === 403) {
            this.setState({
              messageError: 'The email or password is wrong',
            });
          } else {
            this.setState({
              messageError: 'No data was entered',
            });
          }
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
      },
      error => {
        if (error) {
          this.setState({
            error: true,
            messageError: 'No data was entered',
          });
        }
      }
    );
  };

  // eslint-disable-next-line no-undef
  handleInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  // eslint-disable-next-line no-undef
  callBack = () => {
    this.setState({
      error: false,
    });
  };

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
        <Error
          error={this.state.error}
          message={this.state.messageError}
          onCallBack={this.callBack}
        />
      </div>
    );
  }
}
