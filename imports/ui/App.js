import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu';
import Routes from './Routes';

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
            <div>
                <AppBar title="Meteor React Latest" onLeftIconButtonTouchTap={this.toggleMenu} />
                <Menu open={this.state.open} onSelectMenu={this.closeMenu} />
                <Routes/>
            </div>
        );
    }
}