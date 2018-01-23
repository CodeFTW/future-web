import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import { TasksContainer } from '../containers/TasksContainer';
import { AddTaskContainer } from '../containers/AddTaskContainer';

export default (Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/tasks" component={TasksContainer} />
    <Route path="/add" component={AddTaskContainer} />
    <Route path="/edit/:_id" component={AddTaskContainer} />
  </Switch>
));
