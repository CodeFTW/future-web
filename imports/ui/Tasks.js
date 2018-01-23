import React from 'react';
import { List } from 'material-ui';
import { Task } from './Task';

export const Tasks = ({ data: { loading, tasks }, doneTask }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  if (tasks.length === 0) {
    return <div>no tasks available</div>;
  }

  return (
    <List>
      {tasks
        .map(item => <Task key={item._id} item={item} doneTask={doneTask} />)}
    </List>
  );
};
