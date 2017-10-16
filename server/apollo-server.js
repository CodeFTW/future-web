import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import { typeDefs } from "/imports/api/schema";
import { resolvers } from "/imports/api/resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const customOptions = {
  schema,
};

const customConfig = {
  configServer: graphQLServer => graphQLServer.use(cors()),
};

createApolloServer(customOptions, customConfig);