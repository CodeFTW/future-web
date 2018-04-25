import React, { Fragment } from 'react';
import { Button } from 'material-ui';
import GitHub from 'react-icons/lib/go/mark-github';
import Globe from 'react-icons/lib/go/globe';

export const Home = props => {
  const { history, loggedUser } = props;
  return (
    <div className="home-content">
      <div className="img-content">
        <img className="img-home" src="img/future-web.png" alt="Logo" />
      </div>
      <div className="home-buttons">
        <Fragment>
          <a
            href="http://codeftw.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={65} style={{ margin: '10px' }} />
          </a>

          <a
            href="https://github.com/CodeFTW/future-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub size={56} style={{ margin: '10px' }} />
          </a>
        </Fragment>
        {!loggedUser && (
          <Button
            className="form-action"
            color="primary"
            variant="flat"
            onClick={() => history.push('login')}
            style={{ margin: '10px' }}
          >
            Login
          </Button>
        )}
      </div>
      <div className="home-footer">
        <p style={{ fontSize: '0.8em', color: 'grey' }}>Powered by CodeFTW</p>
      </div>
    </div>
  );
};
