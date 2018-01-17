import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddTaskContainer from '/imports/containers/AddTaskContainer';
import { TasksContainer } from '../containers/TasksContainer';

export default (Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/tasks" render={() => <TasksContainer />} />
    <Route path="/add" render={() => <AddTaskContainer />} />
  </Switch>
));
