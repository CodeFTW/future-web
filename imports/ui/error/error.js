import React, { Fragment } from 'react';
import './styles.css';

const test = onCallBack => () => {
  document.getElementById('errorComponent').classList.remove('show');
  onCallBack();
};

export const Error = ({ error, message, onCallBack }) => (
  <Fragment>
    {error && message && onCallBack ? (
      <span id="errorComponent" className="show">
        {message}
        <button onClick={test(onCallBack)} className="button">
          Ok! I got it
        </button>
      </span>
    ) : (
      <span id="errorComponent">
        {message}
        <button className="button">Ok! I got it</button>
      </span>
    )}
  </Fragment>
);
