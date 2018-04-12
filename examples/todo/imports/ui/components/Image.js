import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({pathImage, text}) => (
    <div className="img-container">
      <div className="img-content-no-task">
        <div className="img-no-task">
          <img className="img-image" src={pathImage} />
          <p className="nothing-todo">{text}</p>
        </div>
        <div >
        </div>
      </div>
    </div>
  );

  Image.propTypes = {
    pathImage: PropTypes.string.isRequired 
  }
