import { Router } from "express";
import {
  getAllUserTags,
  getUserTagById,
  createUserTag,
  updateUserTag,
  deleteUserTag,
} from "./userTag.controller";

const userCommentRouter = Router();

userCommentRouter.get("/all", getAllUserTags);
userCommentRouter.get("/:tagId", getUserTagById);
userCommentRouter.post("/", createUserTag);
userCommentRouter.patch("/", updateUserTag);
userCommentRouter.delete("/:tagId", deleteUserTag);

export = userCommentRouter;
