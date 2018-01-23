import React from 'react';
import { Checkbox } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui';


const handleChange = (_id, doneTask) => () => {
  doneTask({variables: {_id}}).then(({ data: { doneTask: { _id } } }) => {
    // TODO do something to alert the user that task is done
    console.log(_id);
  });
};

export const Task = ({ item, doneTask }) => (
  <ListItem>
    <Checkbox
      checked={item.done}
      onChange={handleChange(item._id, doneTask)}
    />
    <ListItemText primary={item.description} secondary={item.details}/>
  </ListItem>
);
