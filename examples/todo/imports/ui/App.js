import React, { Fragment } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { Alert } from '@codeftw/future-web-ui-alert';
import { MenuContainer } from './menu/MenuContainer';
import { Routes } from './routes/Routes';
import { NavigationBarContainer } from './navigation/NavigationBarContainer';
import { ToolbarComponent } from './menu/toolbar/ToolbarComponent';

export const App = props => (
  <div className="app">
    <Alert />
    {props.data.loggedUser && (
      <Fragment>
        <CssBaseline />
        <ToolbarComponent />
        <MenuContainer />
      </Fragment>
    )}
    <div className="content" style={{ marginTop: 60 }}>
      <Routes />
    </div>
    {props.data.loggedUser &&
      props.history.location.pathname !== '/home' && <NavigationBarContainer />}
  </div>
);
