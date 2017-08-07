import React from 'react';

import Tasks from '/imports/ui/Tasks';

export default TasksContainer = () => {
    const items = [
        {_id: '07dh9021h39128hd', description: 'Task 1',},
        {_id: 'jdlsijadas78437j', description: 'Task 2',},
        {_id: 'jdp93upn308nddsa', description: 'Task 3',},
        {_id: '903u2nra0dasds8s', description: 'Task 4',},
    ];
    return <Tasks items={items}/>;
}