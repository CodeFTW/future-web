import React from 'react';
import { Button, TextField } from 'material-ui';
import { Add } from 'material-ui-icons';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';

export class AddTask extends React.Component {
  state = {
    description: '',
    details: '',
    done: false,
    doDate: new Date(),
  };

  handleDoDateChange = doDate => {
    this.setState({ doDate })
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
      doDate: data.task.doDate || new Date(),
    });
  }

  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  addTaskAndGo = () => {
    const { router: { history } } = this.context;
    const { addTask } = this.props;
    addTask({
      variables: {
        task: {
          ...this.state
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
          value={this.state.doDate}
          returnMoment={false}
          onChange={this.handleDoDateChange}
          minDate={new Date()}
        />
        <Button
          className="form-action"
          raised
          color="primary"
          onClick={this.addTaskAndGo}
        >
          <Add /> Task
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
