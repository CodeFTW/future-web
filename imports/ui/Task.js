import React from 'react';
import { Checkbox } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui';

const handleChange = (_id) => () => {

  console.log(_id);
};

export const Task = ({ item }) => (
  <ListItem>
    <Checkbox
      checked={item.done}
      onChange={handleChange(item._id)}
    />


    <ListItemText primary={item.description} secondary={item.details}/>
  </ListItem>
);
