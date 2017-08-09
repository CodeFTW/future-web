import React from 'react';

export default Task = ({item}) => <div>{item.description}</div>;

Task.propTypes = {
  item: PropTypes.object.isRequired,
};
