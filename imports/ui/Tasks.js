import React, { PropTypes } from 'react';

import Task from './Task';

export default Tasks = ({items}) => (
    <div>
        {items.map(item => <Task key={item._id} item={item}/>)}
    </div>
);

Tasks.propTypes = {
  items: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
};
