import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Menu from './Menu';
import Routes from './Routes';
import NavigationBar from './NavigationBar';

export default class App extends React.Component {

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
            [
                <AppBar key="appBar">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu" onClick={this.toggleMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Typography type="headline" color="inherit">
                            Meteor React Latest
                        </Typography>
                    </Toolbar>
                </AppBar>,
                <Menu key="menu" open={this.state.open} onSelectMenu={this.closeMenu} />,
                <div key="routes" style={{marginTop:60}}><Routes/></div>,
                <NavigationBar key="navBar"/>
            ]
        );
    }
}