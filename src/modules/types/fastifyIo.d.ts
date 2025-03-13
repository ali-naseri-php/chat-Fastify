
import { FastifyInstance } from 'fastify';
import { Server } from 'socket.io';

declare module 'fastify' {
    interface FastifyInstance {
        io: Server;
    }
}

 