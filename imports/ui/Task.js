import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { ListItem, ListItemText } from 'material-ui/List'

export default Task = ({ item }) =>
  <ListItem>
    <Checkbox />
    <ListItemText primary={item.description} secondary={item.details} />
  </ListItem>
;