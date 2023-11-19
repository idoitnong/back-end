import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column({
    type: "timestamp",
    default: () => "now()",
  })
  created_at: string;

  @Column({
    type: "timestamp",
    default: () => "now()",
  })
  updated_at: number;
}
