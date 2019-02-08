import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { NavigationBar } from './NavigationBar';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

export const NavigationBarContainer = compose(withStyles(styles), withRouter)(
  NavigationBar
);
