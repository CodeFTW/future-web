import { Meteor } from "meteor/meteor";

import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "/imports/api/schema";
import { resolvers } from "/imports/api/resolvers";

import TasksCollection from "/imports/collections/Tasks";

Meteor.startup(() => {
  TasksCollection.remove({});
  TasksCollection.insert({
    description: "Think about a new website for my company",
    details: "Our goal must be very clear"
  });
  TasksCollection.insert({
    description: "Choose a new template",
    details: "We want something dark"
  });
  TasksCollection.insert({
    description: "Write the texts",
    details: "Think about why while writing"
  });
  TasksCollection.insert({
    description: "Implement in JS",
    details: "Try to have the fastest website ever"
  });
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({
  schema
});
