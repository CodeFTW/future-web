import React from 'react';
import BottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation';
import { Add, ViewList } from 'material-ui-icons';
import { Paper } from 'material-ui';
import { Link } from 'react-router-dom';

export const NavigationBarComponent = ({ classes, location:{ pathname } }) => (
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
