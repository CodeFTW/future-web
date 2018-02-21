import React from 'react';
import { Snackbar } from 'material-ui';
import Cookies from 'js-cookie';

export const showMessage = (message, { setShowAlert }) => {
  console.log('show');
  Cookies.set('message', message);
  setShowAlert(true);
};

const getMessage = () => {
  console.log('get');
  return Cookies.get('message');
};

const closer = ({ setShowAlert }) => () => {
  console.log('closer');
  Cookies.remove('message');
  setShowAlert(false);
};

export const Alert = props => {
  console.log(props);
  const { autoHideDuration = 3000, showAlert } = props;
  const message = getMessage();
  const hasMessage = !!message;

  if (!hasMessage) {
    return null;
  }

  console.log({ hasMessage });

  return (
    <Snackbar
      message={message}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={showAlert}
      onClose={closer(props)}
    />
  );
};
