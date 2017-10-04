import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import {ListItem} from 'material-ui/List';

export default Task = ({item}) => <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={item.description}
          secondaryText={item.details}
        />;