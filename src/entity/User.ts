import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";
import { Sensor } from "./Sensor";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
    unique: true
  })
  username: string;

  @Column()
  password: string;

  @Column({
    length: 20
  })
  realName: string;

  @Column({
    length: 11
  })
  phoneNumber: string;

  @Column("datetime")
  createdAt: Date;

  @Column("datetime")
  updatedAt: Date;

  @OneToMany(
    type => Sensor,
    sensor => sensor.user
  )
  sensors: Sensor[];
}
