import Fastify from "fastify";
import * as dotenv from "dotenv";
import { authRoutes } from "./modules/auth/routes/auth.routes";  // روت‌ها را از اینجا وارد می‌کنید
import multipart from "@fastify/multipart";
import { connectDB } from "./config/config.mongoose";
import fastifyFormbody from "@fastify/formbody";

// بارگذاری متغیرهای محیطی
dotenv.config();
const fastify = Fastify();

// ثبت پلاگین multipart
fastify.register(multipart, { attachFieldsToBody: true });

// تعریف تابع شروع سرور
const start = async () => {
    try {
        // اتصال به پایگاه داده
        await connectDB();

        // ثبت پلاگین formbody
        fastify.register(fastifyFormbody);

        // روت تست
        fastify.get('/ping', async (request, reply) => {
            reply.code(200).send({ message: 'ping' });
        });

        // پورت از متغیر محیطی یا پیش‌فرض 3000
        const port = parseInt(process.env.PORT ?? '3000');

        // ثبت روت‌های auth
        fastify.register(authRoutes ,{prefix:'/api/auth'});

        // شروع سرور
        await fastify.listen({ port: port });
        console.log(`Server running on port ${port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// اجرای تابع شروع
start();
