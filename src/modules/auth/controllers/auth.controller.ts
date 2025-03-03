import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static async register(req: FastifyRequest, reply: FastifyReply) {
        try {
            const user = await AuthService.register(req.body as any);
            reply.code(201).send({ message: "کاربر ثبت شد!", user });
        } catch (error: any) {
            reply.code(400).send({ error: error.message });
        }
    }

    static async login(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { email, password } = req.body as { email: string; password: string };
            const { token, user } = await AuthService.login(email, password);
            reply.send({ message: "ورود موفقیت‌آمیز!", token, user });
        }catch (error: any) {
            reply.code(400).send({ error: error.message });
        }
    }
}
