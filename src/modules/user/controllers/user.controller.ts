import {  FastifyReply } from "fastify";
import { Schema } from "mongoose";
import { userService } from "../services/user.service";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";
import {AuthRequest} from "../../request/auth.request";
import {checkIsUser} from "../actions/checkIsUser";

export async function updateUserController(request:AuthRequest , reply: FastifyReply) {
    try {

        const _id = await checkIsUser(request.user)
        const updateData: UpdateUserDTO = request.body as UpdateUserDTO;
        const updatedUser = await userService.updateUser(_id, updateData);
        if (!updatedUser) {
            return reply.status(404).send({ error: "کاربر پیدا نشد" });
        }

        reply.status(200).send({ message: "پروفایل با موفقیت بروزرسانی شد", user: updatedUser });
    } catch (error) {
        console.error("خطا در بروزرسانی کاربر:", error);
        reply.status(500).send({ error: "خطا در سرور" });
    }
}
export async function createUserController(request: AuthRequest, reply: FastifyReply) {
    try {


        const _id = await checkIsUser(request.user)


        const userData: CreateUserDTO = request.body as CreateUserDTO;
        userData._id = new Schema.Types.ObjectId(_id);

        const user = await userService.createUser(userData);

        reply.status(201).send({ message: "پروفایل با موفقیت ایجاد شد", user });
    } catch (error) {
        console.error("خطا در ایجاد پروفایل کاربر:", error);
        reply.status(500).send({ error: "خطا در سرور" });
    }
}
