import { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/auth.controller";
import {valid} from "../validation/auth.loginRegister";

export async function authRoutes(fastify: FastifyInstance) {
    fastify.post("/register", {schema: valid},AuthController.register);
    fastify.post("/login", {schema: valid},AuthController.login);

}