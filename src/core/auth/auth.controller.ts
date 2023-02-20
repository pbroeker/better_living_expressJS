import { Request, Response } from "express";
import UserModel from "../user/user.model";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const foundUser = await UserModel.findOne({ email });
  if (foundUser) {
    return res.status(403).json({ error: "Email is already in use" });
  } else {
    const user = await UserModel.create({ email, password });
    if (user) {
      const token = createToken(user);
      res.status(200).send({ token });
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
      const token = createToken(user);
      res.status(200).send({ token });
    } else {
      res.status(403).send("Wrong credentials or user doesn't exist");
    }
  } else {
    res.status(403).send("Wrong credentials or user doesn't exist");
  }
};

const createToken = (user: any) => {
  const secret = process.env.JWT_SECRET as string;
  const tokenPayload = {
    sub: user._id,
    lastName: user.last_name,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1),
  };
  const token = jsonwebtoken.sign(tokenPayload, secret);
  return token;
};
