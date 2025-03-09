import  { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import "../types/fastify";
dotenv.config();

export async function verifyToken(request: FastifyRequest, reply: FastifyReply) {
    const token = request.headers['authorization']?.split(' ')[1];

    if (!token) {
        return reply.status(401).send({ error: "توکن ارسال نشده است" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "SECRET_KEY") as { _id: string };

        request.user={_id:decoded._id,}
        return;
    } catch (error) {
        return reply.status(401).send({ error: "دسترسی غیرمجاز: توکن معتبر نیست" });
    }
}
