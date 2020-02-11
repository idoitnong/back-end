import express, { response } from "express";
import morgan from "morgan"; // logger
import "dotenv/config";

import * as homeController from "./controllers/home";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", homeController.index);

export default app;
