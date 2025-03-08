import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

export async function verifyToken(request: FastifyRequest, reply: FastifyReply) {
    const token = request.headers['authorization']?.split(' ')[1];

    if (!token) {
        return reply.status(401).send({ error: "توکن ارسال نشده است" });
    }

    try {

        const decoded = jwt.verify(token, "SECRET_KEY") as { id: string };
        request.user = { id: decoded.id };
        return;
    } catch (error) {
        return reply.status(401).send({ error: "دسترسی غیرمجاز: توکن معتبر نیست" });
    }
}
