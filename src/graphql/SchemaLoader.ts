import { gql } from 'apollo-server';
import * as fs from 'fs'

export function loadSchema() {
  const schema = [];
  const files = fs.readdirSync('./src/graphql/schema').sort();
  
  for(const file of files) {
    schema.push(gql`${fs.readFileSync(__dirname + '/schema/' + file)}`)
  }
  
  return schema;
}