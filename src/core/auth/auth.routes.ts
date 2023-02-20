/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: User password
 *       example:
 *         id: d5fE_asz
 *         email: usermail@maildropp.cc
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user.
 *     tags:
 *       - Auth 
 *     responses:
 *       200:
 *         description: Successfully registered user. JWT token is returned.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for bearer authentication
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login with an existing user
 *     description: Logging in with email and password.
 *     tags:
 *       - Auth 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *                 example: usermail@maildrop.cc
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: supersecretpassword
 *     responses:
 *       200:
 *         description: Successfully logged in. JWT token is returned.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for bearer authentication
 *       403:
 *         description: Wrong credentials or user doesn't exist.
 *
 */

/**
 * @swagger
 * /user/{userId}:
 *   delete:
 *     summary: Deleting a user by id
 *     description: Delete a user by providing an userId in the routeParams.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted.
 *       500:
 *         description: Deleting user failed".
 *       403:
 *         description: Didn't find user or without correct access rights.
 */

import { createUser, loginUser } from "./auth.controller";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);

export = authRouter;
