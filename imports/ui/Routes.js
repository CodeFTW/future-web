import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import TasksContainer from '/imports/containers/TasksContainer';
import AddTaskContainer  from '/imports/containers/AddTaskContainer';

export default Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/tasks" render={() => <TasksContainer/>}/>
            <Route path="/add" render={() => <AddTaskContainer />}/>
        </Switch>
    );
}