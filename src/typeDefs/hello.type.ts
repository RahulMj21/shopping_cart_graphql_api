import { gql } from "apollo-server-express";

const hello = gql`
  type Query {
    hello: String!
    greeting(name: String!): String!
  }
`;

export default hello;
