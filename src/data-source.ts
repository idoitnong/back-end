import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT!) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASWORD || "root",
  database:
    process.env.NODE_ENV === "production"
      ? process.env.DB_NAME
      : process.env.DB_NAME_DEV,
  synchronize: true,
  logging: true,
  entities: ["src/models/*.ts"],
  subscribers: [],
  migrations: [],
});
