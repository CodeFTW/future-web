import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import { Add, ViewList } from 'material-ui-icons';
import { Paper } from 'material-ui';
import { browserHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

class NavigationBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { router: { history } } = this.context;

    return (
      <Paper elevation={10}>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationButton
            label="Tasks"
            icon={<ViewList />}
            onClick={() =>
              history.push({
                pathname: '/tasks',
              })
            }
          />
          <BottomNavigationButton
            label="Add"
            icon={<Add />}
            onClick={() =>
              history.push({
                pathname: '/add',
              })
            }
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

NavigationBar.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

export default withStyles(styles)(NavigationBar);
