import React from 'react';

import AppBar from 'material-ui/AppBar';

import TasksContainer from '/imports/containers/TasksContainer';

export default App => (
    <div>

    <AppBar title="Meteor React Latest" />
        <div>
            <TasksContainer/>
        </div>
    </div>
);