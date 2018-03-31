import { resolverDateTime } from '@codeftw/future-web-graphql-date-time-resolver';
import { TasksCollection } from '../collections/TasksCollection';
import { Users } from '../collections/UsersCollection';

export const resolvers = {
  Query: {
    async tasks(root, args, { userId }) {
      return TasksCollection.findByUserId(userId);
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
      return TasksCollection.add(task, userId);
    },
    async flipTask(root, { _id }) {
      return TasksCollection.flip(_id);
    },
    async removeTask(root, { _id }) {
      TasksCollection.remove(_id);
      // TODO check how to return a boolean in GraphQL
      return { _id };
    },
    async removeCheckedTasks() {
      TasksCollection.removeChecked();
    },
    async editProfile(root, { user }, { userId }) {
      Users.update(user._id, { $set: { ...user } });
      return Users.findOne(userId);
    },
  },
  DateTime: resolverDateTime,
};