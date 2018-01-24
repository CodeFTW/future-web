import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import { Menu } from './Menu';
import { NavigationBar } from './NavigationBar';
import { Routes } from './Routes';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleMenu = () => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  };

  closeMenu = () => {
    event.preventDefault();
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="app">
        <AppBar>
          <Toolbar>
            <IconButton
              color="contrast"
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
      </div>
    );
  }
}
