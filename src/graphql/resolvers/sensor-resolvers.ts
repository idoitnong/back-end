import { getManager } from "typeorm";
import { Sensor } from "../../entity/Sensor";

export const resolvers = {
  Query: {
    getSensors: async () => {
      const sensorRepository = getManager().getRepository(Sensor);
      const sensors = await sensorRepository.find({
        relations: ["user"],
        order: {
          id: "DESC"
        }
      });

      console.log(sensors);
      return sensors;
    }
  },
  Mutation: {
    createSensor: async (_: any, args: any) => {
      const sensorRepository = getManager().getRepository(Sensor);
      const sensor = Sensor.CreateSensor(args.input);
      console.log(sensor);
      return sensorRepository.save(sensor);
    }
  }
};
