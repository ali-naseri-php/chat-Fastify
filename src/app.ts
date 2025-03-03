import Fastify, {FastifyReply, FastifyRequest} from "fastify";
import * as dotenv from "dotenv";
import {authRoutes} from "./modules/auth/routes/auth.routes";

dotenv.config();
const fastify = Fastify();

const start = async () => {
    try {
        fastify.get('/ping', async (request, reply) => {
            reply.code(200).send({message: 'ping'});
        });
const port =parseInt(process.env.PORT ?? '3000')
        fastify.register(authRoutes);
        await fastify.listen({ port: port });

        console.log(` server port ${port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
