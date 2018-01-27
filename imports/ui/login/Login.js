import React from 'react';
import { Button } from 'material-ui';
import { Meteor } from 'meteor/meteor';

const loginFacebook = () => {
  Meteor.loginWithFacebook({
    loginStyle: 'redirect',
    requestPermissions: ['public_profile', 'email'],
  });
};

export const Login = () => (
  <Button
    className="form-action"
    raised
    color="primary"
    onClick={() => loginFacebook()}
  >
    Login com Facebook
  </Button>
);
