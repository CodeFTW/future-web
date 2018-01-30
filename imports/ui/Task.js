import React from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui';
import { DeleteForever } from 'material-ui-icons';
import { indigo } from 'material-ui/colors/index';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import moment from 'moment';

const handleChange = (_id, flipTask) => () => {
  flipTask({ variables: { _id } }).then(({ data: { flipTask: { _id } } }) => {
    // TODO do something to alert the user that task is done
  });
};

const handleClick = (_id, history) => () => {
  history.push(`/edit/${_id}`);
};

const handleRemove = (_id, removeTask) => () => {
  removeTask({ variables: { _id } });
};

const enhance = compose(withRouter);
export const Task = enhance(({ item, history, removeTask, flipTask }) => (
  <ListItem>
    <Checkbox
      defaultChecked={item.done}
      checked={item.done}
      onChange={handleChange(item._id, flipTask)}
    />
    <ListItemText
      className={item.done ? 'task-done' : ''}
      primary={item.description}
      secondary={`${item.details} - ${moment(item.doDate).format("DD/MM/YYYY")}`}
      onClick={handleClick(item._id, history)}
    />

    <DeleteForever
      style={{ color: indigo[700] }}
      onClick={handleRemove(item._id, removeTask)}
    />
  </ListItem>
));

Task.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};
