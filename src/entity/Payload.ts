import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Topic } from ".";

@Entity()
export class Payload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "float" })
  value: number;

  @ManyToOne((type) => Topic, (topic) => topic.payloads)
  topic: Topic;

  @CreateDateColumn({
    name: "created_at",
  })
  "created_at": Date;
}
