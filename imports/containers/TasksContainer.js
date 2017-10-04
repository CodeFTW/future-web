import {graphql} from 'react-apollo';
import {createContainer} from 'meteor/react-meteor-data';
import gql from 'graphql-tag';

import Tasks from '/imports/ui/Tasks';

export default TasksContainer = graphql(gql`
  query Tasks {
    tasks {
        _id
        description
        details
    }
  }
`)(Tasks);