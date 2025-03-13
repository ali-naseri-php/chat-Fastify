import { FastifyInstance } from "fastify";
import websocket from "@fastify/websocket";
import { chatController } from "../controllers/chat.controller";

export async function chatRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.register(websocket);
    fastify.get("/ws", { websocket: true }, chatController);
}
