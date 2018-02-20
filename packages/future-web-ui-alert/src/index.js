import React from 'react';
import { Snackbar } from 'material-ui';

export class Alert extends React.Component {
  state = {
    open: true,
  };

  render() {
    const { message, autoHideDuration = 3000 } = this.props;
    const { open } = this.state;

    return (
      <Snackbar
        message={message}
        autoHideDuration={autoHideDuration}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        onClose={() => this.setState({ open: false })}
      />
    );
  }
}
