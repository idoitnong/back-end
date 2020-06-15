import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Payload } from "./";

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @Column({
    default: null,
    nullable: true,
  })
  label: string;

  @OneToMany((type) => Payload, (payload) => payload.topic)
  payloads: Payload[];

  @CreateDateColumn({
    name: "created_at",
  })
  "created_at": Date;
}
