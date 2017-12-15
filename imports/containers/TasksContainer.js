import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import Tasks from '/imports/ui/Tasks';

// TODO be possible to mark task as done
export const doneTaskMutation = graphql(
  gql`
    mutation doneTask(
      $_id: ID!
    ) {
      doneTask(_id: $_id) {
        _id
        description
        details
      }
    }
  `,
  {
    name: 'doneTask',
    options: {
      refetchQueries: ['Tasks'],
    },
  }
);


export default TasksContainer = graphql(gql`
  query Tasks {
    tasks {
        _id
        description
        details
    }
  }
`)(Tasks);