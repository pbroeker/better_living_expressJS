import { Router } from "express";
import {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} from "./room.controller";

const roomRouter = Router();

roomRouter.get("/all", getAllRooms);
roomRouter.get("/:roomId", getRoomById);
roomRouter.post("/", createRoom);
roomRouter.patch("/", updateRoom);
roomRouter.delete("/:roomId", deleteRoom);

export = roomRouter;
