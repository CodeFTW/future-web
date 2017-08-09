import { Meteor } from 'meteor/meteor';

import '/imports/api/publications/allTasks';
import TasksCollection from '/imports/collections/Tasks';

Meteor.startup(() => {
    TasksCollection.remove({});
    TasksCollection.insert({description: 'Task 1'});
    TasksCollection.insert({description: 'Task 2'});
    TasksCollection.insert({description: 'Task 3'});
    TasksCollection.insert({description: 'Task 4'});
});