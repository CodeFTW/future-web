import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import SettingsIcon from 'material-ui-icons/Settings';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import { browserHistory } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
};

class NavigationBar extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}>
          <BottomNavigationButton label="Shopping cart" icon={<ShoppingCartIcon />} />
          <BottomNavigationButton label="Settings" icon={<SettingsIcon />}/>
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(NavigationBar);