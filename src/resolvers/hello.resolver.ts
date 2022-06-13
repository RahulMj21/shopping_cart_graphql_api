import { Resolvers } from "../../graphql";

const helloResolver: Resolvers = {
  Query: {
    hello: () => "Hello world",
    greeting: (_, { name }) => `hi ${name}`,
  },
};
export default helloResolver;
