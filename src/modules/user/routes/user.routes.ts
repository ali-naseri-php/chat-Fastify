import { FastifyInstance } from "fastify";
import { createUserController, updateUserController } from "../controllers/user.controller";
import { verifyToken } from "../../middlewares/auth.middleware";
import {userValidation} from "../validation/user.validation";

export async function userRoutes(fastify: FastifyInstance) {

    fastify.post('/', { preHandler: verifyToken,schema:userValidation}, createUserController);


    fastify.put('/:userId', { preHandler: verifyToken,schema:userValidation}, updateUserController);
}
