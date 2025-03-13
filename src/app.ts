import Fastify from "fastify";
import * as dotenv from "dotenv";
import { authRoutes } from "./modules/auth/routes/auth.routes";
import multipart from "@fastify/multipart";
import { connectDB } from "./config/config.mongoose";
import fastifyFormbody from "@fastify/formbody";
import { userRoutes } from "./modules/user/routes/user.routes";
import { chatRoutes } from "./modules/chat/routes/chat.route";
import fastifySocketIO from "@fastify/websocket";

dotenv.config();
const fastify = Fastify();

// رجیستر پلاگین‌های مورد نیاز
fastify.register(multipart, { attachFieldsToBody: true });
fastify.register(fastifyFormbody);
fastify.register(fastifySocketIO);

const start = async () => {
    try {
        await connectDB();

        // WebSocket route
        fastify.register(async function (fastify) {
            fastify.get("/ws", { websocket: true }, (connection, req) => {
                console.log("🔗 New WebSocket connection");

                connection.socket.on("message", (message) => {
                    console.log("📩 Received:", message.toString());
                    connection.socket.send(`Echo: ${message}`);
                });

                connection.socket.on("close", () => {
                    console.log("❌ Client disconnected");
                });
            });
        });

        // ثبت مسیرهای API
        fastify.register(authRoutes, { prefix: "/api/auth" });
        fastify.register(userRoutes, { prefix: "/api/user" });
        fastify.register(chatRoutes, { prefix: "/api/chat" });

        // مسیر تست
        fastify.get("/ping", async (request, reply) => {
            reply.code(200).send({ message: "pong" });
        });

        const port = parseInt(process.env.PORT ?? "3000");

        await fastify.listen({ port, host: "0.0.0.0" });
        console.log(`🚀 Server running on port ${port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
