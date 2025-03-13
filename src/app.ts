import Fastify from "fastify";
import * as dotenv from "dotenv";
import multipart from "@fastify/multipart";
import fastifyFormbody from "@fastify/formbody";
import websocket from "@fastify/websocket";

import { connectDB } from "./config/config.mongoose";
import { authRoutes } from "./modules/auth/routes/auth.routes";
import { userRoutes } from "./modules/user/routes/user.routes";
import { chatRoutes } from "./modules/chat/routes/chat.route";

dotenv.config();
const fastify = Fastify();

// 🔹 رجیستر پلاگین‌های مورد نیاز
fastify.register(multipart, { attachFieldsToBody: true });
fastify.register(fastifyFormbody);
fastify.register(websocket);

// 🏢 اتصال به پایگاه داده
async function start() {
    try {
        await connectDB();

        // 🔗 ثبت مسیرهای API و WebSocket
        fastify.register(authRoutes, { prefix: "/api/auth" });
        fastify.register(userRoutes, { prefix: "/api/user" });
        fastify.register(chatRoutes, { prefix: "/api/chat" });

        // 🔍 مسیر تست
        fastify.get("/ping", async (request, reply) => {
            reply.code(200).send({ message: "pong" });
        });

        const port = parseInt(process.env.PORT ?? "3000");

        await fastify.listen({ port, host: "0.0.0.0" });
        console.log(`🚀 Server running on port ${port}`);
    } catch (err) {
        console.error("❌ خطای سرور:", err);
        process.exit(1);
    }
}

start();
