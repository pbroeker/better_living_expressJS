import { Router } from "express";
import {
  createLivingArea,
  getAllLivingAreas,
  getLivingAreaById,
  updateLivingArea,
  deleteLivingArea,
} from "./livingArea.controller";
import { jwtGuard } from "../../utils/jwt.guard";

const livingAreaRouter = Router();

livingAreaRouter.get("/all", jwtGuard, getAllLivingAreas);
livingAreaRouter.get("/:areaId", jwtGuard, getLivingAreaById);
livingAreaRouter.post("/", jwtGuard, createLivingArea);
livingAreaRouter.patch("/", jwtGuard, updateLivingArea);
livingAreaRouter.delete("/:areaId", jwtGuard, deleteLivingArea);

export = livingAreaRouter;
