import React, { Fragment } from 'react';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import { Menu } from './Menu';
import { NavigationBar } from './NavigationBar';
import { Routes } from './Routes';
import { LoginContainer } from './login/LoginContainer';

export class App extends React.Component {
  // eslint-disable-next-line no-undef
  state = { open: false };

  // eslint-disable-next-line no-undef
  toggleMenu = () => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  };

  // eslint-disable-next-line no-undef
  closeMenu = () => {
    event.preventDefault();
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="app">
        {this.props.data.loggedUser ? (
          <Fragment>
            <Reboot />
            <AppBar>
              <Toolbar>
                <IconButton
                  color="secondary"
                  aria-label="Menu"
                  onClick={this.toggleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Typography type="headline" color="inherit">
                  Meteor React Latest
                </Typography>
              </Toolbar>
            </AppBar>
            <Menu open={this.state.open} onSelectMenu={this.closeMenu} />
            <div className="content" style={{ marginTop: 60 }}>
              <Routes />
            </div>
            <NavigationBar />
          </Fragment>
        ) : (
          <LoginContainer />
        )}
      </div>
    );
  }
}
