import React from 'react';

export const Image = ({pathImage, text}) => {

  return (
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
};
