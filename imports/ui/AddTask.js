import React from 'react';
import { Button, TextField } from 'material-ui';
import { Add } from 'material-ui-icons';
import PropTypes from 'prop-types';

export default class AddTask extends React.Component {
  state = {
    description: '',
    details: '',
  };

  onInputChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  addTaskAndGo = () => {
    const { router: { history } } = this.context;
    const { addTask } = this.props;
    addTask({ variables: { task: { description: this.state.description, details: this.state.details } } })
      .then(({ data: { addTask: { _id } } }) => {
        console.log({_id});
        if (_id) {
          history.push('/tasks');
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
        <Button className="form-action" raised color="primary" onClick={this.addTaskAndGo}>
          <Add/> Task
        </Button>
      </form>
    );
  }
};

AddTask.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};