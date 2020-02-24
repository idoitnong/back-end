import errorHandler from "errorhandler";

import app from "./app";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql/schema";

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());

/**
 * Start Express server.
 */

const apollo = new ApolloServer({ schema });
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
