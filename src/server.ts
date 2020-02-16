import errorHandler from "errorhandler";

import app from "./app";
import { ApolloServer } from "apollo-server-express";
import {
  resolvers as UsersResolvers,
  typeDefs as UsersTypeDefs
} from "./graphql/users";

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());

/**
 * Start Express server.
 */

const apollo = new ApolloServer({
  typeDefs: [UsersTypeDefs],
  resolvers: [UsersResolvers]
});
apollo.applyMiddleware({ app });
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
