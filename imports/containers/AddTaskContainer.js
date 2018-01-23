import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AddTask from '/imports/ui/AddTask';
import { compose } from 'recompose';

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
    }
  }
`;

const data = graphql(taskQuery, {
  skip: ownProps => !ownProps.match.params._id,
  options: ownProps => ({ variables: { taskId: ownProps.match.params._id } }),
});

export const AddTaskContainer = compose(addTaskMutation, data)(AddTask);
