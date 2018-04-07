import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import { default as ListIcon } from 'material-ui-icons/List';
import { default as Person } from 'material-ui-icons/Person';
import { default as ExitToApp } from 'material-ui-icons/ExitToApp';
import { default as Home } from 'material-ui-icons/Home';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

export const Menu = ({ open, toggleMenu, client, history }) => (
  <Drawer open={open} onClose={toggleMenu(true)}>
    <List className="menu-list">
      <div>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <ListItem button onClick={toggleMenu(true)}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <ListItem button onClick={toggleMenu(true)}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItem button onClick={toggleMenu(true)}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>
        </Link>
      </div>

      <ListItem
        button
        onClick={() =>
          Meteor.logout(() => {
            client.resetStore().then(() => history.push('/home'));
            toggleMenu(true)();
          })
        }
      >
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  </Drawer>
);
