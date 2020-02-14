import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Sensor } from "./Sensor";

@Entity()
export class SensorValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column("datetime")
  createdAt: Date;

  @ManyToOne(
    type => Sensor,
    sensor => sensor.values
  )
  sensor: Sensor;
}
