import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AddTask from '/imports/ui/AddTask';

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

export default (AddTaskContainer = addTaskMutation(AddTask));
