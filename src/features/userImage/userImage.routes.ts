/**
 * @swagger
 * components:
 *   schemas:
 *     UserImage:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the image
 *         owner:
 *           type: string
 *           description: The user id of the image owner
 *       example:
 *         id: d5fE_asz
 *         owner: 63f1fc552b0147ea8570af55
 */

/**
 * @swagger
 * /userimage/all:
 *   get:
 *     security: 
 *       - bearerAuth: []
 *     summary: Retrieve a list of userImages
 *     description: Retrieve a list of userImages.
 *     tags:
 *       - UserImages   
 *     responses:
 *       200:
 *         description: A list of userImages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserImage'
 *       500:
 *         description: Failed loading userImages.
 */

/**
 * @swagger
 * /userimage/{imageId}:
 *   get:
 *     security: 
 *       - bearerAuth: []
 *     summary: Retrieve a userImage by id
 *     description: Retrieve a userImage by providing an imageId in the routeParams.
 *     tags:
 *       - UserImages
 *     parameters:
 *       - in: path
 *         name: imageId
 *         required: true
 *         description: Numeric ID of the userImage to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A userImage.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: No userimage with this id found.
 */

/**
 * @swagger
 * /userimage:
 *   post:
 *     security: 
 *       - bearerAuth: []
 *     summary: Post a new userImage
 *     description: Uploading a new userimage.
 *     tags:
 *       - UserImages
 *     requestBody:
 *       content:
 *         image/png:
 *           schema:
 *             type: string
 *             format: binary
 *     responses:
 *       200:
 *         description: Image successfully uploaded.
 *       500:
 *         description: Image could not be saved".
 */

import { Router } from "express";
import {
  getAllUserImages,
  getUserImageById,
  updateUserImage,
  deleteUserImage,
  uploadUserImage,
} from "./userImage.controller";
import { uploadImage } from "../../utils/multer";
import { jwtGuard } from "../../utils/jwt.guard";

const userImageRouter = Router();

userImageRouter.get("/all", jwtGuard, getAllUserImages);
userImageRouter.get("/:imageId", jwtGuard, getUserImageById);
userImageRouter.post("/", jwtGuard, uploadImage, uploadUserImage);
userImageRouter.patch("/", jwtGuard, updateUserImage);
userImageRouter.delete("/:imageId", jwtGuard, deleteUserImage);

export = userImageRouter;
