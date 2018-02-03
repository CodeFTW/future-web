import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TasksContainer } from '../containers/TasksContainer';
import { AddTaskContainer } from '../containers/AddTaskContainer';
import { UserContainer } from '../containers/UserContainer';

import { getLoggedUserContext } from '../user/userContext';

const enhance = getLoggedUserContext();
const PrivateRoute = enhance(
    ({ component: Component, loggedUser, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                loggedUser ? <Component {...props} /> : <Redirect to="/UserContainer" />
            }
        />
    )
);

export const Routes = enhance(({ loggedUser }) => (
  <Switch>
    <PrivateRoute exact path="/" component={TasksContainer} />
    <Route path="/UserContainer" component={UserContainer} />
    <PrivateRoute path="/add" component={AddTaskContainer} />
    <PrivateRoute path="/edit/:_id" component={AddTaskContainer} />
  </Switch>
));
