import {FastifyInstance} from 'fastify';
import {Server} from 'socket.io';


export interface RouteIo extends FastifyInstance {
    io: Server;
}
