import TasksCollection from '/imports/collections/Tasks';

export const resolvers = {
  Query: {
    async tasks(root, args, context) {
      return TasksCollection.find().fetch();
    },
    async task(root, { _id }) {
      return TasksCollection.findOne(_id);
    },
  },
  Mutation: {
    async addTask(root, { task }) {
      if (task._id) {
        TasksCollection.update(task._id, { $set: { ...task } });
        return TasksCollection.findOne(task._id);
      }
        return TasksCollection.findOne(TasksCollection.insert({ ...task }));
    },
    async flipTask(root, { _id }) {
      const task = TasksCollection.findOne(_id);
      TasksCollection.update({ _id }, { $set: { done: !task.done } });
      return TasksCollection.findOne(_id);
    },
  },
};
