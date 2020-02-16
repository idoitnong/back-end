import { gql } from "apollo-server-express";
import { getManager } from "typeorm";
import { User } from "../entity/User";
import { GraphQLDateTime } from "graphql-iso-date";

export const typeDefs = gql`
  scalar DateTime

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

  type Query { # 쿼리 정의
    getUsers: [User!]
    user(id: Int!): User!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;

export const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    getUsers: async () => {
      const userRepository = getManager().getRepository(User);
      const users = await userRepository.find();
      return users;
    },
    user: async (_: any, args: any) => {
      const userRepository = getManager().getRepository(User);
      const user = await userRepository.findOne(args.id);
      return user;
    }
  },
  Mutation: {
    createUser: async (_: any, args: any) => {
      const userRepository = getManager().getRepository(User);
      const user = new User();
      user.load(args.input);
      return await userRepository.save(user);
    }
  }
};
