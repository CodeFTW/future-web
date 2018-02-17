import React from 'react';
import { Snackbar } from 'material-ui';

export const Alert = ({message}) => {
  return (

    <Snackbar
      message={message}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={true}
    />
  );
};