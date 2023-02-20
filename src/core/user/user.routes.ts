/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *       example:
 *         id: d5fE_asz
 *         email: usermail@maildropp.cc
 */

/**
 * @swagger
 * /user/all:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /user/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a user by id
 *     description: Retrieve a user by providing an userId in the routeParams.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: User not found.
 */

/**
 * @swagger
 * /user/{userId}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Deleting a user by id
 *     description: Delete a user by providing an userId in the routeParams.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted.
 *       500:
 *         description: Deleting user failed".
 *       403:
 *         description: Didn't find user or without correct access rights.
 */

import { Router } from "express";
import { getAllUsers, deleteUser, getUsersById } from "./user.controller";
import { jwtGuard } from "../../utils/jwt.guard";

const userRouter = Router();

userRouter.get("/all", getAllUsers);
userRouter.get("/:userId", jwtGuard, getUsersById);
userRouter.delete("/:userId", jwtGuard, deleteUser);

export = userRouter;
