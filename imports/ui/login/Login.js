import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, TextField } from 'material-ui';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

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
    Meteor.loginWithPassword(
      this.state.emailLogin,
      this.state.passwordLogin,
      error => {
        // TODO handle it better
        if (!error) {
          this.props.login({ variables: { _id: Meteor.userId() } });
        }
        // eslint-disable-next-line no-console
        console.log(error);
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
        if (!error) {
          this.props.login({ variables: { _id: Meteor.userId() } });
        }
        // eslint-disable-next-line no-console
        console.log(error);
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
      <div>
        {/* Form for login */}
        <h2>Sing In</h2>
        <div className="paper-style">
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
        </div>
        {/* Form for Subscribe */}
        <h2>Create Account</h2>
        <div className="paper-style">
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
        </div>
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
