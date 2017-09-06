
import TasksCollection from '/imports/collections/Tasks';

export const resolvers = {
    Query: {
        say(root, args, context) {
            return 'hello world';
        },
        tasks(root, args, context) {
            return TasksCollection.find().fetch();
        },
    }
}