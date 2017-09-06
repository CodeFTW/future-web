import React from 'react';

import Task from './Task';

export default Tasks = ({data:{loading, tasks}}) => {
    if(loading) {
        return <div>loading...</div>
    }
    return (
        <div>
            {tasks.map(item => <Task key={item._id} item={item}/>)}
        </div>
    );
}