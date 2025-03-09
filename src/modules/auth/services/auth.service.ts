import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {AuthRepository} from "../repositories/auth.repository";
import {IUser} from "../interfaces/user.interface";
import {JWT_SECRET} from "../../../config/jwt";
import {checkEmailExistsAction} from "../actions/checkEmailExistsAction";
import {checkIsEmailAction} from "../actions/checkIsEmailAction";
import {checkIsPasswordAction} from "../actions/checkIsPasswordAction";
import {tokenAction} from "../actions/tokenAction";

export class AuthService {
    static async register(userData: IUser) {

        checkEmailExistsAction(userData.email)

        userData.password = await bcrypt.hash(userData.password, 10);
        const user = await AuthRepository.createUser(userData);

        const token = await tokenAction(user._id)
        return {token, user}
    }

    static async login(email: string, password: string) {
        const user = await checkIsEmailAction(email) as IUser


        checkIsPasswordAction(password, user.password);

        const token = await tokenAction(user._id)
        return {token, user};
    }
}
