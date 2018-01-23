import React from 'react';
import { List } from 'material-ui';
import { Task } from './Task';

export const Tasks = ({ data: { loading, tasks }, flipTask }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  if (tasks.length === 0) {
    return <div>no tasks available</div>;
  }

  return (
    <List>
      {tasks.map(item => (
        <Task key={item._id} item={item} flipTask={flipTask} />
      ))}
    </List>
  );
};
