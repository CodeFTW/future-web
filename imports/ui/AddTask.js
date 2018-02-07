import React from 'react';
import { Button, TextField } from 'material-ui';
import { Save } from 'material-ui-icons';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';

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
    this.setState({ dueDate });
  };

  // eslint-disable-next-line no-undef
  addTaskAndGo = () => {
    const { router: { history } } = this.context;
    const { addTask } = this.props;
    addTask({
      variables: {
        task: {
          ...this.state,
        },
      },
    }).then(({ data: { addTask: { _id } } }) => {
      if (_id) {
        history.push('/');
      }
    });
  };

  render() {
    return (
      <form className="form">
        <TextField
          name="description"
          label="Description"
          value={this.state.description}
          onChange={this.onInputChange}
          fullWidth
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
    );
  }
}

AddTask.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};
