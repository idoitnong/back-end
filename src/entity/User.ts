import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Sensor } from "./Sensor";

@Entity()
export class User {
  static CreateUser(args: any) {
    const user = new User();
    user.username = args.username;
    user.password = args.password;
    user.realName = args.realName;
    user.phoneNumber = args.phoneNumber;
    return user;
  }

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Sensor,
    sensor => sensor.user
  )
  sensors: Sensor[];
}
