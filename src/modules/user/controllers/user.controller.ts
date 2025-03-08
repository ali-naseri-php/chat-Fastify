import { FastifyRequest, FastifyReply } from "fastify";
import { Schema } from "mongoose";
import { userService } from "../services/user.service";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";

export async function updateUserController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const userId = request.user?.id;
        if (!userId) {
            return reply.status(401).send({ error: "توکن نامعتبر است" });
        }

        const updateData: UpdateUserDTO = request.body as UpdateUserDTO;
        const updatedUser = await userService.updateUser(userId, updateData);

        if (!updatedUser) {
            return reply.status(404).send({ error: "کاربر پیدا نشد" });
        }

        reply.status(200).send({ message: "پروفایل با موفقیت بروزرسانی شد", user: updatedUser });
    } catch (error) {
        console.error("خطا در بروزرسانی کاربر:", error);
        reply.status(500).send({ error: "خطا در سرور" });
    }
}
export async function createUserController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const userId = request.user?.id;
        if (!userId) {
            return reply.status(401).send({ error: "توکن نامعتبر است" });
        }



        const userData: CreateUserDTO = request.body as CreateUserDTO;
        userData.userId = new Schema.Types.ObjectId(userId);

        const user = await userService.createUser(userData);

        reply.status(201).send({ message: "پروفایل با موفقیت ایجاد شد", user });
    } catch (error) {
        console.error("خطا در ایجاد پروفایل کاربر:", error);
        reply.status(500).send({ error: "خطا در سرور" });
    }
}
