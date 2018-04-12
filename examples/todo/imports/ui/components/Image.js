import React from 'react';

const Image = ({pathImage, text}) => (
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

  Image.propType = {
    pathImage: React.PropTypes.string.isRequired 
  }

  export const Image;
