import { FastifyInstance } from "fastify";
import { createUserController, updateUserController } from "../controllers/user.controller";
import { verifyToken } from "../../middlewares/auth.middleware";
import {userValidation} from "../validation/user.validation";

export async function userRoutes(fastify: FastifyInstance) {

    fastify.post('/', { preValidation: verifyToken,schema:userValidation}, createUserController);


    fastify.put('/:userId', { preValidation: verifyToken,schema:userValidation}, updateUserController);
}
