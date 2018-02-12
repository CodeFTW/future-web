import React, { Fragment } from 'react';
import { Button, TextField } from 'material-ui';
import { Save } from 'material-ui-icons';
import { DatePicker } from 'material-ui-pickers';
import { Error } from './error/error';

export class AddTask extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    description: '',
    details: '',
    done: false,
    dueDate: new Date(),
    error: false,
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
    this.setState({ dueDate });
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
          history.push('/');
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    } else {
      this.setState({ error: true });
    }
  };

  // eslint-disable-next-line no-undef
  callBack = () => {
    this.setState({
      error: false,
    });
  };

  render() {
    return (
      <Fragment>
        <form className="form">
          <TextField
            name="description"
            label="Description"
            value={this.state.description}
            onChange={this.onInputChange}
            fullWidth
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
            returnMoment={false}
            onChange={this.handleDueDateChange}
            minDate={new Date()}
          />
          <Button
            className="form-action"
            raised
            color="primary"
            onClick={this.addTaskAndGo}
          >
            <Save />
          </Button>
        </form>
        <Error
          error={this.state.error}
          message="The field Description is required"
          onCallBack={this.callBack}
        />
      </Fragment>
    );
  }
}
