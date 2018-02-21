import React from 'react';
import { Snackbar } from 'material-ui';
import PropTypes from 'prop-types';
import { withContext, withState, compose, getContext } from 'recompose';
import Cookies from 'js-cookie';

const COOKIE_KEY_MESSAGE = 'future-web-ui-alert-message';

export const showAlert = (message, { setShowAlert }) => {
  Cookies.set(COOKIE_KEY_MESSAGE, message);
  setShowAlert(true);
};

const getMessage = () => {
  return Cookies.get(COOKIE_KEY_MESSAGE);
};

const closer = ({ setShowAlert }) => () => {
  Cookies.remove(COOKIE_KEY_MESSAGE);
  setShowAlert(false);
};

export const withAlert = getContext({
  setShowAlert: PropTypes.func,
  openAlert: PropTypes.bool,
});

export const Alert = withAlert((props) => {
  const { autoHideDuration = 3000, openAlert } = props;
  const message = getMessage();
  const hasMessage = !!message;

  if (!hasMessage) {
    return null;
  }

  return (
    <Snackbar
      message={message}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={openAlert}
      onClose={closer(props)}
    />
  );
});

const enhance = compose(
  withState('alertState', 'setAlertState', { openAlert: false }),
  withContext(
    {
      openAlert: PropTypes.bool,
      setShowAlert: PropTypes.func,
    },
    ({ alertState, setAlertState }) => ({
      openAlert: alertState.openAlert,
      setShowAlert: (openAlert) => {
        setAlertState({ ...alertState, openAlert });
      },
    })
  ),
);

export const AlertProvider = enhance((props) => {
  return props.children;
});

