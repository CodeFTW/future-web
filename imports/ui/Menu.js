import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import HomeIcon from 'material-ui-icons/Home';
import ListIcon from 'material-ui-icons/List';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

export default class Menu extends React.Component {
    render() {
        return (
            <Drawer open={this.props.open} onRequestClose={this.props.onSelectMenu}>
                <List>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <ListItem button onClick={this.props.onSelectMenu}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </Link>
                    <Link to='/task' style={{ textDecoration: 'none' }}>
                        <ListItem button onClick={this.props.onSelectMenu}>
                            <ListItemIcon>
                                <ListIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Tasks"/>
                        </ListItem>
                    </Link>
                </List>
          </Drawer>
        );
    }
}