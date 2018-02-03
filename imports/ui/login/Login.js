import React from 'react';
import { Button, TextField } from 'material-ui';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


const loginFacebook = () => {
  Meteor.loginWithFacebook({
    loginStyle: 'redirect',
    requestPermissions: ['public_profile', 'email'],
  });
};


export default class Login extends React.Component {
    state = {
        emailLogin: '',
        passwordLogin: '',
        emailSubscribe: '',
        passwordSubscribe: '',
    };

    handleInputLoginEmail = ({ target: { name, value } }) => (
        this.setState({ [name]: value })
    );

    handleInputLoginPassword = ({ target: { name, value } }) => (
        this.setState({ [name]: value })
    );

    handleInputSubscribeEmail = ({ target: { name, value } }) => (
        this.setState({ [name]: value })
    );

    handleInputSubscribePassword = ({ target: { name, value } }) => (
        this.setState({ [name]: value })
    );

    onSubmitLoginWithEmail = (e) => {
        e.preventDefault();
        Meteor.loginWithPassword(this.state.emailLogin, this.state.passwordLogin,
             error => {
                console.log(error);
             });
    };

    onSubmitSubscribeWithEmail = (e) => {
        e.preventDefault();
        Accounts.createUser({
            email: this.state.emailSubscribe,
            password: this.state.passwordSubscribe,
        }, error => {console.log(error)});

    };
  render() {
      return (
          <div>
              <Button
                  className="form-action"
                  raised
                  color="primary"
                  onClick={() => loginFacebook()}
              >
                  Login com Facebook
              </Button>
              {/* Form for login */}
              <form onSubmit={this.onSubmitLoginWithEmail}>
                  <TextField
                      name="emailLogin"
                      label="Login"
                      value={this.state.emailLogin}
                      onChange={this.handleInputLoginEmail}
                      type="email"
                      fullWidth
                  />
                  <TextField
                      name="passwordLogin"
                      label="Password"
                      value={this.state.passwordLogin}
                      onChange={this.handleInputLoginPassword}
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
              {/* Form for Subscribe */}
              <form onSubmit={this.onSubmitSubscribeWithEmail}>
                  <TextField
                      name="emailSubscribe"
                      label="Subscribe"
                      value={this.state.emailSubscribe}
                      onChange={this.handleInputSubscribeEmail}
                      type="email"
                      fullWidth
                  />
                  <TextField
                      name="passwordSubscribe"
                      label="Password"
                      value={this.state.passwordSubscribe}
                      onChange={this.handleInputSubscribePassword}
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
      );
  }
}
