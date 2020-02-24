import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String
    password: String
    realName: String
    phoneNumber: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateUserInput {
    username: String
    password: String
    realName: String
    phoneNumber: String
  }

  extend type Query { # 쿼리 정의
    getUsers: [User!]
    user(id: Int!): User!
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;
