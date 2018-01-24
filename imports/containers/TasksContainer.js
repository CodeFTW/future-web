import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { Tasks } from '/imports/ui/Tasks';

export const doneTaskMutation = graphql(
  gql`
    mutation doneTask($_id: ID!) {
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

const data = graphql(gql`
  query Tasks {
    tasks {
      _id
      description
      details
    }
  }
`);



export const TasksContainer = data(Tasks);
