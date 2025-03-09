import {AuthRepository} from "../repositories/auth.repository";
import {IUser} from "../interfaces/user.interface";

export async function checkIsEmailAction(email: string): Promise<IUser | null> {
    const user = await AuthRepository.findByEmail(email);
    if (!user) throw new Error("user not fund");


    return user;
}