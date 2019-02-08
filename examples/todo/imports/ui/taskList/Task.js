import React from 'react';
import { withRouter } from 'react-router-dom';
import { ListItem, ListItemText, Checkbox, Paper } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import { indigo } from '@material-ui/core/colors/index';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import moment from 'moment';

const handleChange = ({ item: { _id }, flipTask, client }) => () => {
  flipTask({ variables: { _id } }).then(
    // eslint-disable-next-line no-unused-vars
    ({ data: { flipTask: { taskId } } }) => {
      // TODO do something to alert the user that task is done

      // TODO when we have the cache working correctly after an update we can remove this
      // https://github.com/CodeFTW/meteor-react-latest/issues/34
      client.resetStore();
    }
  );
};

const handleDays = date => {
  const days = moment(date)
    .startOf('day')
    .diff(moment().startOf('day'), 'days');
  if (days > 4) {
    return 4;
  }
  if (days < -1) {
    return -1;
  }

  return days;
};

const handleClick = (_id, history) => () => {
  history.push(`/edit/${_id}`);
};

const handleRemove = ({ item: { _id }, removeTask, client }) => () => {
  removeTask({ variables: { _id } }).then(() => {
    // TODO when we have the cache working correctly after an update we can remove this
    // https://github.com/CodeFTW/meteor-react-latest/issues/34
    client.resetStore();
  });
};

const enhance = compose(withRouter);
export const Task = enhance(props => {
  const { item, history } = props;
  return (
    <Paper className={`task-priority-${handleDays(item.dueDate)}`}>
      <ListItem>
        <Checkbox
          defaultChecked={item.done}
          checked={item.done}
          onChange={handleChange(props)}
        />
        <ListItemText
          className={item.done ? 'task-done' : ''}
          primary={item.description}
          secondary={`${item.details} - ${moment(item.dueDate).format(
            'DD/MM/YYYY'
          )}`}
          onClick={handleClick(item._id, history)}
        />

        <DeleteForever
          style={{ color: indigo[700] }}
          onClick={handleRemove(props)}
        />
      </ListItem>
    </Paper>
  );
});

Task.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};
