import { createUser, loginUser } from "./auth.controller";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);

export = authRouter;
