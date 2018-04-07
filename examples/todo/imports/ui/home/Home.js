import React from 'react';
import { Button } from 'material-ui';

export const Home = props => {
  const { history, loggedUser } = props;
  return (
    <div>
      <h1>Future web</h1>
      {!loggedUser && (
        <Button
          className="form-action"
          color="primary"
          onClick={() => history.push('login')}
        >
          Login
        </Button>
      )}
    </div>
  );
};
