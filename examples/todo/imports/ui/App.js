import React, { Fragment } from 'react';
import Reboot from 'material-ui/Reboot';
import { Alert } from '@codeftw/future-web-ui-alert';
import { MenuContainer } from './menu/MenuContainer';
import { Routes } from './Routes';
import { LoginContainer } from './login/LoginContainer';
import { NavigationBarContainer } from './navigation/NavigationBarContainer';
import { ToolbarComponent } from './menu/toolbar/ToolbarComponent';

export const App = props => (
  <div className="app">
    <Alert />

    {props.data.loggedUser ? (
      <Fragment>
        <Reboot />
        <ToolbarComponent />
        <MenuContainer />
        <div className="content" style={{ marginTop: 60 }}>
          <Routes />
        </div>
        <NavigationBarContainer />
      </Fragment>
    ) : (
      <LoginContainer />
    )}
  </div>
);
