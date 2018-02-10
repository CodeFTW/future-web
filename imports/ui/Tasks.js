import { Meteor } from 'meteor/meteor';
import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { List, Button, TextField } from 'material-ui';
import { Task } from './Task';
import { getLoggedUserContext } from '../user/userContext';

class TasksComponent extends React.Component {
  // eslint-disable-next-line no-undef
  state = { search: '' };

  // eslint-disable-next-line no-undef
  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value.toLowerCase() });

  render() {
    const {
      data: { loading, tasks },
      loggedUser,
      history,
      client,
      ...rest
    } = this.props;

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
            client.resetStore().then(() => history.push('/login'));
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
        <div>{logoutButton}</div>
        <div>
          <TextField name="search" onChange={this.onInputChange} />
        </div>
        <List>
          {tasks
            .filter(task =>
              task.description.toLowerCase().includes(this.state.search)
            )
            .map(item => <Task key={item._id} item={item} {...rest} />)}
        </List>
      </Fragment>
    );
  }
}

const enhance = compose(withRouter, getLoggedUserContext());
export const Tasks = compose(enhance)(TasksComponent);
