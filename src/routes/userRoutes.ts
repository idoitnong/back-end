import express from "express";
import * as UserController from "../controllers/userController";
import * as AuthController from "../controllers/authController";
import authenticateToken from "../middleware/authenticateToken";

const router = express.Router();

// 모든 사용자 조회
router.get("/", authenticateToken, UserController.getAllUsers);

// 특정 사용자 조회
router.get("/:id", authenticateToken, UserController.getUserById);

// 사용자 생성
router.post("/", UserController.createUser);

// // 사용자 업데이트
// router.post("/:id", UserController.updateUser);

// // 사용자 삭제
// router.delete("/:id", UserController.deleteUser);

// 로그인
router.post("/login", AuthController.login);

export default router;
