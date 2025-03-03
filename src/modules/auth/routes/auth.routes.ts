import { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/auth.controller";

export async function authRoutes(fastify: FastifyInstance) {
    fastify.post("/auth/register", AuthController.register);
    fastify.post("/auth/login", AuthController.login);
}