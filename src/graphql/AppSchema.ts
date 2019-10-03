import { loadSchema } from './SchemaLoader';
import { CustomerResolvers } from './resolvers/CustomerResolvers'

export const AppSchema = loadSchema();

export const AppResolvers = [
  CustomerResolvers
]