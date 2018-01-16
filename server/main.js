import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from '/imports/api/schema';
import { resolvers } from '/imports/api/resolvers';
import { setup } from 'meteor/swydo:ddp-apollo';

const schema = makeExecutableSchema({ typeDefs, resolvers });

setup({
  schema,
});
