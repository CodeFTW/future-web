import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data';

import TasksCollection from '/imports/collections/Tasks';
import Tasks from '/imports/ui/Tasks';

export default TasksContainer = createContainer(({ id }) => {
    const tasksHandle = Meteor.subscribe('allTasks', id);
    const loading = !tasksHandle.ready()
    const tasks = TasksCollection.find();
    return {
        loading,
        items: tasks ? tasks.fetch() : [],
    };
}, Tasks);