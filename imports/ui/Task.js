import React from 'react';
import { Checkbox } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui';


const handleChange = (_id, flipTask) => () => {
  flipTask({variables: {_id}}).then(({ data: { flipTask: { _id } } }) => {
    // TODO do something to alert the user that task is done
    console.log(_id);
  });
};

export const Task = ({ item, flipTask }) => (
  <ListItem>
    <Checkbox
      checked={item.done}
      onChange={handleChange(item._id, flipTask)}
    />
    <ListItemText primary={item.description} secondary={item.details}/>
  </ListItem>
);
