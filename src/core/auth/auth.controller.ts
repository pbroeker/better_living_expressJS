import { Request, Response } from "express";
import UserModel from "../user/user.model";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const foundUser = await UserModel.findOne({ email });
  if (foundUser) {
    return res.status(403).json({ error: "Email is already in use" });
  } else {
    const user = await UserModel.create({ email, password });
    if (user) {
    } else {
      res.status(500).send("Failed creating User");
    }
  }
};
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(password, user?.password);
    if (isMatch) {
    } else {
      res.status(403).send("Wrong credentials or user doesn't exist");
    }
  } else {
    res.status(403).send("Wrong credentials or user doesn't exist");
  }
};

