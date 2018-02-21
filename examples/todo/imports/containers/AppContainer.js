import PropTypes from 'prop-types';
import { withContext, withState, compose, getContext } from 'recompose';
import { App } from '../ui/App';
import { loggedUserQuery } from '../core/user/userQueries';
import { displayLoadingState } from '../ui/components/displayLoadingState';

const data = loggedUserQuery;

const enhance = compose(
  withState('appState', 'setAppState', { open: false, showAlert: false }),
  withContext(
    {
      loggedUser: PropTypes.object,
      setShowAlert: PropTypes.func,
    },
    ({ data: { loggedUser }, appState, setAppState }) => ({
      loggedUser,
      setShowAlert: (showAlert) => {
        setAppState({ ...appState, showAlert });
      },
    })
  ),
  getContext({
    setShowAlert: PropTypes.func,
  })
);
export const AppContainer = compose(data, displayLoadingState, enhance)(App);
