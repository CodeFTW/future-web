import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { List, Button, TextField } from 'material-ui';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { DeleteForever } from 'material-ui-icons';
import { Task } from './Task';
import { getLoggedUserContext } from '../../user/userContext';
import { updateAppTitle } from './../components/uis';
import { Image } from '../components/Image';
import { Loading } from '../components/Loading';

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
    return ( <Loading /> );
    }

    if (tasks.length === 0) {
      return ( <Image pathImage="img/beach1.png" text="Nothing to do =)" /> );
    }

    return (
      <Fragment>
        {updateAppTitle('Tasks')}
        
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">Search</InputLabel>
          <Input
            id="input-with-icon-adornment"
            name="search"
            onChange={this.onInputChange}
            value={this.state.search}
          />
          </FormControl>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Button
            className="form-action"
            color="primary"
            onClick={this.handleRemoveCheckedTasks({ ...this.props })}
          >
            <DeleteForever />
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
