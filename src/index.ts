import '@babel/polyfill';
import { ApolloServer } from 'apollo-server';
import { AppSchema, AppResolvers } from './graphql/AppSchema';
import { conn } from './databases/DatabasesConnection';

const setting = require('./setting.ts');

const server = new ApolloServer({
  cors: true,
  typeDefs: AppSchema,
  resolvers: AppResolvers,
  context: async ({ req }) => {
    return {
      mysql: conn,
    }
  }
});

// testing okay, let check change
server.listen(setting.port);
