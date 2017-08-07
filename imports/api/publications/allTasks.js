import { Meteor } from 'meteor/meteor';

import TasksCollection from '/imports/collections/Tasks';

Meteor.publish('allTasks', () => {
   return TasksCollection.find();
});