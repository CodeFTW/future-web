import { Meteor } from 'meteor/meteor';

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from '/imports/api/schema';
import { resolvers } from '/imports/api/resolvers';

import TasksCollection from '/imports/collections/Tasks';

Meteor.startup(() => {
    TasksCollection.remove({});
    TasksCollection.insert({description: 'Task 1'});
    TasksCollection.insert({description: 'Task 2'});
    TasksCollection.insert({description: 'Task 3'});
    TasksCollection.insert({description: 'Task 4'});
});

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

createApolloServer({
    schema,
});