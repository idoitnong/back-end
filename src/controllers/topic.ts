import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Topic, Value } from "../entity";

/**
 * GET /topics
 * Topic 목록을 불러옴
 */
export const getTopics = async (req: Request, res: Response) => {
  let topicRepository = getRepository(Topic);
  let result = await topicRepository.find();
  res.json(result);
};

/**
 * POST /topics
 * Topic 저장
 */
export const postTopics = async (req: Request, res: Response) => {
  let topic = new Topic();
  topic.name = req.body.topic;

  let topicRepository = getRepository(Topic);

  // Topic 중복 검사
  const existingTopic = await topicRepository.findOne({
    where: { name: topic.name },
  });
  if (existingTopic) {
    return res.status(409).json({ msg: "이미 존재하는 Topic입니다." });
  }
  let result = await topicRepository.save(topic);
  res.json(result);
};

/**
 * Topic의 Payload 저장
 */
export const savePayload = async (topic: string, payload: number) => {
  let value = new Value();
  value.value = payload;

  let topicRepository = getRepository(Topic);
  let valueRepository = getRepository(Value);

  const tid = await topicRepository.findOne({
    where: { name: topic },
  });

  console.log(tid);
  value.topic = tid;
  let result = await valueRepository.save(value);

  return result;
};

/**
 * 센서 값 불러오기 테스트
 */
export const test = async (req: Request, res: Response) => {
  let value = new Value();

  let valueRepository = getRepository(Value);

  let result = await valueRepository
    .createQueryBuilder("value")
    .leftJoin("value.topic", "topic")
    .addSelect(["topic.name"])
    .orderBy("value.id", "DESC")
    .getMany();
  res.json(result);
};
