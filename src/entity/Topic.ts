import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    default: null,
    nullable: true,
  })
  labels: string;

  @CreateDateColumn({
    name: "created_at",
  })
  "created_at": Date;
}
