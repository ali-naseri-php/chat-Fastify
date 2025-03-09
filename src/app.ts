import Fastify from "fastify";
import * as dotenv from "dotenv";
import { authRoutes } from "./modules/auth/routes/auth.routes";
import multipart from "@fastify/multipart";
import { connectDB } from "./config/config.mongoose";
import fastifyFormbody from "@fastify/formbody";
import {userRoutes} from "./modules/user/routes/user.routes";

dotenv.config();
const fastify = Fastify();

fastify.register(multipart, { attachFieldsToBody: true });

const start = async () => {
    try {
        await connectDB();

        fastify.register(fastifyFormbody);

        fastify.get('/ping', async (request, reply) => {
            reply.code(200).send({ message: 'ping' });
        });

        const port = parseInt(process.env.PORT ?? '3000');

        fastify.register(authRoutes ,{prefix:'/api/auth'});
        fastify.register(userRoutes ,{prefix:'/api/user'});

        await fastify.listen({ port: port });
        console.log(`Server running on port ${port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
start();
