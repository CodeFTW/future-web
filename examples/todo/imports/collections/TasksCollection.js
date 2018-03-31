import { Mongo } from 'meteor/mongo';

const tasksCollection = new Mongo.Collection('tasks');

Object.assign(tasksCollection, {
  findByUserId(userId) {
    return this.find({ userId }, { sort: { dueDate: 1 } }).fetch();
  },
  add(task, userId) {
    task.dueDate.setHours(0, 0, 0, 0);
    if (task._id) {
      this.update(task._id, { $set: { ...task } });
      return this.findOne(task._id);
    }
    return this.findOne(this.insert({ userId, ...task }));
  },
  flip(_id) {
    const task = this.findOne(_id);
    this.update({ _id }, { $set: { done: !task.done } });
    return task;
  },
  removeChecked() {
    const tasks = this.find({ done: true });
    tasks.forEach(task => this.remove({ _id: task._id }));
  },
});
export { tasksCollection as TasksCollection };
