import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { AddTask } from '../ui/AddTask';

export const addTaskMutation = graphql(
  gql`
    mutation addTask($task: AddTaskInput!) {
      addTask(task: $task) {
        _id
        description
        details
      }
    }
  `,
  {
    name: 'addTask',
  }
);

const taskQuery = gql`
  query Task($taskId: ID!) {
    task(_id: $taskId) {
      _id
      description
      details
      dueDate
    }
  }
`;

const data = graphql(taskQuery, {
  skip: ownProps => !ownProps.match.params._id,
  options: ownProps => ({ variables: { taskId: ownProps.match.params._id } }),
});

export const AddTaskContainer = compose(
  addTaskMutation,
  data,
  withRouter,
  withApollo
)(AddTask);
