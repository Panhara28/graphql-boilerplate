import { loadSchema } from './SchemaLoader';
export const CustomResolver = {

  Query: {},

}
export const AppSchema = loadSchema();
export const AppResolvers = [
  CustomResolver
]