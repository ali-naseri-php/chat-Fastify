import {FastifyRequest} from "fastify";

export interface AuthRequest extends FastifyRequest {
    user?: {
        _id: string;
    };
}