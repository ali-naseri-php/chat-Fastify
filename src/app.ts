import Fastify from "fastify";
import * as dotenv from "dotenv";
import { authRoutes } from "./modules/auth/routes/auth.routes";
import multipart from "@fastify/multipart"; // اضافه کردن پلاگین

dotenv.config();
const fastify = Fastify();


fastify.register(multipart, { attachFieldsToBody: true });
const start = async () => {
    try {
        fastify.get('/ping', async (request, reply) => {
            reply.code(200).send({ message: 'ping' });
        });

        const port = parseInt(process.env.PORT ?? '3000');
        fastify.register(authRoutes);
        await fastify.listen({ port: port });

        console.log(`Server running on port ${port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
