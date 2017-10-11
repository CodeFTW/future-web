import { render } from 'react-dom';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import TasksContainer from '/imports/containers/TasksContainer';

export default Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/task" render={() => <TasksContainer/>}/>
            </Switch>
        </div>
    );
}