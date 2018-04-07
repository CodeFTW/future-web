import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TasksContainer } from '../containers/TasksContainer';
import { AddTaskContainer } from '../containers/AddTaskContainer';

import { LoginContainer } from './login/LoginContainer';
import { loggedUserQuery } from '../core/user/userQueries';
import { ProfileContainer } from './profile/ProfileContainer';
import { HomeContainer } from './home/HomeContainer';

const enhance = loggedUserQuery;
const PrivateRoute = enhance(
  ({ component: Component, data: { loggedUser }, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        loggedUser ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  )
);

export const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={TasksContainer} />
    <Route path="/home" component={HomeContainer} />
    <Route path="/login" component={LoginContainer} />
    <PrivateRoute path="/add" component={AddTaskContainer} />
    <PrivateRoute path="/edit/:_id" component={AddTaskContainer} />
    <PrivateRoute path="/profile" component={ProfileContainer} />
  </Switch>
);
