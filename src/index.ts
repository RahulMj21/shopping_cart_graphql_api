import express from "express";
import { ApolloServer } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import hello from "./typeDefs/hello.type";
import helloResolver from "./resolvers/hello.resolver";
import cartResolvers from "./resolvers/cart.resolver";
import cart from "./typeDefs/cart.type";

const app = express();
const port = process.env.PORT || 8000;

const prisma = new PrismaClient();

export type GraphqlContext = {
  prisma: PrismaClient;
};

async function main() {
  const apolloServer = new ApolloServer({
    typeDefs: [hello, cart],
    resolvers: [helloResolver, cartResolvers],
    context: { prisma },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api" });

  app.listen(port, () => console.log(`server is running on port : ${port}`));
}

main();
