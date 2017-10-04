
import TasksCollection from '/imports/collections/Tasks';

export const resolvers = {
    Query: {
        tasks(root, args, context) {
            return TasksCollection.find().fetch();
        },
    }
}