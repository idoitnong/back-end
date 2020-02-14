import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { User } from "./User";
import { SensorValue } from "./SensorValue";

@Entity()
export class Sensor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("datetime")
  createdAt: Date;

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
