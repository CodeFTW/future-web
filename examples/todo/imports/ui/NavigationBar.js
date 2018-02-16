import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation';
import { Add, ViewList } from 'material-ui-icons';
import { Paper } from 'material-ui';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

const NavigationBarComponent = props => {
  const { classes, location } = props;
  const { pathname } = location;

  return (
    <Paper elevation={10}>
      <BottomNavigation
        value={pathname === '/' ? 0 : 1}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Tasks"
          icon={<ViewList />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Add"
          icon={<Add />}
          component={Link}
          to="/add"
        />
      </BottomNavigation>
    </Paper>
  );
};

export const NavigationBar = compose(withStyles(styles), withRouter)(
  NavigationBarComponent
);
