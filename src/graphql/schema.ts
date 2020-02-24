import { merge } from "lodash";
import { makeExecutableSchema, gql } from "apollo-server-express";
import { typeDefs as User } from "../graphql/typedefs/user-typedefs";
import { typeDefs as Sensor } from "../graphql/typedefs/sensor-typedefs";
import { resolvers as userResolvers } from "../graphql/resolvers/user-resolvers";
import { resolvers as sensorResolvers } from "../graphql/resolvers/sensor-resolvers";
import { GraphQLDateTime } from "graphql-iso-date";

const resolvers = { DateTime: GraphQLDateTime };

const typeDefs = gql`
  scalar DateTime
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, User, Sensor],
  resolvers: merge(resolvers, userResolvers, sensorResolvers)
});

export { schema };
