import { Request, Response } from "express";
import UserModel from "./user.model";

export const getAllUsers = async (req: Request, res: Response) => {
  const userModels = await UserModel.find();
  res.status(200).send(userModels);
};

export const getUsersById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await UserModel.findOne({ _id: userId });

  if (user) {
    const { password, ...userNoPW } = user;
    res.status(200).send(userNoPW);
  } else {
    res.status(500).send("User not found");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await UserModel.findOne({ _id: userId });
  if (user) {
    const deleteResult = await UserModel.deleteOne({ _id: userId });
    if (deleteResult.deletedCount === 1) {
      res.status(200).send("Successfully deleted");
    } else {
      res.status(500).send("Deleting user failed");
    }
  } else {
    res.status(403).send("Didn't find user or without correct access rights");
  }
};
