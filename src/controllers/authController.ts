import "dotenv/config";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../models/User";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const results = await AppDataSource.manager.find(User, {
      where: {
        username: req.body.username || "",
        password: req.body.password || "",
      },
    });

    console.log(req.body.password);

    if (results.length === 0) {
      return res
        .status(401)
        .json({ message: "아이디 또는 패스워드가 일치하지 않습니다." });
    }

    const user: User = results[0];
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || "YOUR_SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error("로그인 처리 중 오류 발생 :", error);
    res.status(500).json({ message: "내부 서버 오류" });
  }
};
