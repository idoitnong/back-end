import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "./User";
import { SensorValue } from "./SensorValue";

@Entity()
export class Sensor {
  static CreateSensor(args: any) {
    const sensor = new Sensor();
    sensor.user = args.user;
    sensor.name = args.name;
    return sensor;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => SensorValue,
    sensor => sensor.sensor
  )
  values: SensorValue[];

  @ManyToOne(
    type => User,
    user => user.sensors
  )
  user: User;
}
