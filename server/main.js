import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from '/imports/api/schema';
import { resolvers } from '/imports/api/resolvers';
import { setup } from 'meteor/swydo:ddp-apollo';

import '/imports/startup/server/';

const schema = makeExecutableSchema({ typeDefs, resolvers });

setup({
  schema,
});
