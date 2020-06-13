import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Value } from "./";

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

  @OneToMany((type) => Value, (value) => value.topic)
  values: Value[];

  @CreateDateColumn({
    name: "created_at",
  })
  "created_at": Date;
}
