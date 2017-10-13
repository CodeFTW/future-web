import React from 'react';
import Task from './Task';
import List from 'material-ui/List';

export default Tasks = ({data:{loading, tasks}}) => {
    if(loading) {
        return <div>loading...</div>
    }
    return (
        <List>
            {tasks.map(item => <Task key={item._id} item={item}/>)}
        </List>
    );
}