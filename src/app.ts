import express from "express";
import morgan from "morgan";
import MQTT from "async-mqtt";
import bodyParser from "body-parser";
import { DateTime } from "luxon";
import "dotenv/config";

import * as homeController from "./controllers/home";

const app = express();
// TODO DB연동
const client = MQTT.connect(process.env.MQTT_SERVER);

// Express 설정
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * MQTT 하우스 관련 topic 구독
 */
const doStuff = async () => {
  console.log("Starting");
  try {
    client.on("message", (topic, message) => {
      let parsedMessage = JSON.parse(
        Buffer.from(message.toJSON().data).toString("utf-8")
      );

      console.log(`topic: ${topic}, date: ${DateTime.local().toString()}`);
      // TODO DB에 데이터 저장
      console.log(parsedMessage);
    });

    await client.subscribe("house/#");

    console.log("Done");
  } catch (e) {
    console.log(e.stack);
    process.exit();
  }
};

client.on("connect", doStuff);

/**
 * 주요 라우트
 */
app.get("/", homeController.index);

export default app;
