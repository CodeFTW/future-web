import React from 'react';
import { Checkbox } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui';

export const Task = ({ item }) => (
  <ListItem>
    <Checkbox />
    <ListItemText primary={item.description} secondary={item.details} />
  </ListItem>
);
