import {FastifyInstance} from "fastify";
import {UserSocketMap} from "../services/UserSocketMap";
import {UserService} from "../services/userService";
import {WebSocketController} from "../controllers/WebSocketController";
import websocket from "@fastify/websocket";
import {chatController} from "../controllers/chat.controller";

export async function chatRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.register(websocket);

    const userSocketMap = new UserSocketMap();
    const userService = new UserService(userSocketMap);
    new WebSocketController(fastify, userService);

    fastify.get("/ws", {websocket: true}, chatController);
}