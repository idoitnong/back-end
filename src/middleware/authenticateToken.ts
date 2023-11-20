import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({
      message: "엑세스가 거부 되었습니다. 토큰이 제공되지 않았기 때문입니다.",
    });
    return;
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "YOUR_SECRET_KEY",
    (err, user) => {
      if (err) {
        res.status(403).json({ message: "유효하지 않은 토큰입니다." });
        return;
      }
      console.log(user);

      next();
    }
  );
};

export default authenticateToken;
