import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Topic } from "./";

@Entity()
export class Value {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @ManyToOne((type) => Topic, (topic) => topic.values)
  topic: Topic;

  @CreateDateColumn({
    name: "created_at",
  })
  "created_at": Date;
}
