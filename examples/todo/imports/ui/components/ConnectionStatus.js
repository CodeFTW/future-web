import React from 'react';
import { NotInterested} from '@material-ui/icons';

export const ConnectionStatus = ({ offline }) => {
  if (offline) {
    return (
      <div className="offline">
        <NotInterested color="secondary" />
      </div>
    );
  }

  return null;
};
