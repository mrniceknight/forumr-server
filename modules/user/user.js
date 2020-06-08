import { GraphQLModule } from '@graphql-modules/core';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

export default new GraphQLModule({
  typeDefs,
  resolvers,
});
