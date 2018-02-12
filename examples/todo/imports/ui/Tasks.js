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

  // eslint-disable-next-line no-undef
  handleRemoveTasksChecked = ({ removeTasksChecked, client }) => () => {
    removeTasksChecked().then(() => {
      client.resetStore();
    });
  };

  render() {
    const {
      data: { loading, tasks },
      loggedUser,
      history,
      client,
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
          <TextField
            placeholder="Search"
            fullWidth
            name="search"
            onChange={this.onInputChange}
          />
          <Button
            className="form-action"
            color="primary"
            onClick={this.handleRemoveTasksChecked({ ...this.props })}
          >
            Delete all tasks checked
          </Button>
        </div>
        <div className="block-tasks">
          <List>
            {tasks
              .filter(task =>
                task.description.toLowerCase().includes(this.state.search)
              )
              .map(item => <Task key={item._id} item={item} {...this.props} />)}
          </List>
        </div>
      </Fragment>
    );
  }
}

const enhance = compose(withRouter, getLoggedUserContext());
export const Tasks = compose(enhance)(TasksComponent);
