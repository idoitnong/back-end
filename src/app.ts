import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import morgan from "morgan";
import { connect } from "async-mqtt";
import bodyParser from "body-parser";
import { DateTime } from "luxon";
import "dotenv/config";

import * as homeController from "./controllers/home";
import * as topicController from "./controllers/topic";

const app = express();

// 데이터베이스 연결
createConnection()
  .then((connection) => {
    console.log("데이터베이스 연결 됨");
  })
  .catch((err) => {
    console.error(err);
  });

// MQTT 브로커에 연결하고 mqtt.Client 반환
const client = connect(process.env.MQTT_SERVER, {
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
});

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

    await client.subscribe("uuid/#");

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
app.get("/topics", topicController.getTopics);
app.post("/topics", topicController.postTopics);
//app.post("/topics", topicController.postTopic);

export default app;
