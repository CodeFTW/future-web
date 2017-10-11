import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <Drawer docked={false} open={this.props.open} onRequestChange={this.props.onSelectMenu}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={this.props.onSelectMenu} >
                        Home
                    </MenuItem>
                </Link>
                <Link to='/task' style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={this.props.onSelectMenu}>
                        Tasks
                    </MenuItem>
                </Link>
            </Drawer>
        );
    }
}