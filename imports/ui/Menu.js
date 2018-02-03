import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import { List as ListIcon } from 'material-ui-icons';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

export const Menu = ({ open, onSelectMenu }) => (
  <Drawer open={open} onClose={onSelectMenu}>
    <List>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ListItem button onClick={onSelectMenu}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
      </Link>
    </List>
  </Drawer>
);
