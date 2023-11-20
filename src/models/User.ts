import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

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
    type: "set",
    enum: UserRole,
    default: [UserRole.USER],
  })
  roles: UserRole[];

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
