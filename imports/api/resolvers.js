import TasksCollection from '/imports/collections/Tasks';

export const resolvers = {
  Query: {
    async tasks(root, args, context) {
      return TasksCollection.find().fetch();
    },
  },
  Mutation: {
    async addTask(root, { task }) {
      return TasksCollection.findOne(
        TasksCollection.insert({ ...task, done: false })
      );
    },
    async flipTask(root, { _id }) {
      const task = TasksCollection.findOne(_id);
      TasksCollection.update({ _id }, { $set: { done: !task.done } });
      return TasksCollection.findOne(_id);
    },
  },
};
