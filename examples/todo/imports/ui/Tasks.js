import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { List, Button, TextField } from 'material-ui';
import { Task } from './Task';
import { getLoggedUserContext } from '../user/userContext';
import { updateAppTitle } from './components/uis';

class TasksComponent extends React.Component {
  // eslint-disable-next-line no-undef
  state = { search: '' };

  // eslint-disable-next-line no-undef
  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value.toLowerCase() });

  // eslint-disable-next-line no-undef
  handleRemoveCheckedTasks = ({ removeCheckedTasks, client }) => () => {
    removeCheckedTasks().then(() => {
      client.resetStore();
    });
  };

  render() {
    const { data: { loading, tasks } } = this.props;
    if (loading) {
      return <div>loading...</div>;
    }

    if (tasks.length === 0) {
      return <div>no tasks available</div>;
    }

    return (
      <Fragment>
        {updateAppTitle('Tasks')}
        <div>
          <TextField
            placeholder="Search"
            fullWidth
            name="search"
            onChange={this.onInputChange}
            value={this.state.search}
          />
          <Button
            className="form-action"
            color="primary"
            onClick={this.handleRemoveCheckedTasks({ ...this.props })}
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
