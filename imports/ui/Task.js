import React from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

const handleChange = (_id, flipTask) => () => {
  flipTask({ variables: { _id } }).then(({ data: { flipTask: { _id } } }) => {
    // TODO do something to alert the user that task is done
    console.log(_id);
  });
};

const handleClick = (_id, history) => () => {
  console.log({ _id });
  history.push(`/edit/${_id}`);
};

const enhance = compose(withRouter);
export const Task = enhance(({ item, flipTask, history }) => (
  <ListItem>
    <Checkbox checked={item.done} onChange={handleChange(item._id, flipTask)} />
    <ListItemText
      primary={item.description}
      secondary={item.details}
      onClick={handleClick(item._id, history)}
    />
  </ListItem>
));

Task.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};
