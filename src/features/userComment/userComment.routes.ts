import { Router } from "express";
import {
  getAllUserComments,
  getUserCommentById,
  createUserComment,
  updateUserComment,
  deleteUserComment,
} from "./userComment.controller";

const userCommentRouter = Router();

userCommentRouter.get("/all", getAllUserComments);
userCommentRouter.get("/:commentId", getUserCommentById);
userCommentRouter.post("/", createUserComment);
userCommentRouter.patch("/", updateUserComment);
userCommentRouter.delete("/:commentId", deleteUserComment);

export = userCommentRouter;
