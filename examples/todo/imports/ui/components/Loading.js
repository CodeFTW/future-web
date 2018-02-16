import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};
export const Loading = () => (
  <div className="loading-indicator">
    <CircularProgress size={50} style={style.refresh} />
  </div>
);
