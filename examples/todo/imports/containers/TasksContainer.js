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
  }
);
export const removeTasksChecked = graphql(
  gql`
    mutation removeTasksChecked {
      removeTasksChecked {
        _id
      }
    }
  `,
  {
    name: 'removeTasksChecked',
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
  removeTasksChecked,
  withApollo
)(Tasks);
