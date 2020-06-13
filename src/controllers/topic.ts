import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Topic } from "../entity/Topic";

/**
 * GET /topics
 * 토픽 목록을 불러옴
 */
export const getTopics = async (req: Request, res: Response) => {
  let topicRepository = getRepository(Topic);
  let result = await topicRepository.find();
  res.json(result);
};

/**
 * POST /topics
 * 토픽 목록을 불러옴
 */
export const postTopics = async (req: Request, res: Response) => {
  let topic = new Topic();
  topic.name = req.body.topic;

  let topicRepository = getRepository(Topic);
  let result = await topicRepository.save(topic);
  res.json(result);
};
