import { TasksCollection } from '../collections/Tasks';
import { resolverDateTime } from '../utils/dates';
import { Users } from '../collections/UsersCollection';

export const resolvers = {
  Query: {
    async tasks(root, args, { userId }) {
      return TasksCollection.find({ userId }, { sort: { dueDate: 1 } }).fetch();
    },
    async task(root, { _id }) {
      return TasksCollection.findOne(_id);
    },
    async loggedUser(root, args, { userId }) {
      if (!userId) {
        return null;
      }
      return Users.findOne(userId);
    },
  },
  Mutation: {
    async addTask(root, { task }, { userId }) {
      task.dueDate.setHours(0, 0, 0, 0);
      if (task._id) {
        TasksCollection.update(task._id, { $set: { ...task } });
        return TasksCollection.findOne(task._id);
      }
      return TasksCollection.findOne(
        TasksCollection.insert({ userId, ...task })
      );
    },
    async flipTask(root, { _id }) {
      const task = TasksCollection.findOne(_id);
      TasksCollection.update({ _id }, { $set: { done: !task.done } });
      return TasksCollection.findOne(_id);
    },
    async removeTask(root, { _id }) {
      TasksCollection.remove(_id);
      // TODO check how to return a boolean in GraphQL
      return { _id };
    },
  },
  DateTime: resolverDateTime,
};
