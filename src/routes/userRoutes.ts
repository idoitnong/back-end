import express from "express";
import * as UserController from "../controllers/userController";

const router = express.Router();

// 모든 사용자 조회
router.get("/", UserController.getAllUsers);

// 특정 사용자 조회
router.get("/:id", UserController.getUserById);

// 사용자 생성
router.post("/", UserController.createUser);

// // 사용자 업데이트
// router.post("/:id", UserController.updateUser);

// // 사용자 삭제
// router.delete("/:id", UserController.deleteUser);

export default router;
