import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import { Tasks } from '/imports/ui/Tasks';

export const flipTaskMutation = graphql(
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
export const removeTaskMutation = graphql(
  gql`
    mutation removeTask($_id: ID!) {
      removeTask(_id: $_id) {
        _id
      }
    }
  `,
  {
    name: 'removeTask',
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
      dueDate
    }
  }
`);

export const TasksContainer = compose(
  data,
  flipTaskMutation,
  removeTaskMutation,
  withApollo
)(Tasks);
