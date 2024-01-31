import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

export async function initializeServer() {
  const app = express();

  app.use(bodyParser.json());

  const graphqlserver = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello world!",
      },
    },
  });

  await graphqlserver.start();

  app.use("/graphql", expressMiddleware(graphqlserver));

  return app;
}
