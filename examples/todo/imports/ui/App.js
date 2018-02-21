import { TunnelPlaceholder } from 'react-tunnels';
import React, { Fragment } from 'react';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import { Menu } from './Menu';
import { Routes } from './Routes';
import { LoginContainer } from './login/LoginContainer';
import { NavigationBarContainer } from './navigation/NavigationBarContainer';
import { Alert } from '@codeftw/future-web-ui-alert';

const toggleMenu = ({ appState, setAppState }) => () => {
  setAppState({ ...appState, open: !appState.open });
};

const closeMenu = ({ appState, setAppState }) => () => {
  setAppState({ ...appState, open: false });
};

export const App = props => {
  const { appState, setShowAlert } = props;

  console.log('app');
  return (
    <div className="app">
      <Alert showAlert={appState.showAlert} setShowAlert={setShowAlert}/>
      {props.data.loggedUser ? (
        <Fragment>
          <Reboot/>
          <AppBar>
            <Toolbar>
              <IconButton
                color="secondary"
                aria-label="Menu"
                onClick={toggleMenu(props)}
              >
                <MenuIcon/>
              </IconButton>
              <Typography type="headline" color="inherit">
                <TunnelPlaceholder id="app-title"/>
              </Typography>
            </Toolbar>
          </AppBar>
          <Menu open={appState.open} onSelectMenu={closeMenu(props)}/>
          <div className="content" style={{ marginTop: 60 }}>
            <Routes/>
          </div>
          <NavigationBarContainer/>
        </Fragment>
      ) : (
        <LoginContainer/>
      )}
    </div>
  );
};
