import { Meteor } from 'meteor/meteor';
import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { List, Button } from 'material-ui';
import { Task } from './Task';
import { getLoggedUserContext } from '../user/userContext';

const enhance = compose(withRouter, getLoggedUserContext());
export const Tasks = enhance(
  ({ data: { loading, tasks }, loggedUser, history, logout, ...rest }) => {
    if (loading) {
      return <div>loading...</div>;
    }

    const logoutButton = loggedUser ? (
      <Button
        className="form-action"
        raised
        color="primary"
        onClick={() =>
          Meteor.logout(() => {
            // TODO How create a mutation without parameters
            logout({ variables: { _id: 'Generic Id' } });
          })
        }
      >
        Logout
      </Button>
    ) : null;

    if (tasks.length === 0) {
      return <div>{logoutButton} no tasks available</div>;
    }

    return (
      <Fragment>
        {logoutButton}
        <List>
          {tasks.map(item => <Task key={item._id} item={item} {...rest} />)}
        </List>
      </Fragment>
    );
  }
);
