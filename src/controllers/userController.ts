import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  const results = await AppDataSource.manager.find(User, {
    order: { id: "DESC" },
    select: {
      username: true,
      created_at: true,
    },
    take: 10,
  });

  return res.json({ data: results });
};

export const getUserById = async (req: Request, res: Response) => {
  const results = await AppDataSource.manager.find(User, {
    where: {
      id: parseInt(req.params.id),
    },
    select: {
      username: true,
      created_at: true,
    },
  });

  return res.json({ data: results });
};

export const createUser = async (req: Request, res: Response) => {
  const user = AppDataSource.getRepository(User).create(req.body);
  const results = await AppDataSource.getRepository(User).save(user);

  return res.json({ data: results });
};
