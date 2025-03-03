import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {AuthRepository} from "../repositories/auth.repository";
import {IUser} from "../schemas/user.schema";
import {JWT_SECRET} from "../../../config/jwt";
import {checkEmailExists} from "../actions/checkEmailExists";
import {checkIsEmail} from "../actions/checkIsEmail";
import {checkIsPassword} from "../actions/checkIsPassword";

export class AuthService {
    static async register(userData: IUser) {

        checkEmailExists(userData.email)

        userData.password = await bcrypt.hash(userData.password, 10);
        return AuthRepository.createUser(userData);
    }

    static async login(email: string, password: string) {
        const user = await checkIsEmail(email)

        checkIsPassword(password, user.password);


        const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: "120h"});
        return {token, user};
    }
}
