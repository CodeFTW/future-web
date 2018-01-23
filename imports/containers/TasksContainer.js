import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { Tasks } from '/imports/ui/Tasks';

export const doneTaskMutation = graphql(
  gql`
    mutation flipTask($_id: ID!) {
      flipTask(_id: $_id) {
        _id
        description
        details
      }
    }
  `,
  {
    name: 'flipTask',
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
      done
    }
  }
`);

export const TasksContainer = compose(data, doneTaskMutation)(Tasks);
