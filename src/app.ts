import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
// import morgan from "morgan"; // logger
import "dotenv/config";

import * as homeController from "./controllers/home";

const app = express();

createConnection()
  .then(async connection => {
    console.log("DB 연결 됨");
  })
  .catch(error => console.log("TypeORM connection error: ", error));

app.set("port", process.env.PORT || 3000);

// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", homeController.index);

export default app;
