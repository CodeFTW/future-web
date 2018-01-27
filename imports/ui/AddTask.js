import React from 'react';
import { Button, TextField } from 'material-ui';
import { Add } from 'material-ui-icons';
import PropTypes from 'prop-types';

export class AddTask extends React.Component {
  state = {
    description: '',
    details: '',
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
          _id: this.state._id,
          description: this.state.description,
          details: this.state.details,
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
