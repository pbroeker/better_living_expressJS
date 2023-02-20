import { Request, Response } from "express";
import LivingAreaModel from "./livingArea.model";

export const getAllLivingAreas = async (req: Request, res: Response) => {
  const livingAreas = await LivingAreaModel.find();
  res.status(200).send(livingAreas);
};

export const getLivingAreaById = async (req: Request, res: Response) => {
  const { areaId } = req.params;
  const livingArea = await LivingAreaModel.findOne({ _id: areaId });

  if (livingArea) {
    res.status(200).send(livingArea);
  } else {
    res.status(500).send("LivingArea not found");
  }
};

export const createLivingArea = async (req: Request, res: Response) => {
  const { title } = req.body;
  const livingArea = await LivingAreaModel.create({ title });

  if (livingArea) {
    res.status(200).send(livingArea);
  } else {
    res.status(500).send("Failed creating LivingArea");
  }
};

export const updateLivingArea = async (req: Request, res: Response) => {};

export const deleteLivingArea = async (req: Request, res: Response) => {
  const { areaId } = req.params;
  const livingArea = await LivingAreaModel.findOne({ _id: areaId });
  if (livingArea) {
    const deleteResult = await LivingAreaModel.deleteOne({ _id: areaId });
    if (deleteResult.deletedCount === 1) {
      res.status(200).send("Successfully deleted LivingArea");
    } else {
      res.status(500).send("Deleting livingArea failed");
    }
  } else {
    res
      .status(403)
      .send("Didn't find livingArea or without correct access rights");
  }
};
