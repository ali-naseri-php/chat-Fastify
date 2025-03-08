import { FastifyInstance } from "fastify";
import { createUserController, updateUserController } from "../controllers/user.controller";
import { verifyToken } from "../../middlewares/auth.middleware";

export async function userRoutes(fastify: FastifyInstance) {

    fastify.post('/user', { preValidation: [verifyToken] }, createUserController);


    fastify.put('/user/:userId', { preValidation: [verifyToken] }, updateUserController);
}
