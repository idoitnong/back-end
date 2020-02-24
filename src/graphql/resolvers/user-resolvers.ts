import { getManager } from "typeorm";
import { User } from "../../entity/User";

export const resolvers = {
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
      const user = User.CreateUser(args.input);
      return userRepository.save(user);
    }
  }
};
