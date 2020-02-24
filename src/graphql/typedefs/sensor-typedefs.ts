import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Sensor {
    id: ID!
    user: User
    name: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateSensorInput {
    user: ID!
    name: String!
  }

  type Query { # 쿼리 정의
    getSensors: [Sensor!]
  }

  type Mutation {
    createSensor(input: CreateSensorInput!): Sensor
  }
`;
