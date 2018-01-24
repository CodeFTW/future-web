import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import { Home, List as ListIcon } from 'material-ui-icons';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

export class Menu extends React.Component {
  render() {
    return (
      <Drawer open={this.props.open} onRequestClose={this.props.onSelectMenu}>
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button onClick={this.props.onSelectMenu}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button onClick={this.props.onSelectMenu}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    );
  }
}
