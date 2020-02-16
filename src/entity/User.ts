import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
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

  @Column({
    type: "datetime",
    default: () => "now()"
  })
  createdAt: Date;

  @Column({
    type: "datetime",
    default: () => "now()"
  })
  updatedAt: Date;

  @OneToMany(
    type => Sensor,
    sensor => sensor.user
  )
  sensors: Sensor[];

  load(args: any) {
    this.username = args.username;
    this.password = args.password;
    this.realName = args.realName;
    this.phoneNumber = args.phoneNumber;
  }
}
