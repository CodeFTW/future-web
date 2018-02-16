import PropTypes from 'prop-types';
import { withContext, compose } from 'recompose';
import { App } from '../ui/App';
import { loggedUserQuery } from '../core/user/userQueries';
import { displayLoadingState } from '../ui/components/displayLoadingState';

const data = loggedUserQuery;

const enhance = withContext(
  {
    loggedUser: PropTypes.object,
  },
  ({ data: { loggedUser } }) => ({ loggedUser })
);
export const AppContainer = compose(data, displayLoadingState, enhance)(App);
