import {AuthRepository} from "../repositories/auth.repository";

export async function checkIsEmail(email: string) {
    const user = await AuthRepository.findByEmail(email);
    if (!user) throw new Error("user not fund");
    else
        return user;
}