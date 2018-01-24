import { Mongo } from 'meteor/mongo';

class TasksCollection extends Mongo.Collection {}

const collection = new TasksCollection('tasks');

export { collection as TasksCollection };
