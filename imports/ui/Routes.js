import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TasksContainer } from '../containers/TasksContainer';
import { AddTaskContainer } from '../containers/AddTaskContainer';
import { Login } from './login/Login';
import { getLoggedUserContext } from '../user/userContext';

const enhance = getLoggedUserContext();
export const Routes = enhance(({loggedUser}) => (
  <Switch>
    <Route exact path="/" component={TasksContainer} />
    <Route path="/login" component={Login} />
    <Route path="/add" component={AddTaskContainer} />
    <Route path="/edit/:_id" component={AddTaskContainer} />
  </Switch>
));
