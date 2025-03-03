import {UserModel} from "../schemas/user.schema";
import {AuthRepository} from "../repositories/auth.repository";

export async function checkEmailExists(email: string) {


    const existingUser = await AuthRepository.findByEmail(email);
    if (existingUser) throw new Error("این ایمیل قبلاً ثبت شده است!");

}
