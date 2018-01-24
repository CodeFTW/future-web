import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TasksContainer } from '../containers/TasksContainer';
import { AddTaskContainer } from '../containers/AddTaskContainer';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={TasksContainer} />
    <Route path="/add" component={AddTaskContainer} />
    <Route path="/edit/:_id" component={AddTaskContainer} />
  </Switch>
);
