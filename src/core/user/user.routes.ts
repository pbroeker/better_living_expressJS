import { Router } from "express";
import { getAllUsers, deleteUser, getUsersById } from "./user.controller";
import { jwtGuard } from "../../utils/jwt.guard";

const userRouter = Router();

userRouter.get("/all", getAllUsers);
userRouter.get("/:userId", getUsersById);
userRouter.delete("/:userId", deleteUser);

export = userRouter;
