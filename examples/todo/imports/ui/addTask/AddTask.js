import React, { Fragment } from 'react';
import { showAlert } from '@codeftw/future-web-ui-alert';
import { Button, TextField } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import { DatePicker } from 'material-ui-pickers';
import { updateAppTitle } from '../components/uis';

export class AddTask extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    description: '',
    details: '',
    done: false,
    dueDate: new Date(),
  };

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (!data || data.loading) {
      return;
    }
    this.setState({
      _id: data.task._id || null,
      description: data.task.description || '',
      details: data.task.details || '',
      dueDate: data.task.dueDate || new Date(),
    });
  }

  // eslint-disable-next-line no-undef
  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  // eslint-disable-next-line no-undef
  handleDueDateChange = dueDate => {
   
   try {
     this.setState({ dueDate: dueDate._d.getTime() });
    
   } catch (error) {
    this.setState({ dueDate });
   }
   
  };

  // eslint-disable-next-line no-undef
  handleSubmitTaks = () => !!this.state.description.trim();

  // eslint-disable-next-line no-undef
  addTaskAndGo = () => {
    if (this.handleSubmitTaks()) {
      const { addTask, history, client } = this.props;

      addTask({
        variables: {
          task: {
            _id: this.state._id,
            description: this.state.description,
            details: this.state.details,
            dueDate: this.state.dueDate,
            done: this.state.done,
          },
        },
      })
        .then(() => {
          // TODO when we have the cache working correctly after an update we can remove this
          // https://github.com/CodeFTW/meteor-react-latest/issues/34
          client.resetStore();
          showAlert('Task added');
          history.push('/');
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    } else {
      showAlert('The field Description is required');
    }
  };

  render() {
    return (
      <Fragment>
        {updateAppTitle(
          this.state.description
            ? `${this.state._id ? 'Editing' : 'Adding'} the task ${
                this.state.description
              }`
            : 'Add Task'
        )}
        <form className="form">
          <TextField
            name="description"
            label="Description"
            value={this.state.description}
            onChange={this.onInputChange}
            fullWidth
            autoFocus
            required
          />
          <TextField
            name="details"
            label="Details"
            value={this.state.details}
            onChange={this.onInputChange}
            fullWidth
          />
          <DatePicker
            value={this.state.dueDate}
            onChange={this.handleDueDateChange}
            mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
            format="DD/MM/YYYY"
            keyboard
            disablePast
          />
          <Button
            className="form-action"
            variant="contained"
            color="primary"
            onClick={this.addTaskAndGo}
          >
            <Save />
          </Button>
        </form>
      </Fragment>
    );
  }
}
