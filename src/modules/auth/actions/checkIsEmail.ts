import {AuthRepository} from "../repositories/auth.repository";

export async function checkIsEmail(email: string) {
    const user = await AuthRepository.findByEmail(email);
    if (!user) throw new Error("کاربر یافت نشد!");
    else
        return user;
}